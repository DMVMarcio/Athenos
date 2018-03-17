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
                            
                                    pessoa.save()
                               
                                    documento.invitecode = message.content.replace("a!icode create ", "")
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

                    } else {
                        message.reply("**Você já usou um convite, ou já criou um. :cofused:**");
                    }

                })

            } else {
                message.reply("**Diga o codigo de convite. :confused:**");
            }

            }

        } else {
            message.channel.sendMessage({
                "embed": {
                  "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ INVITE CODE ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Link de convite:** https://discord.gg/9WUTx4A\nㅤ\n**Com os comandos a seguir, você poderá criar um codigo de convite que as pessoas que voce convidou poderão usar, e você ganhará coisas em troca.\nㅤ\nComo usar:**```\na!icode create <codigo que deseja>\na!icode usar <codigo de quem lhe convidou>```",
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
