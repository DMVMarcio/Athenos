exports.run = (client, message, args) => {

//            -= EDITAR =-
//
//id do dono
const dono = "315263840268976128"

    let reason = args.slice(0).join(' ');

    if (message.author.id !== dono) return message.reply("**Você não pode usar este comando!**");
    if (reason.length < 1) return message.reply('**Diga o comando que devo reiniciar!**');

    delete require.cache[require.resolve(`./${args[0]}.js`)];

    message.channel.sendMessage("**:gear: " + message.author + " Comando " + args[0] + " reiniciado!**");

}