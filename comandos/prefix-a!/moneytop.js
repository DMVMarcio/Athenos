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
                        coins: docu.coins
                    }
                });
                position = position.sort(function(a, b) {
                    return b.coins - a.coins
                });
                position = position.filter(function(a) {
                    return client.users.get(a.id)
                })
                var moneytop = "\n" + position.slice(0, 10).map((a, posicao) => "**" + (posicao + 1) + "** " + client.users.get(a.id).username + " - **" + a.coins + "**").join("\n") + "";
                message.channel.sendMessage({
                    "embed": {
                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ MONEY TOP ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n" + moneytop,
                        "color": 55512,
                        "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": "Sua pontuação: " + documano.coins + " coins"
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