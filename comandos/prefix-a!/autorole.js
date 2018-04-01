var database = require("../../database.js")

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let razaot = args.slice(2).join(' ');
    let razaoq = args.slice(3).join(' ');
    let user = message.mentions.roles.first();

    var desenvolvedores = ["315263840268976128", "254042074712768512", "425797924232888340", "404966710077292544", "286144811680137218", "273691083425447936"]

    if (message.member.hasPermission(["MANAGE_ROLES_OR_PERMISSIONS"]) || desenvolvedores.includes(message.author.id)) return message.reply("**Você não tem permissão para setar um autorole!**");

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {

                if (message.content.startsWith("p!autorole set")) {

                    if (message.mentions.roles.size < 1) return message.reply("**Mencione o cargo que deseja setar auto-role!**");

                    documento.autoroleid = message.mentions.roles.first().id
                    documento.autorole = true
                    documento.save();

                    message.reply("**Autorole setado com sucesso.**");

                }

                if (message.content.startsWith("p!autorole remove")) {
                        if (!documento.autorole) {
                            message.reply("**Não há um autorole definido neste servidor!**");
                        } else {
                            documento.autoroleid = "Nenhum"
                            documento.autorole = false
                            documento.save()
                            message.reply("**Autorole removido com sucesso!**");
                    }
                }

                if (message.content.startsWith("p!autorole info")) {

                    if (!documento.autorole) {
                        message.channel.sendMessage({
                            "embed": {
                              "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```\np!autorole set <menção do cargo>\np!autorole remove```",
                              "color": 55512,
                              "timestamp": new Date(),
                              "footer": {
                                "icon_url": message.author.displayAvatarURL,
                                "text": message.author.username
                              },
                              "thumbnail": {
                                "url": "https://i.imgur.com/4JaNmFp.png"
                              }
                            }
                          });
                    } else {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Cargo:** <@&" + documento.autoroleid + ">\nㅤ\n**Como usar:**\n```\np!autorole set <menção do cargo>\np!autorole remove```",
                                "color": 55512,
                                "timestamp": new Date(),
                                "footer": {
                                  "icon_url": message.author.displayAvatarURL,
                                  "text": message.author.username
                                },
                                "thumbnail": {
                                    "url": "https://i.imgur.com/4JaNmFp.png"
                                }
                            }
                        });
                    }

                }

            } else {
                message.reply({
                    "embed": {
                      "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```\np!autorole set <menção do cargo>\np!autorole remove\np!autorole info```",
                      "color": 55512,
                      "timestamp": new Date(),
                      "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": message.author.username
                      },
                      "thumbnail": {
                        "url": "https://i.imgur.com/4JaNmFp.png"
                      }
                    }
                  });
            }

        } else {

            var servidor = new database.Guilds({
                _id: message.guild.id,
                welcome: false,
                welcomechannel: "Nenhum",
                welcomemsg: "Nenhuma",
                byebye: false,
                byebyechannel: "Nenhum",
                byebyemsg: "Nenhuma",
                autorole: false,
                autoroleid: "Nenhum"
            })
            servidor.save()
            message.reply("**Use o comando novamente!**");

        }

    })

}