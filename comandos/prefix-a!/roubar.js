var database = require("../../database.js")
var dayCol = new Set()
let dayRDM = Math.round(Math.random() * 3500)

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();

    if (dayCol.has(message.author.id)) return message.reply("**Você já roubou hoje. :confused:**");

    if (message.mentions.users.size < 1) {
        message.reply("**Mecione alguem para roubar. :confused:**");
    } else {
        if (message.mentions.users.first().id == message.author.id) return message.reply("**Você não pode roubar você mesmo!**");
        if (message.mentions.users.first().bot) return message.reply("**Você não pode roubar um bot!**");

        database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            database.Users.findOne({
                "_id": message.mentions.users.first().id
            }, function(err2, doc2) {

                if (documento) {

                    if (doc2) {

                        if (Math.round(Math.random() * 1) == 1) {

                            documento.coins += dayRDM
                            documento.save();
                            doc2.coins -= dayRDM
                            doc2.save();
                            message.reply("**Você teve sucesso ao roubar " + dayRDM + " coins de <@" + message.mentions.users.first().id + ">.**");
                            dayCol.add(message.author.id)
                            setTimeout(function() {
                                dayCol.delete(message.author.id)
                            }, 6 * 1000 * 60 * 60)

                        } else {
                            documento.coins -= dayRDM
                            documento.save();
                            message.reply("**Você foi pego ao tentar roubar e perdeu " + dayRDM + " coins! :oncoming_police_car:**");
                            dayCol.add(message.author.id)
                            setTimeout(function() {
                                dayCol.delete(message.author.id)
                            }, 6 * 1000 * 60 * 60)
                        }

                    } else {

                        var pessoa = new database.Users({
                            _id: message.mentions.users.first().id,
                            level: 0,
                            xp: 0,
                            coins: 0
                        })

                        pessoa.save()

                    }

                } else {

                    var pessoa = new database.Users({
                        _id: message.author.id,
                        level: 0,
                        xp: 0,
                        coins: 0
                    })

                    pessoa.save()

                }

            })

        })


    }

}