var database = require("../../database.js");
exports.run = (client, message, args) => {
    database.Users.findOne({
        "_id": message.author.id
    }, function(erromano, documano) {
        database.Users.find({}, function(erro, documento) {
            if (documento) {
                var position = documento.map(function(docu) {
                    return {
                        id: docu._id,
                        level: docu.level,
                        xp: docu.xp
                    }
                });
                position = position.sort(function(a, b) {
                    return b.level - a.level
                    return b.xp - a.xp
                });
                position = position.filter(function(a) {
                    return client.users.get(a.id)
                })
                var unbug = 350 * a.level + 1
                var unbug2 = 350 * documando.level + 1
                var toplevel = "\n" + position.slice(0, 10).map((a, posicao) => "**[" + (posicao + 1) + "]** " +

                    client.users.get(a.id).username + " - :star2: **Level:** " + a.level + "      :star: **Exp:** " + a.xp + "/" + unbug).join("\nㅤ\n") + "";
                message.channel.sendMessage({
                    "embed": {
                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ RANK ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n" + toplevel,
                        "color": 55512,
                        "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": "Sua pontuação: Level: " + documano.level + ", Exp: " + documano.xp + "/" + unbug2
                        },
                        "thumbnail": {
                            "url": "https://i.imgur.com/4JaNmFp.png"
                        }
                    }
                })
            }
        });
    })
}