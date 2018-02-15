var database = require("../../database.js")

var userPART = new Set()
var dica = new Set()
var dica2 = new Set()
let sortNUMERO = Math.round(Math.random() * 100)

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');

    database.Loterias.findOne({
        "_lot": "loteria"
    }, function (erloteria, dcloteria) {

        if(dcloteria) {

            if(!razaou.length < 1) {

                if(message.content.startsWith("a!loteria info")) {

                    if(dcloteria.aberta) {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "**:white_check_mark: |** A loteria está aberta, use `a!loteria part + <numero de 0 a 100>`",
                                "author": {
                                    "name": "ATHENOS",
                                    "icon_url": "https://i.imgur.com/4JaNmFp.png"
                                },
                                "color": 55512
                            }
                        });
                    } else {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ LOTERIA ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n:money_mouth: **Ultimo ganhador:** <@" + dcloteria.ganhador + ">\n:moneybag: **Premio:** " + dcloteria.valor + "\n:1234: **Número sorteado:** " + dcloteria.numero + "\nㅤ\nㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**:arrow_up:  FECHADA :arrow_up: **ㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
                                "color": 55512,
                                "thumbnail": {
                                    "url": "https://i.imgur.com/4JaNmFp.png"
                                }
                            }
                        });
                    }

                }

                if(message.content.startsWith("a!loteria criar")) {

                    if (message.author.id === "315263840268976128" || message.author.id === '399302842688733195' || message.author.id === '347974756051714059') {
                    if(dcloteria.aberta) {
                        message.reply("**Já existe uma loteria em andameto. :confused:**");
                    } else {
                        if(!razaod.length < 1) {
                            dcloteria.aberta = true
                            dcloteria.valor = parseInt(args[1])
                            dcloteria.numero = sortNUMERO
                            dcloteria.ganhador = "Ninguem"
                            dcloteria.save();
                            message.guild.channels.get("410084948930854912").sendMessage("<@&399759520089374720> :arrow_down: :arrow_down: <@&399759520089374720>")
                            message.guild.channels.get("410084948930854912").sendMessage({
                                "embed": {
                                    "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ LOTERIA ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Loteria iniciada, participe usando:**\n`a!loteria part <numero de 0 a 100>`\nㅤ\n**PS:** A loteria dura apenas 3 horas.",
                                    "color": 55512,
                                    "thumbnail": {
                                        "url": "https://i.imgur.com/4JaNmFp.png"
                                    }
                                }
                            });
                            message.reply("**Loteria criada com sucesso.**");
                            setTimeout(function () {
                                if(dcloteria.aberta) {
                                    dcloteria.aberta = false
                                    dcloteria.save();
                                    message.guild.channels.get("410084948930854912").sendMessage({
                                        "embed": {
                                            "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ LOTERIA ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Loteria finalizada. :confused:**",
                                            "color": 55512,
                                            "thumbnail": {
                                                "url": "https://i.imgur.com/4JaNmFp.png"
                                            }
                                        }
                                    });
                                    delete require.cache[require.resolve(`./loteria.js`)];
                                } else {
                                    delete require.cache[require.resolve(`./loteria.js`)];
                                }
                            }, 3 * 1000 * 60 * 60)
                        } else {
                            message.reply("**Diga o valor da loteria. :confused:**");
                        }
                    }
                } else {
                    message.reply("**Você não pode usar este comando. :confused:**");
                }
            }

            if(message.content.startsWith("a!loteria fechar")) {
                    if(dcloteria.aberta) {
                        dcloteria.aberta = false
                        dcloteria.save();
                        message.guild.channels.get("410084948930854912").sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ LOTERIA ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Loteria finalizada. :confused:**",
                                "color": 55512,
                                "thumbnail": {
                                    "url": "https://i.imgur.com/4JaNmFp.png"
                                }
                            }
                        });
                        message.reply("**Loteria fechada. :confused:**");
                        delete require.cache[require.resolve(`./loteria.js`)];
                } else {
                    message.reply("**A loteria já está fechada. :confused:**");
                }
        }

                if(message.content.startsWith("a!loteria part")) {
                    if(dcloteria.aberta) {
                        if(userPART.has(message.author.id)) return message.reply("**Você já participou. :confused:**");
                        if(!razaod.length < 1) {
                            if(parseInt(args[1]) > -1) {
                                if(parseInt(args[1]) < 101) {

                                    database.Users.findOne({
                                        "_id": message.author.id
                                    }, function (erro, documento) {

                                        if(documento) {

                                            if(parseInt(args[1]) == dcloteria.numero) {
                                                documento.coins += dcloteria.valor
                                                documento.save();
                                                dcloteria.aberta = false
                                                dcloteria.ganhador = message.author.id
                                                dcloteria.save();
                                                message.reply(`**Parabens, você acertou o numero e ganhou ${dcloteria.valor} coins. :gift:**`);
                                                message.guild.channels.get("410084948930854912").sendMessage({
                                                    "embed": {
                                                        "description": `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ LOTERIA ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**<@${message.author.id}> Ganhou na loteria. :smile:**`,
                                                        "color": 55512,
                                                        "thumbnail": {
                                                            "url": "https://i.imgur.com/4JaNmFp.png"
                                                        }
                                                    }
                                                });
                                                delete require.cache[require.resolve(`./loteria.js`)];
                                            } else {
                                                message.reply("**Você errou o número. :sob:**");
                                                userPART.add(message.author.id);
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

                                } else {
                                    message.reply("**Não pode ser maior que 100. :confused:**");
                                }
                            } else {
                                message.reply("**Nao pode ser menos que 0. :confused:**");
                            }
                        } else {
                            message.reply("**Diga um numero de 0 a 100**");
                        }
                    } else {
                        message.reply("**Loteria esta fechada. :confused:**");
                    }
                }

                if(message.content.startsWith("a!loteria dica")) {
                    if(dcloteria.aberta) {
                    if(dica.has(message.author.id)){
                    if(dica2.has(message.author.id)) {
                        message.reply("**Todas as suas dicas já foram usadas. :confused:**");
                    } else {
                    if (Math.round(Math.random() * 1) == 1) {
                        dica2.add(message.author.id);
                        message.reply("**Dica enviada no seu privado. :pencil:**");
                        message.author.sendMessage(`${message.author}, **O número é maior que ${dcloteria.numero - Math.round(Math.random() * 15)} e menor que ${dcloteria.numero + Math.round(Math.random() * 15)}. Boa sorte :smile:**`);
                    } else {
                        dica2.add(message.author.id);
                        message.reply("**Dica enviada no seu privado. :pencil:**");
                        message.author.sendMessage(`${message.author}, **Bem perto de ${dcloteria.numero - Math.round(Math.random() * 4) + Math.round(Math.random() * 3)}. Boa sorte :smile:**`);
                    }
                }
            } else {
                if (Math.round(Math.random() * 1) == 1) {
                    dica.add(message.author.id);
                    message.reply("**Dica enviada no seu privado. :pencil:**");
                    message.author.sendMessage(`${message.author}, **O número é maior que ${dcloteria.numero - Math.round(Math.random() * 15)} e menor que ${dcloteria.numero + Math.round(Math.random() * 15)}. Boa sorte :smile:**`);
                } else {
                    dica.add(message.author.id);
                    message.reply("**Dica enviada no seu privado. :pencil:**");
                    message.author.sendMessage(`${message.author}, **Bem perto de ${dcloteria.numero - Math.round(Math.random() * 4) + Math.round(Math.random() * 3)}. Boa sorte :smile:**`);
                }
            }
                    } else {
                        message.reply("**Não há uma loteria no momento. :confused:**");
                    }
                }

            } else {
                message.channel.sendMessage({
                    "embed": {
                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ LOTERIA ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!loteria info\na!loteria part\na!loteria criar\na!loteria dica\na!loteria fechar```",
                        "color": 55512,
                        "thumbnail": {
                            "url": "https://i.imgur.com/4JaNmFp.png"
                        }
                    }
                });
            }

        } else {

            var pgloteria = new database.Loterias({
                _lot: "loteria",
                ganhador: "Ninguem",
                valor: 0,
                aberta: false,
                numero: 0
            })

            pgloteria.save()

        }

    })

}