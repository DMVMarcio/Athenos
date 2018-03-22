console.log("Conectando...")
const Discord = require('discord.js');
const client = new Discord.Client({
    autoReconnect: true,
    max_message_cache: 0
});
const moment = require('moment');
moment.locale('pt-BR');   
const config = require('./config.json');
var database = require("./database.js");
var nicknames = require('nicknames');
const fs = require('fs');

client.on('guildMemberAdd', member => {

    client.guilds.get("399756948951662592").members.get(member.id).addRole(client.guilds.get("399756948951662592").roles.get("399761217125613589"));
    client.guilds.get("399756948951662592").channels.get("402588212490534933").sendMessage(`**<@${member.id}>, Faça oque se pede acima ou kick! :no_mouth:**`);
    setTimeout(function() {
        if (member.guild.members.get(member.id)) {
            if (member.guild.members.get(member.id).roles.get("399761217125613589")) {
                client.guilds.get("399756948951662592").members.get(member.id).kick()
            } else {

            }
        } else {

        }
    }, 5 * 60 * 1000)

})

client.on('guildMemberAdd', member => {

    database.Guilds.findOne({
        "_id": member.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (documento.welcome) {

                var bemvindo = documento.welcomemsg
                client.guilds.get(member.guild.id).channels.get(documento.welcomechannel).sendMessage(bemvindo.replace(/{member}/g, `<@${member.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{name}/g, `${member.username}`));

            } else {}

        } else {}

    })
})

client.on('guildMemberRemove', member => {

    database.Users.deleteOne({
        "_id": member.id
    }, function(erro, documento) {})

    database.Convites.deleteOne({
        "criador": member.id
    }, function(ercodek, docodek) {})

    database.Guilds.findOne({
        "_id": member.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (documento.byebye) {

                var bbbyebye = documento.byebyemsg
                client.guilds.get(member.guild.id).channels.get(documento.byebyechannel).sendMessage(bbbyebye.replace(/{member}/g, `<@${member.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{name}/g, `${member.username}`));

            } else {}

        } else {}

    })
})

client.on('emojiDelete', emoji => {

    guild.fetchAuditLogs({type: 62}).then(logs => {
        const stap = logs.entries.find(e => e.target.id === emoji.id).executor;

        database.Users.findOne({
            "_id": stap.id
        }, function(erro, documento) {

        })

    });

})


fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});
client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/prefix-a!/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error("[CONSOLE] " + err);
    }

});


client.login(process.env.token)

fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});
client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.semprefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.semprefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/sem-prefix/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {

    }

});


client.login(process.env.token)


const prefix = "a!";
const token = process.env.token;
const id = "402607667039698944"

const configs = require('./jsons/config.json');

const teste = configs.teste;

client.on("ready", () => {

    let string = ''
    for (var i = 0; i < client.users.size; i++) {

        let userStatus = {
            online: 'online',
            idle: 'ausente',
            dnd: 'ocupado',
            offline: 'offline'
        }[client.users.array()[i].presence.status]

        string += "     - " + client.users.array()[i].username + " ( " + userStatus + " ) ,\n";
    }

    const membrosNomes = string
    var statusIDO = ["idle", "dnd", "online", ]
    var falas = ["Caso queira receber notificações de atualizações, novidades etc... vá em <#402608271153823754> !", "Lembre-se de respeitar as regras para melhor convivencia!", "Você pode mudar a cor do seu nome em <#403664026703233024>.", "É tanta gente que eu stalkeio que daqui a pouco o CSI me contrata.", "O amor é como um peido. Ninguém vê, mas quando a gente sente que está vindo fica com medo porque sabe que vai dar merda.", "Se bebe, não mude a senha do celular!", "Terminar o ensino médio é saber que você não está de férias e sim desempregado.", "A que ponto chegamos, disse o motorista do Uber.", "Ninguém te escuta, agora solta um peido pra ver!", "Você já ficou com muita gente feia, o que custa eu ser mais um?", "Poderia existir algum tutorial de conversa após o 'Humm...'", "Quando algo está errado, quer dizer que não está certo. O importante é o que importa.", "Só vim aqui dizer uma coisa: uma coisa.", "Estudos comprovam que os alunos que foram reprovados repetiram de ano.", "Antes de ser diagnosticado com depressão ou baixa autoestima, certifique-se de que não está rodeado por idiotas.", "Só vim avisar que não haverá sol esta noite.", "Muitas vezes a gente pensa que não pensa, mas a gente pensa, porque se a gente não pensasse, a gente não iria pensar que não pensa porque a gente não iria nem pensar.", "A mulher me ligou oferecendo ovo de colher, eu nem sabia que colher botava ovo.", "Divulgado resultado de uma pesquisa muito interessante. Concluíram, depois de anos de estudo que, quem festeja muitos aniversários, vive mais.", "Queria ser feio, e sou mesmo.", "O símbolo & não parece um carinha arrastando a bundinha no chão? Tá, parei...", "Ser jogar Asepxia na água o peixe vem sem espinha?", "Bom dia pra todo mundo, menos pra alguns.", "Não existe sacrifício sem sacrifício.", "Comunista é quem mora em comunidade né?", "Eu pensei tanto, que quando eu já tinha pensado não foi aquilo que eu estava pensando, por isso parei de pensar.", "Poucas coisas conseguem acabar com meu dia. Uma delas é a noite!", "Fiz uma limpa no meu Facebook, só deixei quem eu não removi.", "Hoje é o ontem de amanhã. E é o amanhã de ontem. E foi depois de amanhã, há dois dias atrás, será outo dia, da semana passada!", "Não autorizo que a autorização seja autorizada me desautorizando.", "Quando estiver triste, abrace um sapato, com sola!", "A Terra é plana, por isso é chamada de planeta. Se a Terra fosse redonda, seria chamada de Skol.", "Compre várias coisas com seus coins em <#404466159778398220>.", "Fui brincar de ser feio e nunca mas parei!", "Se eu estiver louco... FUI DROGADO MESMO.","O maior trauma é quando se conhece alguém que não era alguém, era algumas coisa!", "Como o sol tem bilhões de anos sendo que ele nasceu hoje de manhã?", "Como o sol tem bilhões de anos sendo que ele nasceu hoje de manhã?", "Se eu fumar maconha em uma folha de um livro de historia, vai ser baseado em histórias reais?", ":smirk:", "Professor é um ser humano que merece toda admiração possível, porque passar a vida lidando com adolescente idiota tem que amar muito a profissão mesmo.", "Será que na Suíça eles chamam o queijo Suíço queijo daqui mesmo?", "Ouvi dizer que o dizer é um discurso que diz dizendo.", "Não quer mais, então não fique traindo. Segurando alguém só pra provar que tem uma idiota que te aceita, e te quer. Porque você vai acabar sozinho e sem ninguém pelo fato de não saber valorizar, e reconhecer alguém que realmente quer cuidar de você.", "Tem gente por aí que é igual cobra. Só te passa a perna. Não, espera. Algo de errado, não está certo.", "É na profundidade do profundo que está a profundeza.", "Não entendo porque a manga da minha camisa não quer amadurecer.", "Se você vencer uma discussão na internet continuará um idiota, assim como o que perdeu.", "Se eu pensar em mim mesmo, pensando no pensamento do que eu estaria fazendo no pensamento, e pensando no outro eu taria pensando?"]

    console.log(`Conectado !`)
    setTimeout(function() {
        console.log(`                   ---== ATHENOS ==---                 \n\nMembros: (${client.users.size}):\n\n${membrosNomes}`);
    }, 2000)
    client.user.setGame(`Athenos - ${client.users.size - 1} membros`, "https://www.twitch.tv/zmarciogod")
    client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    setInterval(() => {
        client.guilds.get("399756948951662592").channels.get("402601119320244236").sendMessage("**" + falas[Math.round(Math.random() * falas.length - 1)] + "**").then((value) => {
            setTimeout(() => {
                value.delete();
            }, 25000);
        });
    }, 30 * 60 * 1000)
    setInterval(() => {
        client.user.setGame(`Athenos - ${client.users.size - 1} membros`, "https://www.twitch.tv/zmarciogod")
        client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    }, 1 * 60 * 1000)
    
});

client.login(process.env.token)

client.on("message", (message) => {

    var mensagens = ["Eu faço tão pouco exercício, que se você me ver correndo, corre também que alguma coisa deu errado.", "Antes tarde do que mais tarde.", "Quem não deve, não deve.", "Agua mole em pedra dura, tanto bate... até que cansa!", "Quando um não quer... o outro insiste!", "Diz-me com quem andas e te direi se vou contigo.", "Evite acidentes. Faça de propósito.", "Onde quer que vc esteja vc sempre estará lá.", "O alcool é o maior inimigo do homem... e o homem que foge de seus inimigos é um covarde!", "Tudo nessa vida passa, até uva passa.", "Mais vale um peido na mão do que dois cheirando.", "Se gravidez tem 9 meses, por que não se chama gravinove?", "Pareço normal, mas já conectei o pen drive no carregador pra ver se carrega mais memória.", "Se o Flamengo é o maior do Rio, quem é o maior do Mar?", "Se você se sente um idiota, lembre-se que tem gente que gasta dinheiro com Cartola FC.", "Eu não sou idiota, mas se leu isso, fica por favor.", "Você sabia que o papel de plástico é feito de plástico, mas o papel de parede não é feito de parede?", "Bem vindo, Estávamos te esperando ( ͡° ͜ʖ ͡°)"]
    if (message.content.startsWith("ATH")) {
        if (message.guild.members.get(message.author.id).roles.find("name", '❄ VERIFICAR ❄')) {
            if (message.channel.id == client.guilds.get("399756948951662592").channels.get("402588212490534933").id) {
                message.guild.members.get(message.author.id).addRole("399758046949277696");
                message.guild.members.get(message.author.id).removeRole("399761217125613589");
                message.guild.channels.get("402601119320244236").sendMessage("**<@" + message.author.id + ">, " + mensagens[Math.round(Math.random() * mensagens.length - 1)] + "**");
            } else {
                message.reply("**Aqui não é lugar para se verificar! 🔔**");
            }
        } else {
            message.reply("**Você já está verificado!**");
        }
    }

    if (message.content.startsWith("a!notificar")) {
        if (message.channel.id == client.guilds.get("399756948951662592").channels.get("402608271153823754").id) {
            if (!message.guild.members.get(message.author.id).roles.find("name", '🔔 NOTIFICAR 🔔')) {
                message.reply("**Notificações ativadas! 🔔**");
                message.guild.members.get(message.author.id).addRole("399759520089374720");
            } else {
                message.reply("**Notificações desativadas! 🔕**");
                message.guild.members.get(message.author.id).removeRole("399759520089374720");
            }
        } else {
            message.reply("**Aqui não é lugar para ativar notificações! 🔔**");
        }
    }

    if (message.content.startsWith("")) {
        if (message.channel.id == client.guilds.get("399756948951662592").channels.get("402588212490534933").id) {
            setTimeout(function() {
                message.delete();
            }, 5000)
        }
    }

    if (message.content.startsWith("")) {
        if (message.channel.id == client.guilds.get("399756948951662592").channels.get("402608271153823754").id) {
            setTimeout(function() {
                message.delete();
            }, 5000)
        }
    }

    if (message.content.startsWith("")) {
        if (message.channel.id == client.guilds.get("399756948951662592").channels.get("419992174193803282").id) {
            setTimeout(function() {
                message.delete();
            }, 60 * 1000)
        }
    }

    if (message.content.startsWith("")) {
        if (message.channel.id == client.guilds.get("399756948951662592").channels.get("424679815568687104").id) {
            setTimeout(function() {
                message.delete();
            }, 13 * 1000)
        }
    }

    if (message.content.startsWith("")) {
        if (message.channel.id == client.guilds.get("399756948951662592").channels.get("403664026703233024").id) {
            setTimeout(function() {
                message.delete();
            }, 5000)
        }
    }

    if (message.content.startsWith("")) {
        if (message.channel.id == client.guilds.get("399756948951662592").channels.get("404466159778398220").id) {
            setTimeout(function() {
                message.delete();
            }, 5000)
        }
    }

    if (message.content.includes("https://discord.gg/")) {
        if (message.member && message.member.roles.find("name", "⚠ DIVULGAR ⚠")) {} else {
            message.delete();
            message.reply("**Sem permissão para divulgar!**");
        }
    }

    if (message.content.includes("http://discord.gg/")) {
        if (message.member && message.member.roles.find("name", "⚠ DIVULGAR ⚠")) {} else {
            message.delete();
            message.reply("**Sem permissão para divulgar!**");
        }
    }

    if (message.content.includes("https://www.youtube.com/channel/")) {
        if (message.member && message.member.roles.find("name", "⚠ DIVULGAR ⚠")) {} else {
            message.delete();
            message.reply("**Sem permissão para divulgar!**");
        }
    }

    if (message.content.includes("http://www.youtube.com/channel/")) {
        if (message.member && message.member.roles.find("name", "⚠ DIVULGAR ⚠")) {} else {
            message.delete();
            message.reply("**Sem permissão para divulgar!**");
        }
    }

    if (message.content.includes("https://www.youtube.com/c/")) {
        if (message.member && message.member.roles.find("name", "⚠ DIVULGAR ⚠")) {} else {
            message.delete();
            message.reply("**Sem permissão para divulgar!**");
        }
    }

    if (message.content.includes("http://www.youtube.com/c/")) {
        if (message.member && message.member.roles.find("name", "⚠ DIVULGAR ⚠")) {} else {
            message.delete();
            message.reply("**Sem permissão para divulgar!**");
        }
    }

    if (message.content.startsWith("")) {
        if (message.member && message.member.roles.find("name", "🔇 Athenos Mute")) message.delete();
    }

    if (message.content.includes("<@402607667039698944>")) {
        message.reply("**Use a!help para saber meus comandos. :wink:**");
    }

});

client.on("message", message => {

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {

            if (documento.level > 34) {

                if (message.member && message.member.roles.get("408022513529126923")) {} else {
                    message.guild.members.get(message.author.id).addRole("408022513529126923");
                    message.reply("**Você agora é VIP SAFIRA!**");
                }
            } else {

                if (documento.level > 29) {
                    if (message.member && message.member.roles.get("408021835280809986")) {} else {
                        message.guild.members.get(message.author.id).addRole("408021835280809986");
                        message.reply("**Você agora é VIP RUBY!**");
                    }
                } else {
                    if (documento.level > 24) {
                        if (message.member && message.member.roles.get("406606800205643776")) {} else {
                            message.guild.members.get(message.author.id).addRole("406606800205643776");
                            message.reply("**Você agora é VIP PLATINA!**");
                        }
                    } else {
                        if (documento.level > 19) {

                            if (message.member && message.member.roles.get("406605416009695253")) {} else {
                                message.guild.members.get(message.author.id).addRole("406605416009695253");
                                message.reply("**Você agora é VIP DIAMANTE!**");
                            }
                        }
                    }
                }
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
})

var expCol = new Set()
let expRDM = Math.round(Math.random() * 50)
let potRDM = Math.round(Math.random() * 25)

client.on("message", message => {
    if (message.author.bot) return;
    if (xpCol.has(message.author.id)) return;
    database.Clas.findOne({
        "dono": message.author.id
    }, function(erro, documento) {

        if (documento) {

            var expUPL = documento.level * 370 + 1

            if (documento.xp > expUPL) {

                documento.xp += expRDM
                documento.points += potRDM
                documento.level += 1
                message.reply(`**O cla ${documento._nome} subiu para o level ${documento.level}**`);
                documento.xp = 0
                documento.save()
                expCol.add(message.author.id)
                setTimeout(function() {
                    expCol.delete(message.author.id)
                }, 30 * 1000)

            } else {

                documento.xp += expRDM
                documento.points += potRDM
                documento.save()
                expCol.add(message.author.id)
                setTimeout(function() {
                    expCol.delete(message.author.id)
                }, 30 * 1000)

            }

        } else {

            database.Clas.findOne({
                "staff1": message.author.id
            }, function(errostaff1, docustaff1) {

                if (docustaff1) {

                    var expUPL = docustaff1.level * 370 + 1

                    if (docustaff1.xp > expUPL) {

                        docustaff1.xp += expRDM
                        docustaff1.points += potRDM
                        docustaff1.level += 1
                        message.reply(`**O cla ${docustaff1._nome} subiu para o level ${docustaff1.level}**`);
                        docustaff1.xp = 0
                        docustaff1.save()
                        expCol.add(message.author.id)
                        setTimeout(function() {
                            expCol.delete(message.author.id)
                        }, 30 * 1000)

                    } else {

                        docustaff1.xp += expRDM
                        docustaff1.points += potRDM
                        docustaff1.save()
                        expCol.add(message.author.id)
                        setTimeout(function() {
                            expCol.delete(message.author.id)
                        }, 30 * 1000)

                    }

                } else {

                    database.Clas.findOne({
                        "staff2": message.author.id
                    }, function(errostaff2, docustaff2) {

                        if (docustaff2) {

                            var expUPL = docustaff2.level * 370 + 1

                            if (docustaff2.xp > expUPL) {

                                docustaff2.xp += expRDM
                                docustaff2.points += potRDM
                                docustaff2.level += 1
                                message.reply(`**O cla ${docustaff2._nome} subiu para o level ${docustaff2.level}**`);
                                docustaff2.xp = 0
                                docustaff2.save()
                                expCol.add(message.author.id)
                                setTimeout(function() {
                                    expCol.delete(message.author.id)
                                }, 30 * 1000)

                            } else {

                                docustaff2.xp += expRDM
                                docustaff2.points += potRDM
                                docustaff2.save()
                                expCol.add(message.author.id)
                                setTimeout(function() {
                                    expCol.delete(message.author.id)
                                }, 30 * 1000)

                            }

                        } else {

                            database.Clas.findOne({
                                "staff3": message.author.id
                            }, function(errostaff3, docustaff3) {

                                if (docustaff3) {

                                    var expUPL = docustaff3.level * 370 + 1

                                    if (docustaff3.xp > expUPL) {

                                        docustaff3.xp += expRDM
                                        docustaff3.points += potRDM
                                        docustaff3.level += 1
                                        message.reply(`**O cla ${docustaff3._nome} subiu para o level ${docustaff3.level}**`);
                                        docustaff3.xp = 0
                                        docustaff3.save()
                                        expCol.add(message.author.id)
                                        setTimeout(function() {
                                            expCol.delete(message.author.id)
                                        }, 30 * 1000)

                                    } else {

                                        docustaff3.xp += expRDM
                                        docustaff3.points += potRDM
                                        docustaff3.save()
                                        expCol.add(message.author.id)
                                        setTimeout(function() {
                                            expCol.delete(message.author.id)
                                        }, 30 * 1000)

                                    }

                                } else {

                                    database.Clas.findOne({
                                        "membro4": message.author.id
                                    }, function(erromembro4, documembro4) {

                                        if (documembro4) {

                                            var expUPL = documembro4.level * 370 + 1

                                            if (documembro4.xp > expUPL) {

                                                documembro4.xp += expRDM
                                                documembro4.points += potRDM
                                                documembro4.level += 1
                                                message.reply(`**O cla ${documembro4._nome} subiu para o level ${documembro4.level}**`);
                                                documembro4.xp = 0
                                                documembro4.save()
                                                expCol.add(message.author.id)
                                                setTimeout(function() {
                                                    expCol.delete(message.author.id)
                                                }, 30 * 1000)

                                            } else {

                                                documembro4.xp += expRDM
                                                documembro4.points += potRDM
                                                documembro4.save()
                                                expCol.add(message.author.id)
                                                setTimeout(function() {
                                                    expCol.delete(message.author.id)
                                                }, 30 * 1000)

                                            }

                                        } else {

                                            database.Clas.findOne({
                                                "membro5": message.author.id
                                            }, function(erromembro5, documembro5) {

                                                if (documembro5) {

                                                    var expUPL = documembro5.level * 370 + 1

                                                    if (documembro5.xp > expUPL) {

                                                        documembro5.xp += expRDM
                                                        documembro5.points += potRDM
                                                        documembro5.level += 1
                                                        message.reply(`**O cla ${documembro5._nome} subiu para o level ${documembro5.level}**`);
                                                        documembro5.xp = 0
                                                        documembro5.save()
                                                        expCol.add(message.author.id)
                                                        setTimeout(function() {
                                                            expCol.delete(message.author.id)
                                                        }, 30 * 1000)

                                                    } else {

                                                        documembro5.xp += expRDM
                                                        documembro5.points += potRDM
                                                        documembro5.save()
                                                        expCol.add(message.author.id)
                                                        setTimeout(function() {
                                                            expCol.delete(message.author.id)
                                                        }, 30 * 1000)

                                                    }

                                                } else {

                                                    database.Clas.findOne({
                                                        "membro6": message.author.id
                                                    }, function(erromembro6, documembro6) {

                                                        if (documembro4) {

                                                            var expUPL = documembro6.level * 370 + 1

                                                            if (documembro6.xp > expUPL) {

                                                                documembro6.xp += expRDM
                                                                documembro6.points += potRDM
                                                                documembro6.level += 1
                                                                message.reply(`**O cla ${documembro6._nome} subiu para o level ${documembro6.level}**`);
                                                                documembro6.xp = 0
                                                                documembro6.save()
                                                                expCol.add(message.author.id)
                                                                setTimeout(function() {
                                                                    expCol.delete(message.author.id)
                                                                }, 30 * 1000)

                                                            } else {

                                                                documembro6.xp += expRDM
                                                                documembro6.points += potRDM
                                                                documembro6.save()
                                                                expCol.add(message.author.id)
                                                                setTimeout(function() {
                                                                    expCol.delete(message.author.id)
                                                                }, 30 * 1000)

                                                            }

                                                        } else {

                                                            database.Clas.findOne({
                                                                "membro7": message.author.id
                                                            }, function(erromembro7, documembro7) {

                                                                if (documembro7) {

                                                                    var expUPL = documembro7.level * 370 + 1

                                                                    if (documembro7.xp > expUPL) {

                                                                        documembro7.xp += expRDM
                                                                        documembro7.points += potRDM
                                                                        documembro7.level += 1
                                                                        message.reply(`**O cla ${documembro7._nome} subiu para o level ${documembro7.level}**`);
                                                                        documembro7.xp = 0
                                                                        documembro7.save()
                                                                        expCol.add(message.author.id)
                                                                        setTimeout(function() {
                                                                            expCol.delete(message.author.id)
                                                                        }, 30 * 1000)

                                                                    } else {

                                                                        documembro7.xp += expRDM
                                                                        documembro7.points += potRDM
                                                                        documembro7.save()
                                                                        expCol.add(message.author.id)
                                                                        setTimeout(function() {
                                                                            expCol.delete(message.author.id)
                                                                        }, 30 * 1000)

                                                                    }

                                                                } else {

                                                                    database.Clas.findOne({
                                                                        "membro8": message.author.id
                                                                    }, function(erromembro8, documembro8) {

                                                                        if (documembro8) {

                                                                            var expUPL = documembro8.level * 370 + 1

                                                                            if (documembro8.xp > expUPL) {

                                                                                documembro8.xp += expRDM
                                                                                documembro8.points += potRDM
                                                                                documembro8.level += 1
                                                                                message.reply(`**O cla ${documembro8._nome} subiu para o level ${documembro8.level}**`);
                                                                                documembro8.xp = 0
                                                                                documembro8.save()
                                                                                expCol.add(message.author.id)
                                                                                setTimeout(function() {
                                                                                    expCol.delete(message.author.id)
                                                                                }, 30 * 1000)

                                                                            } else {

                                                                                documembro8.xp += expRDM
                                                                                documembro8.points += potRDM
                                                                                documembro8.save()
                                                                                expCol.add(message.author.id)
                                                                                setTimeout(function() {
                                                                                    expCol.delete(message.author.id)
                                                                                }, 30 * 1000)

                                                                            }

                                                                        } else {

                                                                            database.Clas.findOne({
                                                                                "membro9": message.author.id
                                                                            }, function(erromembro9, documembro9) {

                                                                                if (documembro9) {

                                                                                    var expUPL = documembro9.level * 370 + 1

                                                                                    if (documembro9.xp > expUPL) {

                                                                                        documembro9.xp += expRDM
                                                                                        documembro9.points += potRDM
                                                                                        documembro9.level += 1
                                                                                        message.reply(`**O cla ${documembro9._nome} subiu para o level ${documembro9.level}**`);
                                                                                        documembro9.xp = 0
                                                                                        documembro9.save()
                                                                                        expCol.add(message.author.id)
                                                                                        setTimeout(function() {
                                                                                            expCol.delete(message.author.id)
                                                                                        }, 30 * 1000)

                                                                                    } else {

                                                                                        documembro9.xp += expRDM
                                                                                        documembro9.points += potRDM
                                                                                        documembro9.save()
                                                                                        expCol.add(message.author.id)
                                                                                        setTimeout(function() {
                                                                                            expCol.delete(message.author.id)
                                                                                        }, 30 * 1000)

                                                                                    }

                                                                                } else {

                                                                                    database.Clas.findOne({
                                                                                        "membro10": message.author.id
                                                                                    }, function(erromembro10, documembro10) {

                                                                                        if (documembro4) {

                                                                                            var expUPL = documembro10.level * 370 + 1

                                                                                            if (documembro10.xp > expUPL) {

                                                                                                documembro10.xp += expRDM
                                                                                                documembro10.points += potRDM
                                                                                                documembro10.level += 1
                                                                                                message.reply(`**O cla ${documembro10._nome} subiu para o level ${documembro10.level}**`);
                                                                                                documembro10.xp = 0
                                                                                                documembro10.save()
                                                                                                expCol.add(message.author.id)
                                                                                                setTimeout(function() {
                                                                                                    expCol.delete(message.author.id)
                                                                                                }, 30 * 1000)

                                                                                            } else {

                                                                                                documembro10.xp += expRDM
                                                                                                documembro10.points += potRDM
                                                                                                documembro10.save()
                                                                                                expCol.add(message.author.id)
                                                                                                setTimeout(function() {
                                                                                                    expCol.delete(message.author.id)
                                                                                                }, 30 * 1000)

                                                                                            }

                                                                                        } else {

                                                                                        }

                                                                                    })

                                                                                }

                                                                            })

                                                                        }

                                                                    })

                                                                }

                                                            })

                                                        }

                                                    })

                                                }

                                            })

                                        }

                                    })


                                }

                            })


                        }

                    })


                }

            })

        }

    })
})

var xpCol = new Set()
let xpRDM = Math.round(Math.random() * 45)

client.on("message", message => {
    if (message.author.bot) return;
    if (xpCol.has(message.author.id)) return;
    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {
            var unbug = 350 * documento.level + 1
            if (documento.xp > unbug) {
                documento.xp += xpRDM
                documento.level += 1
                message.reply(`**Você subiu para o level ${documento.level}**`);
                documento.xp = 0
                documento.save()
                xpCol.add(message.author.id)
                setTimeout(function() {
                    xpCol.delete(message.author.id)
                }, 30 * 1000)
            } else {
                if (message.guild.members.get(message.author.id).roles.get("405069427894386688")) {
                    documento.xp += xpRDM * 2
                    documento.save()
                    xpCol.add(message.author.id)
                    setTimeout(function() {
                        xpCol.delete(message.author.id)
                    }, 30 * 1000)
                } else {
                    documento.xp += xpRDM
                    documento.save()
                    xpCol.add(message.author.id)
                    setTimeout(function() {
                        xpCol.delete(message.author.id)
                    }, 30 * 1000)
                }
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
    });
});


var dinCol = new Set()
let dinRDM = Math.round(Math.random() * 125)

client.on("message", message => {
    if (message.author.bot) return;
    if (dinCol.has(message.author.id)) return;
    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {
            if(message.guild.members.get(message.author.id).roles.get("408823662838546442")) {
                if (message.guild.members.get(message.author.id).roles.get("405070139738816532")) {
                documento.coins += dinRDM * 6
                documento.save()
                dinCol.add(message.author.id)
                setTimeout(function() {
                    dinCol.delete(message.author.id)
                }, 50 * 1000)
            } else {
                if(message.guild.members.get(message.author.id).roles.get("408823662838546442")) {
                    documento.coins += dinRDM * 4
                    documento.save()
                    dinCol.add(message.author.id)
                    setTimeout(function() {
                        dinCol.delete(message.author.id)
                    }, 50 * 1000)
                } else {
    
                    if (message.guild.members.get(message.author.id).roles.get("405070139738816532")) {
                        documento.coins += dinRDM * 2
                        documento.save()
                        dinCol.add(message.author.id)
                        setTimeout(function() {
                            dinCol.delete(message.author.id)
                        }, 50 * 1000)
    
                } else {
                    documento.coins += dinRDM
                    documento.save()
                    dinCol.add(message.author.id)
                    setTimeout(function() {
                        dinCol.delete(message.author.id)
                    }, 50 * 1000)
                }
            }
            }
            } else {
            if(message.guild.members.get(message.author.id).roles.get("408823662838546442")) {
                documento.coins += dinRDM * 4
                documento.save()
                dinCol.add(message.author.id)
                setTimeout(function() {
                    dinCol.delete(message.author.id)
                }, 50 * 1000)
            } else {

                if (message.guild.members.get(message.author.id).roles.get("405070139738816532")) {
                    documento.coins += dinRDM * 2
                    documento.save()
                    dinCol.add(message.author.id)
                    setTimeout(function() {
                        dinCol.delete(message.author.id)
                    }, 50 * 1000)

            } else {
                documento.coins += dinRDM
                documento.save()
                dinCol.add(message.author.id)
                setTimeout(function() {
                    dinCol.delete(message.author.id)
                }, 50 * 1000)
            }
        }
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
    });
});

client.on("message", message => {

    if (message.author.bot) return;

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {

            var unbug = 100 * documento.msglevel
            var unbug2 = 10 * documento.mensagens
            if(documento.msglevel < 16) {
            if (documento.mensagens > unbug) {
                documento.coins += 10 * documento.mensagens
                documento.msglevel += 1
                documento.conquistas += 1
                documento.save();
                message.reply(`**Você ganhou ${unbug2} coins por enviar ${documento.mensagens} mensagens.**`);
            } else {
                documento.mensagens += 1
                documento.save();
            }
        } else {
            documento.msglevel = 0
            documento.menagens = 0
            documento.save()
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

})

async function getEval(message, args) {
    if (message.content.includes("token")) return message.reply("**Ta doidão?**");
    let code = args.join(' ');

    try {
        let evaled = await eval(code);

        if (evaled === null) evaled = 'null';
        if (evaled === undefined) evaled = 'undefined';

        var msg12 = `**CÓDIGO:**\n\`\`\`js\n${code}\`\`\`\n**RESULTADO:**\n\`\`\`LDIF\n${evaled}\`\`\``

        message.channel.sendMessage(msg12.replace(/`${process.env.token}`/g, `PORQUEDESEJASABER`))

    } catch (err) {
        message.channel.sendMessage(`**CÓDIGO:**\n\`\`\`js\n${code}\`\`\`\n**ERRO:**\n\`\`\`LDIF\n${err}\`\`\``)
    }


}

client.on('message', message => {
    if (message.content.startsWith(prefix + 'eval') || message.content.startsWith(prefix + 'eval')) {
        var args = message.content.split(' ').slice(1)

        if (message.author.id === "315263840268976128" || message.author.id === '399302842688733195') {
            getEval(message, args);
        } else {
            message.channel.sendMessage(`Ei ${message.author.username}, você não tem permissão para usar este comando!`)
        }
    }
});
