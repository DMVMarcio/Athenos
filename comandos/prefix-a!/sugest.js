exports.run = (client, message, args) => {

    var coldown = new Set()
    let razaou = args.slice(0).join(' ');

    if(!razaou.length < 1) {

        if(!coldown.has(message.author.id)) {

        message.guild.channels.get("418128504618614815").sendMessage({
            "embed": {
                "description": `ㅤㅤㅤㅤㅤㅤㅤㅤ**❄ NOVA SUGESTÃO ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Por:** <@${message.author.id}>\nㅤ\nㅤ- ${message.content.replace("a!sugest ","")}`,
                "color": 55512,
                "thumbnail": {
                    "url": "https://i.imgur.com/4JaNmFp.png"
                }
            }
        }).then(function(value) {
            setTimeout(function() {
                value.react("👍");
            }, 500)
            setTimeout(function() {
                value.react("👎");
            }, 1000)
        })

        coldown.add(message.author.id)
        setTimeout(function() {
            coldown.delete(message.author.id)
        }, 3 * 1000 * 60)

    } else {
        message.reply("**Você deve esperar 3 minutos pra dar outra sugestão. :confused:**");
    }

    } else {
        message.reply("**Diga sua sugestão**");
    }

}