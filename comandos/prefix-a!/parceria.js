var database = require("../../database.js")

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let razaot = args.slice(2).join(' ');
    let razaoq = args.slice(3).join(' ');
    let user = message.mentions.users.first();

        if(!razaou.length < 1) {

    if(message.content.startsWith("a!parceria notify")) {

        if(!message.guild.members.get(message.author.id).roles.find("name", '🔔 PARCECAR 🔔')) {
            message.reply("**Notificações de parceiros ativadas! 🔔**");
            message.guild.members.get(message.author.id).addRole("416952138690986002");
        } else {
            message.reply("**Notificações de parceiros desativadas! 🔕**");
            message.guild.members.get(message.author.id).removeRole("416952138690986002");
        }

    }

    if(message.content.startsWith("a!parceria vir")) {
        message.channel.sendMessage({
            "embed": {
                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ PARCEIRO ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\nPara você ser parceiro do servidor você deve conversar com um dos donos do servidor. 😉\nㅤ\n**🔉Você pode ser parceiro do nosso server com:**\n```\n- YouTube\n- Twitch\n- Twitter\n- Site\n- Discord```",
                "color": 55512,
                "thumbnail": {
                    "url": "https://i.imgur.com/4JaNmFp.png"
                }
            }
        });
    }

if(message.content.startsWith("a!parceria set")) {

    if (message.author.id === "315263840268976128" || message.author.id === '399302842688733195'){

        if(!razaod.length < 1) {

            if(message.content.startsWith("a!parceria set youtube")) {

                if(!razaot.length < 1) {

                    if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para setar parceria. :confused:**");

                    database.Parceiros.findOne({
                        "_id": message.mentions.users.first().id
                    }, function (erparceiro, dcparceiro) {
            
                        if(dcparceiro) {

                            dcparceiro.youtubelink = `${args[2]}`
                            dcparceiro.youtube = true
                            dcparceiro.save();
                            message.reply("**Usuário setado como parceiro YouTube**");

                        } else {
                            
                            var parceiro = new database.Users({
                                _id: message.mentions.users.first().id,
                                youtubelink: "Nenhum",
                                youtube: false,
                                twitchlink: "Nenhum",
                                twitch: false,
                                twitterlink: "Nenhum",
                                twitter: false,
                                sitelink: "Nenhum",
                                site: false,
                                discordlink: "Nenhum",
                                discord: false
                            })

                            parceiro.save()

                        }

                    })

                } else {
                    message.channel.sendMessage({
                        "embed": {
                            "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ PARCEIRO ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!parceria set youtube <link do canal> <menção>```",
                            "color": 55512,
                            "thumbnail": {
                                "url": "https://i.imgur.com/4JaNmFp.png"
                            }
                        }
                    });
                }

            }

            if(message.content.startsWith("a!parceria set twitch")) {

                if(!razaot.length < 1) {

                    if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para setar parceria. :confused:**");

                    database.Parceiros.findOne({
                        "_id": message.mentions.users.first().id
                    }, function (erparceiro, dcparceiro) {
            
                        if(dcparceiro) {

                            dcparceiro.twitchlink = `${args[2]}`
                            dcparceiro.twitch = true
                            dcparceiro.save();
                            message.reply("**Usuário setado como parceiro Twitch**");

                        } else {

                            var parceiro = new database.Users({
                                _id: message.mentions.users.first().id,
                                youtubelink: "Nenhum",
                                youtube: false,
                                twitchlink: "Nenhum",
                                twitch: false,
                                twitterlink: "Nenhum",
                                twitter: false,
                                sitelink: "Nenhum",
                                site: false,
                                discordlink: "Nenhum",
                                discord: false
                            })

                            parceiro.save()

                        }

                    })

                } else {
                    message.channel.sendMessage({
                        "embed": {
                            "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ PARCEIRO ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!parceria set twitch <link do canal> <menção>```",
                            "color": 55512,
                            "thumbnail": {
                                "url": "https://i.imgur.com/4JaNmFp.png"
                            }
                        }
                    });
                }

            }

            if(message.content.startsWith("a!parceria set twitter")) {

                if(!razaot.length < 1) {

                    if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para setar parceria. :confused:**");

                    database.Parceiros.findOne({
                        "_id": message.mentions.users.first().id
                    }, function (erparceiro, dcparceiro) {
            
                        if(dcparceiro) {

                            dcparceiro.twitterlink = `${args[2]}`
                            dcparceiro.twitter = true
                            dcparceiro.save();
                            message.reply("**Usuário setado como parceiro Twitter**");

                        } else {

                            var parceiro = new database.Users({
                                _id: message.mentions.users.first().id,
                                youtubelink: "Nenhum",
                                youtube: false,
                                twitchlink: "Nenhum",
                                twitch: false,
                                twitterlink: "Nenhum",
                                twitter: false,
                                sitelink: "Nenhum",
                                site: false,
                                discordlink: "Nenhum",
                                discord: false
                            })

                            parceiro.save()

                        }

                    })

                } else {
                    message.channel.sendMessage({
                        "embed": {
                            "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ PARCEIRO ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!parceria set twitter <link da conta> <menção>```",
                            "color": 55512,
                            "thumbnail": {
                                "url": "https://i.imgur.com/4JaNmFp.png"
                            }
                        }
                    });
                }

            }

            if(message.content.startsWith("a!parceria set site")) {

                if(!razaot.length < 1) {

                    if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para setar parceria. :confused:**");

                    database.Parceiros.findOne({
                        "_id": message.mentions.users.first().id
                    }, function (erparceiro, dcparceiro) {
            
                        if(dcparceiro) {

                            dcparceiro.sitelink = `${args[2]}`
                            dcparceiro.site = true
                            dcparceiro.save();
                            message.reply("**Usuário setado como parceiro Site**");

                        } else {

                            var parceiro = new database.Users({
                                _id: message.mentions.users.first().id,
                                youtubelink: "Nenhum",
                                youtube: false,
                                twitchlink: "Nenhum",
                                twitch: false,
                                twitterlink: "Nenhum",
                                twitter: false,
                                sitelink: "Nenhum",
                                site: false,
                                discordlink: "Nenhum",
                                discord: false
                            })

                            parceiro.save()

                        }

                    })

                } else {
                    message.channel.sendMessage({
                        "embed": {
                            "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ PARCEIRO ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!parceria set site <link do site> <menção>```",
                            "color": 55512,
                            "thumbnail": {
                                "url": "https://i.imgur.com/4JaNmFp.png"
                            }
                        }
                    });
                }

            }

            if(message.content.startsWith("a!parceria set discord")) {

                if(!razaot.length < 1) {

                    if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para setar parceria. :confused:**");

                    database.Parceiros.findOne({
                        "_id": message.mentions.users.first().id
                    }, function (erparceiro, dcparceiro) {
            
                        if(dcparceiro) {

                            dcparceiro.discordlink = `${args[2]}`
                            dcparceiro.discord = true
                            dcparceiro.save();
                            message.reply("**Usuário setado como parceiro Discord**");

                        } else {

                            var parceiro = new database.Users({
                                _id: message.mentions.users.first().id,
                                youtubelink: "Nenhum",
                                youtube: false,
                                twitchlink: "Nenhum",
                                twitch: false,
                                twitterlink: "Nenhum",
                                twitter: false,
                                sitelink: "Nenhum",
                                site: false,
                                discordlink: "Nenhum",
                                discord: false
                            })

                            parceiro.save()

                        }

                    })

                } else {
                    message.channel.sendMessage({
                        "embed": {
                            "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ PARCEIRO ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!parceria set discord <link do server> <menção>```",
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
                    "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ PARCEIRO ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!parceria set youtube\na!parceria set twitch\na!parceria set twitter\na!parceria set site\na!parceria set discord```",
                    "color": 55512,
                    "thumbnail": {
                        "url": "https://i.imgur.com/4JaNmFp.png"
                    }
                }
            });
        }
    } else {
        message.reply("**Sem permissão. :confused:**");
    }
}

    if(message.content.startsWith("a!parceria info")) {

        if (message.mentions.users.size < 1) return message.reply("**Mencione algum para parceiro do servidor. :confused:**");
        database.Parceiros.findOne({
            "_id": message.mentions.users.first().id
        }, function (erparceiro, dcparceiro) {

            if(dcparceiro) {

                message.channel.sendMessage({
                    "embed": {
                        "description": `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ${message.mentions.users.first().username} ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n<:YouTube:417009124836900865> **YouTube:** ${dcparceiro.youtube ? `[clique aqui](${dcparceiro.youtubelink})` : 'nenhum'}\n<:Twitch:417009550278000640> **Twitch:** ${dcparceiro.twitch ? `[clique aqui](${dcparceiro.twitchlink})` : 'nenhum'}\n<:Twitter:417010065053188096> **Twitter:** ${dcparceiro.twitter ? `[clique aqui](${dcparceiro.twitterlink})` : 'nenhum'}\n<:Internet:417009892461641728> **Site:** ${dcparceiro.site ? `[clique aqui](${dcparceiro.sitelink})` : 'nenhum'}\n<:Discord:417010222322679808> **Discord:** ${dcparceiro.discord ? `[clique aqui](${dcparceiro.discordlink})` : 'nenhum'}`,
                        "color": 55512,
                        "thumbnail": {
                            "url": `${message.mentions.users.first().displayAvatarURL}`
                        }
                    }
                });

            } else {
                message.reply("**Este usuário não é parceiro do servidor.**");
            }

        })

    }

} else {
    message.channel.sendMessage({
        "embed": {
            "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ PARCEIRO ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!parceria info\na!parceria notify\na!parceria vir\na!parceria set```",
            "color": 55512,
            "thumbnail": {
                "url": "https://i.imgur.com/4JaNmFp.png"
            }
        }
    });
}

}