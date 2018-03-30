var database = require("../../database.js")
var dayCol = new Set()
let dayRDM = Math.round(Math.random() * 15000)

exports.run = (client, message, args) => {

    if (dayCol.has(message.author.id)) return message.reply("**Coins diário já coletado. :confused:**");

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {

            documento.coins += dayRDM
            documento.save()
            message.reply(`**Você ganhou ${dayRDM} coins diarios. :smile:**`);
            dayCol.add(message.author.id)
            setTimeout(function() {
                dayCol.delete(message.author.id)
            }, 6 * 1000 * 60 *60)

        } else {

            var pessoa = new database.Users({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0,
                conquistas: 0,
                mensagens: 0,
                msglevel: 0,
                invitetru: false,
                invitecode: "Nenhum",
                invitou: 0,
                warn: 0,
                rep: 0
            })

            pessoa.save()

        }
    })

}
