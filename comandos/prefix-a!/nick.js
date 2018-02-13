exports.run = (client, message, args) => {

    var nicknames = require('nicknames');
    let razaou = args.slice(0).join(' ');
    const nickGenerator = require('nick-generator')
    const nick = nickGenerator()

    if (!razaou.length < 1) {

        if (message.content.startsWith("a!nick masculino")) {
            message.reply("**Aqui está:**\n- " + nicknames.maleRandom());
        }

        if (message.content.startsWith("a!nick feminino")) {
            message.reply("**Aqui está:**\n- " + nicknames.femaleRandom());
        }

        if (message.content.startsWith("a!nick gerar")) {
            message.reply("**Aqui está:**\n- " + nick);
        }

    } else {
        message.channel.sendMessage({
            "embed": {
                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ NICK ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!nick masculinho\na!nick feminino\na!nick gerar```",
                "color": 55512,
                "thumbnail": {
                    "url": "https://i.imgur.com/4JaNmFp.png"
                }
            }
        });
    }

}