exports.run = (client, message, args) => {

        let reason = args.slice(0).join(' ');
    
        var desenvolvedores = ["315263840268976128", "254042074712768512", "425797924232888340", "404966710077292544", "286144811680137218", "273691083425447936"]

        if(!desenvolvedores.includes(message.author.id)) return message.reply("**Sem permissão. :confused:**");
        if (reason.length < 1) return message.reply('**Diga o comando que devo reiniciar!**');
    
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    
        message.channel.sendMessage("**:gear: " + message.author + " Comando " + args[0] + " reiniciado!**");
    
}