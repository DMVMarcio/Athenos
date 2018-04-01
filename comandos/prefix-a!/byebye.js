var database = require("../../database.js")

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');

    var desenvolvedores = ["315263840268976128", "254042074712768512", "425797924232888340", "404966710077292544", "286144811680137218", "273691083425447936"]

    if (message.member.hasPermission(["MANAGE_GUILD"]) || desenvolvedores.includes(message.author.id)) return message.reply("**Você não tem permissão para setar um byebye!**");

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {

                if (message.content.startsWith("p!byebye set")) {
                    if (!razaod.length < 1) {

                        documento.byebyechannel = message.channel.id
                        documento.byebyemsg = message.content.replace("p!byebye set ", "");
                        documento.byebye = true
                        documento.save();
                        message.reply("**byebye setado com sucesso!**");

                    } else {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ BYE-BYE ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```p!byebye set <mensagem de bye-bye>```",
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

                if (message.content.startsWith("p!byebye remove")) {
                    if (!documento.byebye) {
                        message.reply("**Não há um byebye definido neste servidor!**");
                    } else {
                        documento.byebye = false
                        documento.byebyechannel = "Nenhum"
                        documento.byebyemsg = "Nenhuma"
                        documento.save()
                        message.reply("**byebye removido com sucesso!**");
                    }
                }

                if (message.content.startsWith("p!byebye info")) {
                    if (!documento.byebye) {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ BYE-BYE ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```{member} menciona o usuário\n{guild} fala o nome do servidor\n{name} fala o nome do usuário```",
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
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ BYE-BYE ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Mensagem:** " + documento.byebyemsg + "\n**Canal de bye-bye:** <#" + documento.byebyechannel + ">\nㅤ\n**Como usar:**\n```{member} menciona o usuário\n{guild} fala o nome do servidor\n{name} fala o nome do usuário```",
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

                message.channel.sendMessage({
                    "embed": {
                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ BYE-BYE ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```p!byebye set\np!byebye remove\np!byebye info```",
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