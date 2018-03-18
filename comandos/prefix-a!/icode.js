var database = require("../../database.js")

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let razaot = args.slice(2).join(' ');

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
    
      if (documento) {

        if (!razaou.length < 1) {

            if (message.content.startsWith("a!icode delete")) {

                if(documento.invitecode == "Nenhum") {
                    message.reply("**Você não possui um icode. :confused:**");
                } else {
                    database.Convites.deleteOne({
                        "criador": message.author.id
                    }, function(ercodek, docodek) {})
                    message.reply("**icode deletado.**");
                }

            }

            if (message.content.startsWith("a!icode top")) {

                database.Convites.find({}, function(erro, documaninho) {
                    if (documaninho) {
                        var position = documaninho.map(function(docu) {
                            return {
                                _codigo: docu._codigo,
                                usos: docu.usos
                            }
                        });
                        position = position.sort(function(a, b) {
                            return b.points - a.points
                        });
                        var topcodes = "\n" + position.slice(0, 10).map((a, posicao) => "**" + (posicao + 1) + "** " + a._codigo + " - **" + a.usos + " usos.**").join("\n") + "";
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ICODES ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n" + topcodes,
                                "color": 55512,
                                "thumbnail": {
                                    "url": "https://i.imgur.com/4JaNmFp.png"
                                }
                            }
                        })
                    }
                });

            }

            if (message.content.startsWith("a!icode create")) {

                if (!razaod.length < 1) {

                        if(documento.invitecode == "Nenhum"){

                            database.Convites.findOne({
                                "_codigo": message.content.replace("a!icode create ", "")
                            }, function(ercodek, docodek) {

                                if(docodek){
                                    message.reply("**ICODE já existente. :confused:**");
                                } else {

                                    var icode = new database.Convites({
                                        _codigo: message.content.replace("a!icode create ", ""),
                                        criador: message.author.id,
                                        usos: 0
                                    })
                            
                                    icode.save()
                               
                                    documento.invitecode = message.content.replace("a!icode create ", "")
                                    documento.invitetru = true
                                    documento.save();
                                    message.reply("**icode criado com sucesso. :smile:**");

                                }

                            })

                        } else {
                            message.reply("**Você já possui um icode**");
                        }

                } else {
                    message.reply("**Diga o código de convite que deseja.**");
                }

            }

            if (message.content.startsWith("a!icode usar")) {

            if (!razaod.length < 1) {

                database.Convites.findOne({
                    "_codigo": message.content.replace("a!icode usar ", "")
                }, function(ercode, docode) {

                    if(!documento.invitetru){

                        docode.usos += 1
                        docode.save()
                        documento.invitetru = true
                        documento.save();
                        database.Users.findOne({
                            "_id": docode.criador
                        }, function(errinho, convidador) {

                            if(convidador){

                                convidador.coins += 10000
                                convidador.invitou += 1
                                convidador.save()
                                message.channel.sendMessage(`**<@${convidador._id}> ganhou 10000 coins por convidar ${message.author}.**`);
                                message.reply("**Código de convite usado.**");

                            } else {
                                message.reply("**Ocorreu um erro**");
                            }

                        })

                    } else {
                        message.reply("**Você já usou um convite, ou já criou um. :confused:**");
                    }

                })

            } else {
                message.reply("**Diga o codigo de convite. :confused:**");
            }

            }

        } else {
            message.channel.sendMessage({
                "embed": {
                  "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ INVITE CODE ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Link de convite:** https://discord.gg/9WUTx4A\nㅤ\n**Com os comandos a seguir, você poderá criar um codigo de convite que as pessoas que voce convidou poderão usar, e você ganhará coisas em troca.\nㅤ\nComo usar:**```\na!icode create <codigo que deseja>\na!icode delete\na!icode usar <codigo de quem lhe convidou>\na!icode top```",
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
