var database = require("../../database.js")

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1) {

        database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            if (documento) {

                message.reply("**Você tem " + documento.coins + " coins. :sunglasses:**");

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

    } else {

        database.Users.findOne({
            "_id": message.mentions.users.first().id
        }, function(erro, documento) {

            if (documento) {

                message.reply("**Este usuário tem " + documento.coins + " coins. :sunglasses:**");

            } else {

                var pessoa = new database.Users({
                    _id: message.mentions.users.first().id,
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
}