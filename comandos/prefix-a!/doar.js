var database = require("../../database.js")

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();
    let razaod = args.slice(1).join(' ');

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {

        if (documento) {

            if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para doar dinheiro!**");
            if (message.mentions.users.first().id == message.author.id) return message.reply("**Você não pode doar para você mesmo!**");
            if (message.mentions.users.first().bot) return message.reply("**Você não pode doar para um bot!**");
            if (!razaod.length < 1) {
                if (parseInt(args[1]) > 0) {
                if (args[1] < documento.coins) {

                    database.Users.findOne({
                        "_id": message.mentions.users.first().id
                    }, function(errou, docs) {

                        if (docs) {

                            docs.coins += parseInt(args[1])
                            docs.save();
                            documento.coins -= parseInt(args[1])
                            documento.save();
                            message.reply("**Doado com sucesso!**");

                        } else {

                            var pessoa = new database.Users({
                                _id: message.mentions.users.first().id,
                                level: 0,
                                xp: 0,
                                coins: 0
                            })

                            pessoa.save()

                        }

                    })

                } else {
                    message.reply("**Você não tem esse dinheiro!**")
                }
            } else {
                message.reply("**Não pode ser menor que 0!**");
            }
            } else {
                message.reply("**Diga quanto vai doar!**");
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

}