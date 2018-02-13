var database = require("../../database.js")

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');

    if (!message.member.hasPermission(["MANAGE_GUILD"])) return message.reply("**Você não tem permissão para setar um welcome!**");

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {

                if (message.content.startsWith("a!welcome set")) {
                    if (!razaod.length < 1) {

                        documento.welcomechannel = message.channel.id
                        documento.welcomemsg = message.content.replace("a!welcome set ", "");
                        documento.welcome = true
                        documento.save();
                        message.reply("**Welcome setado com sucesso!**");

                    } else {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ WELCOME ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!welcome set <mensagem de bem-vindo>```",
                                "color": 55512,
                                "thumbnail": {
                                    "url": "https://i.imgur.com/4JaNmFp.png"
                                }
                            }
                        });
                    }
                }

                if (message.content.startsWith("a!welcome remove")) {
                    if (!documento.welcome) {
                        message.reply("**Não há um welcome definido neste servidor!**");
                    } else {
                        documento.welcome = false
                        documento.welcomechannel = "Nenhum"
                        documento.welcomemsg = "Nenhuma"
                        documento.save()
                        message.reply("**Welcome removido com sucesso!**");
                    }
                }

                if (message.content.startsWith("a!welcome info")) {
                    if (!documento.welcome) {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ WELCOME ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```{member} menciona o usuário\n{guild} fala o nome do servidor\n{name} fala o nome do usuário```",
                                "color": 55512,
                                "thumbnail": {
                                    "url": "https://i.imgur.com/4JaNmFp.png"
                                }
                            }
                        });
                    } else {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ WELCOME ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Mensagem:** " + documento.welcomemsg + "\n**Canal de bem-vindo:** <#" + documento.welcomechannel + ">\nㅤ\n**Como usar:**\n```{member} menciona o usuário\n{guild} fala o nome do servidor\n{name} fala o nome do usuário```",
                                "color": 55512,
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
                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ WELCOME ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!welcome set\na!welcome remove\na!welcome info```",
                        "color": 55512,
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
                byebyemsg: "Nenhuma"
            })
            servidor.save()
            message.reply("**Use o comando novamente!**");

        }

    })

}