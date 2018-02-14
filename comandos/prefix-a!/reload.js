exports.run = (client, message, args) => {

//            -= EDITAR =-
//
//id do dono
const dono = "315263840268976128"

    let reason = args.slice(0).join(' ');

    if (message.author.id === "315263840268976128" || message.author.id === '399302842688733195'){
    if (reason.length < 1) return message.reply('**Diga o comando que devo reiniciar!**');

    delete require.cache[require.resolve(`./${args[0]}.js`)];

    message.channel.sendMessage("**:gear: " + message.author + " Comando " + args[0] + " reiniciado!**");

} else {
    message.reply("**Sem permissão. :confused:**");
}
}