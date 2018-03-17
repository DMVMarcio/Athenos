var database = require("../../database.js")

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let razaot = args.slice(2).join(' ');
    var porcentagem = Math.round(Math.random() * 100)

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {

        if (documento) {


            if (!razaou.length < 1) {
                
                if (!razaod.length < 1) {

                    if (message.content.startsWith("a!apostar 2x")) {

                        if (parseInt(args[1]) > 0) {

                            if (parseInt(args[1]) < 150001) {

                            if (args[1] < documento.coins) {

                                if(porcentagem < 50){

                                    documento.coins -= parseInt(args[1])
                                    documento.save();
                                    message.reply("**Você perdeu a aposta. :confused:**");

                                } else {

                                    documento.coins += parseInt(args[1]) * 2
                                    documento.save();
                                    message.reply(`**Você ganhou a aposta, e ganhou ${(parseInt(args[1]) * 2)} coins**`);

                                }

                            } else {
                                message.reply("**Você não tem esse dinheiro.**");
                            }

                        } else {
                            message.reply("**Não pode ser mais que 150k. :moneybag:**");
                        }

                        } else {
                            message.reply("**Não pode ser menor que 0. :confused:**");
                        }

                    }

                    if (message.content.startsWith("a!apostar 3x")) {

                        if (parseInt(args[1]) > 0) {

                            if (parseInt(args[1]) < 150001) {

                            if (args[1] < documento.coins) {

                                if(porcentagem < 50){

                                    documento.coins -= parseInt(args[1])
                                    documento.save();
                                    message.reply("**Você perdeu a aposta. :confused:**");

                                } else {

                                    documento.coins += parseInt(args[1]) * 3
                                    documento.save();
                                    message.reply(`**Você ganhou a aposta, e ganhou ${(parseInt(args[1]) * 3)} coins**`);

                                }

                            } else {
                                message.reply("**Você não tem esse dinheiro.**");
                            }

                        } else {
                            message.reply("**Não pode ser mais que 150k. :moneybag:**");
                        }

                        } else {
                            message.reply("**Não pode ser menor que 0. :confused:**");
                        }

                    }

                    if (message.content.startsWith("a!apostar 4x")) {

                        if (parseInt(args[1]) > 0) {

                            if (parseInt(args[1]) < 150001) {

                            if (args[1] < documento.coins) {

                                if(porcentagem < 50){

                                    documento.coins -= parseInt(args[1])
                                    documento.save();
                                    message.reply("**Você perdeu a aposta. :confused:**");

                                } else {

                                    documento.coins += parseInt(args[1]) * 4
                                    documento.save();
                                    message.reply(`**Você ganhou a aposta, e ganhou ${(parseInt(args[1]) * 4)} coins**`);

                                }

                            } else {
                                message.reply("**Você não tem esse dinheiro.**");
                            }

                        } else {
                            message.reply("**Não pode ser mais que 150k. :moneybag:**");
                        }

                        } else {
                            message.reply("**Não pode ser menor que 0. :confused:**");
                        }

                    }

                } else {
                    message.reply("**Diga quanto quer apostar. :confused:**");
                }

            } else {
                message.channel.sendMessage({
                    "embed": {
                      "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ APOSTA ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**```\na!apostar < 2x | 3x | 4x > <quantidade>```",
                      "color": 55512,
                      "thumbnail": {
                        "url": "https://i.imgur.com/4JaNmFp.png"
                      }  
                    }
                  });
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

}