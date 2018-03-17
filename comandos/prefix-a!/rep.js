var database = require("../../database.js")
var dayCol = new Set()

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();

    if (dayCol.has(message.author.id)) return message.reply("**Você já deu rep hoje. :confused:**");

    if (message.mentions.users.size < 1) {
        message.reply("**Você já pode dar rep. :smile:**");
    } else {
        if (message.mentions.users.first().id == message.author.id) return message.reply("**Você não pode dar rep para você mesmo!**");
        if (message.mentions.users.first().bot) return message.reply("**Você não pode dar rep para um bot!**");

        database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            database.Users.findOne({
                "_id": message.mentions.users.first().id
            }, function(err2, doc2) {

                if (documento) {

                    if (doc2) {

                        doc2.rep += 1
                        doc2.save();
                        message.reply(`Você deu um ponto de reputação para ${message.mentions.users.first().username}`);
                        dayCol.add(message.author.id)
                        setTimeout(function() {
                            dayCol.delete(message.author.id)
                        }, 6 * 1000 * 60 * 60)

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

        })


    }

}