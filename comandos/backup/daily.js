var database = require("../../database.js")
var dayCol = []
let dayRDM = Math.round(Math.random() * 7500)

exports.run = (client, message, args) => {

    if (dayCol.includes(message.author.id)) return message.reply("**Coins diário já coletado. :confused:**");

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {

            documento.coins += dayRDM
            documento.save()
            message.reply(`**Você ganhou ${dayRDM} coins diarios. :smile:**`);
                            setTimeout(function () {
                        for (var i = 0; i < dayCol.length; i++) {
                          if (dayCol[i] === message.author.id) {
                            dayCol.splice(i, 1);
                          }
                        }
                            }, 6 * 1000 * 60 * 60)

        } else {

                var pessoa = new database.Users({
                    _id: message.author.id,
                    level: 0,
                    xp: 0,
                    totalxp: 0,
                    coins: 0,
                    desc: "Use t!desc para setar uma descrição!"
                })

        }
    })

}