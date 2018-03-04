exports.run = (client, message, args) => {

    message.channel.sendMessage({
        "embed": {
            "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ NSFW ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\nㅤ```+rule34 <tema>```\n**Será enviado uma imagem ou gif de acordo com o tema. :relaxed:**",
            "color": 55512,
            "thumbnail": {
                "url": "https://i.imgur.com/4JaNmFp.png"
            }
        }
    });
    
    }