var database = require("../../database.js")

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let razaot = args.slice(2).join(' ');

    var userCOL = new Set()

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {

        var nivel = 7 - documento.level
        if(userCOL.has(message.author.id)){
            message.reply("**Aguarde 5 segundos para usar novamente. :confused:**");
        } else {
        if (documento) {

            userCOL.add(message.author.id)
            setTimeout(function() {
                userCOL.delete(message.author.id)
            }, 5 * 1000)

            if (!razaou.length < 1) {

                if (message.content.startsWith("a!cla criar")) {

                    if (!razaod.length < 1) {

                        if (documento.level > 5) {

                            database.Clas.findOne({
                                "dono": message.author.id
                            }, function(errodono, docudono) {

                                if (docudono) {
                                    message.reply("**Você já é dono de um clã!**");
                                } else {
                                    database.Clas.findOne({
                                        "staff1": message.author.id
                                    }, function(errostaff1, docustaff1) {

                                        if (docustaff1) {
                                            message.reply("**Você já está em um clã!**");
                                        } else {
                                            database.Clas.findOne({
                                                "staff2": message.author.id
                                            }, function(errostaff2, docustaff2) {

                                                if (docustaff2) {
                                                    message.reply("**Você já está em um clã!**");
                                                } else {
                                                    database.Clas.findOne({
                                                        "staff3": message.author.id
                                                    }, function(errostaff3, docustaff3) {

                                                        if (docustaff3) {
                                                            message.reply("**Você já está em um clã!**");
                                                        } else {
                                                            database.Clas.findOne({
                                                                "membro4": message.author.id
                                                            }, function(erromembro4, documembro4) {

                                                                if (documembro4) {
                                                                    message.reply("**Você já está em um clã!**");
                                                                } else {
                                                                    database.Clas.findOne({
                                                                        "membro5": message.author.id
                                                                    }, function(erromembro5, documembro5) {

                                                                        if (documembro5) {
                                                                            message.reply("**Você já está em um clã!**");
                                                                        } else {
                                                                            database.Clas.findOne({
                                                                                "membro6": message.author.id
                                                                            }, function(erromembro6, documembro6) {

                                                                                if (documembro6) {
                                                                                    message.reply("**Você já está em um clã!**");
                                                                                } else {
                                                                                    database.Clas.findOne({
                                                                                        "membro7": message.author.id
                                                                                    }, function(erromembro7, documembro7) {

                                                                                        if (documembro7) {
                                                                                            message.reply("**Você já está em um clã!**");
                                                                                        } else {
                                                                                            database.Clas.findOne({
                                                                                                "membro8": message.author.id
                                                                                            }, function(erromembro8, documembro8) {

                                                                                                if (documembro8) {
                                                                                                    message.reply("**Você já está em um clã!**");
                                                                                                } else {
                                                                                                    database.Clas.findOne({
                                                                                                        "membro9": message.author.id
                                                                                                    }, function(erromembro9, documembro9) {

                                                                                                        if (documembro9) {
                                                                                                            message.reply("**Você já está em um clã!**");
                                                                                                        } else {
                                                                                                            database.Clas.findOne({
                                                                                                                "membro10": message.author.id
                                                                                                            }, function(erromembro10, documembro10) {

                                                                                                                if (documembro10) {
                                                                                                                    message.reply("**Você já está em um clã!**");
                                                                                                                } else {
                                                                                                                    database.Clas.findOne({
                                                                                                                        "_nome": message.content.replace("a!cla criar ", "")
                                                                                                                    }, function(erroclax, docuclax) {
                                                                                                                        if (docuclax) {
                                                                                                                            message.reply("**Já existe um clã com este nome!**");
                                                                                                                        } else {

                                                                                                                            var clan = new database.Clas({
                                                                                                                                _nome: message.content.replace("a!cla criar ", ""),
                                                                                                                                imagem: "https://i.imgur.com/4JaNmFp.png",
                                                                                                                                dono: message.author.id,
                                                                                                                                public: false,
                                                                                                                                points: 0,
                                                                                                                                coins: 0,
                                                                                                                                level: 0,
                                                                                                                                xp: 0,
                                                                                                                                userssize: 1,
                                                                                                                                staff1: "Ninguem",
                                                                                                                                staff2: "Ninguem",
                                                                                                                                staff3: "Ninguem",
                                                                                                                                membro4: "Ninguem",
                                                                                                                                membro5: "Ninguem",
                                                                                                                                membro6: "Ninguem",
                                                                                                                                membro7: "Ninguem",
                                                                                                                                membro8: "Ninguem",
                                                                                                                                membro9: "Ninguem",
                                                                                                                                membro10: "Ninguem"
                                                                                                                            })
                                                                                                                            clan.save()

                                                                                                                            message.reply("**Clã " + message.content.replace("a!cla criar ", "") + " criado com sucesso! :sunglasses:**");
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
                                }

                            })

                        } else {
                            message.reply("**Você precisa ser level 6! Faltam " + nivel + " leveis. :confused:**");
                        }

                    } else {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ CLAS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!cla criar <nome do cla>```",
                                "color": 55512,
                                "thumbnail": {
                                    "url": "https://i.imgur.com/4JaNmFp.png"
                                }
                            }
                        });
                    }

                }

                if (message.content.startsWith("a!cla sair")) {

                    database.Clas.findOne({
                        "dono": message.author.id
                    }, function(errodono, docudono) {

                        if(docudono) {
                            message.reply("**Você não pode sair do seu próprio clã. tente exclui-lo! :confused:**");
                        } else {
                            database.Clas.findOne({
                                "staff1": message.author.id
                            }, function(errostaff1, docustaff1) {
                                if(docustaff1){
                                    docustaff1.staff1 = "Ninguem"
                                    docustaff1.userssize -= 1
                                    docustaff1.save();
                                    message.reply("**O usuário " + message.author.username + ", saiu do clã " + docustaff1._nome + ".**");
                                } else {
                                    database.Clas.findOne({
                                        "staff2": message.author.id
                                    }, function(errostaff2, docustaff2) {
                                        if(docustaff2){
                                            docustaff2.staff2 = "Ninguem"
                                            docustaff2.userssize -= 1
                                            docustaff2.save();
                                            message.reply("**O usuário " + message.author.username + ", saiu do clã " + docustaff2._nome + ".**");
                                        } else {
                                            database.Clas.findOne({
                                                "staff3": message.author.id
                                            }, function(errostaff3, docustaff3) {
                                                if(docustaff3){
                                                    docustaff3.staff3 = "Ninguem"
                                                    docustaff3.userssize -= 1
                                                    docustaff3.save();
                                                    message.reply("**O usuário " + message.author.username + ", saiu do clã " + docustaff3._nome + ".**");
                                                } else {
                                                    database.Clas.findOne({
                                                        "membro4": message.author.id
                                                    }, function(erromembro4, documembro4) {
                                                        if(documembro4){
                                                            documembro4.membro4 = "Ninguem"
                                                            documembro4.userssize -= 1
                                                            documembro4.save();
                                                            message.reply("**O usuário " + message.author.username + ", saiu do clã " + documembro4._nome + ".**");
                                                        } else {
                                                            database.Clas.findOne({
                                                                "membro5": message.author.id
                                                            }, function(erromembro5, documembro5) {
                                                                if(documembro5){
                                                                    documembro5.membro5 = "Ninguem"
                                                                    documembro5.userssize -= 1
                                                                    documembro5.save();
                                                                    message.reply("**O usuário " + message.author.username + ", saiu do clã " + documembro5._nome + ".**");
                                                                } else {
                                                                    database.Clas.findOne({
                                                                        "membro6": message.author.id
                                                                    }, function(erromembro6, documembro6) {
                                                                        if(documembro6){
                                                                            documembro6.membro6 = "Ninguem"
                                                                            documembro6.userssize -= 1
                                                                            documembro6.save();
                                                                            message.reply("**O usuário " + message.author.username + ", saiu do clã " + documembro6._nome + ".**");
                                                                        } else {
                                                                            database.Clas.findOne({
                                                                                "membro7": message.author.id
                                                                            }, function(erromembro7, documembro7) {
                                                                                if(documembro7){
                                                                                    documembro7.membro7 = "Ninguem"
                                                                                    documembro7.userssize -= 1
                                                                                    documembro7.save();
                                                                                    message.reply("**O usuário " + message.author.username + ", saiu do clã " + documembro7._nome + ".**");
                                                                                } else {
                                                                                    database.Clas.findOne({
                                                                                        "membro8": message.author.id
                                                                                    }, function(erromembro8, documembro8) {
                                                                                        if(documembro8){
                                                                                            documembro8.membro8 = "Ninguem"
                                                                                            documembro8.userssize -= 1
                                                                                            documembro8.save();
                                                                                            message.reply("**O usuário " + message.author.username + ", saiu do clã " + documembro8._nome + ".**");
                                                                                        } else {
                                                                                            database.Clas.findOne({
                                                                                                "membro9": message.author.id
                                                                                            }, function(erromembro9, documembro9) {
                                                                                                if(documembro9){
                                                                                                    documembro9.membro9 = "Ninguem"
                                                                                                    documembro9.userssize -= 1
                                                                                                    documembro9.save();
                                                                                                    message.reply("**O usuário " + message.author.username + ", saiu do clã " + documembro9._nome + ".**");
                                                                                                } else {
                                                                                                    database.Clas.findOne({
                                                                                                        "membro10": message.author.id
                                                                                                    }, function(erromembro10, documembro10) {
                                                                                                        if(documembro10){
                                                                                                            documembro10.membro10 = "Ninguem"
                                                                                                            documembro10.userssize -= 1
                                                                                                            documembro10.save();
                                                                                                            message.reply("**O usuário " + message.author.username + ", saiu do clã " + documembro10._nome + ".**");
                                                                                                        } else {
                                                                                                            message.reply("**Você não está em nenhum clã. :confused:**");
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

                }

                if (message.content.startsWith("a!cla banir")) {

                    if (message.author.id !== "315263840268976128") return message.reply("**Você não pode usar este comando!**");
                    if (!razaod.length < 1) {

                        database.Clas.findOne({
                            "_nome": message.content.replace("a!cla banir ", "")
                        }, function(errodono, docudono) {

                            if(docudono){

                                database.Clas.deleteOne({
                                    "_nome": message.content.replace("a!cla banir ", "")
                                }, function(errodono2, docudono2) {
                                })
                                message.reply("**Cla " + message.content.replace("a!cla banir ", "") + " foi banido. :confused:**");

                            } else {
                                message.reply("**Clã não encontrado.**");
                            }

                        })

                    } else {
                        message.reply("**Diga o nome do cla para banir!**");
                    }

                }

                if (message.content.startsWith("a!cla delete")) {

                    database.Clas.findOne({
                        "dono": message.author.id
                    }, function(errodono, docudono) {

                        if (docudono) {
                            database.Clas.deleteOne({
                                "dono": message.author.id
                            }, function(errodono2, docudono2) {
                                message.reply("**Clã " + docudono._nome + " terminado. :pensive:**");
                            })
                        } else {
                            message.reply("**Você não é dono de um cla!**");
                        }

                    })

                }

                if (message.content.startsWith("a!cla edit")) {
                    if (!razaod.length < 1) {
                        if (message.content.startsWith("a!cla edit foto")) {
                            if (!razaot.length < 1) {
                                database.Clas.findOne({
                                    "dono": message.author.id
                                }, function(errodono, docudono) {
                                    if (docudono) {
                                        docudono.imagem = args[2]
                                        docudono.save();
                                        message.reply("**Foto do cla " + docudono._nome + " foi trocada!**");
                                    } else {
                                        database.Clas.findOne({
                                            "staff1": message.author.id
                                        }, function(errostaff1, docustaff1) {
                                            if (docudono) {
                                                docustaff1.imagem = args[2]
                                                docustaff1.save();
                                                message.reply("**Foto do cla " + docustaff1._nome + " foi trocada!**");
                                            } else {
                                                database.Clas.findOne({
                                                    "staff2": message.author.id
                                                }, function(errostaff2, docustaff2) {
                                                    if (docudono) {
                                                        docustaff2.imagem = args[2]
                                                        docustaff2.save();
                                                        message.reply("**Foto do cla " + docustaff2._nome + " foi trocada!**");
                                                    } else {
                                                        database.Clas.findOne({
                                                            "staff3": message.author.id
                                                        }, function(errostaff3, docustaff3) {
                                                            if (docudono) {
                                                                docustaff1.imagem = args[2]
                                                                docustaff1.save();
                                                                message.reply("**Foto do cla " + docustaff3._nome + " foi trocada!**");
                                                            } else {
                                                                message.reply("**Você não é staff de nenhum cla!**");
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            } else {
                                message.channel.sendMessage({
                                    "embed": {
                                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ CLAS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!cla edit foto <nova foto do cla>```",
                                        "color": 55512,
                                        "thumbnail": {
                                            "url": "https://i.imgur.com/4JaNmFp.png"
                                        }
                                    }
                                });
                            }
                        }

                        if (message.content.startsWith("a!cla edit public")) {

                            database.Clas.findOne({
                                "dono": message.author.id
                            }, function(errodono, docudono) {

                                if(docudono) {

                                    if(!docudono.public) {

                                    docudono.public = true
                                    docudono.save();
                                    message.reply("**O cla " + docudono._nome + " agora é publico!**");

                                    } else {
                                        
                                        docudono.public = false
                                        docudono.save();
                                        message.reply("**O cla " + docudono._nome + " agora é privado!**");

                                    }

                                } else {

                                    database.Clas.findOne({
                                        "staff1": message.author.id
                                    }, function(errostaff1, docustaff1) {
        
                                        if(docustaff1) {
        
                                            if(!docustaff1.public) {
        
                                            docustaff1.public = true
                                            docustaff1.save();
                                            message.reply("**O cla " + docustaff1._nome + " agora é publico!**");
        
                                            } else {
                                                
                                                docustaff1.public = false
                                                docustaff1.save();
                                                message.reply("**O cla " + docustaff1._nome + " agora é privado!**");
        
                                            }
        
                                        } else {
        
                                            database.Clas.findOne({
                                                "staff2": message.author.id
                                            }, function(errostaff2, docustaff2) {
                
                                                if(docustaff2) {
                
                                                    if(!docustaff2.public) {
                
                                                    docustaff2.public = true
                                                    docustaff2.save();
                                                    message.reply("**O cla " + docustaff2._nome + " agora é publico!**");
                
                                                    } else {
                                                        
                                                        docustaff2.public = false
                                                        docustaff2.save();
                                                        message.reply("**O cla " + docustaff2._nome + " agora é privado!**");
                
                                                    }
                
                                                } else {
                
                                                    database.Clas.findOne({
                                                        "staff3": message.author.id
                                                    }, function(errostaff3, docustaff3) {
                        
                                                        if(docustaff3) {
                        
                                                            if(!docustaff3.public) {
                        
                                                            docustaff3.public = true
                                                            docustaff3.save();
                                                            message.reply("**O cla " + docustaff3._nome + " agora é publico!**");
                        
                                                            } else {
                                                                
                                                                docustaff3.public = false
                                                                docustaff3.save();
                                                                message.reply("**O cla " + docustaff3._nome + " agora é privado!**");
                        
                                                            }
                        
                                                        } else {
                        
                                                            message.reply("**Você não é staff de nenhum cla. :confused:**");
                        
                                                        }
                        
                                                    })
                
                                                }
                
                                            })
        
                                        }
        
                                    })

                                }

                            })

                        }

                        if (message.content.startsWith("a!cla edit nome")) {
                            if (!razaot.length < 1) {
                                database.Clas.findOne({
                                    "dono": message.author.id
                                }, function(errodono, docudono) {
                                    if (docudono) {
                                        docudono._nome = message.content.replace("a!cla edit nome ", "")
                                        docudono.save();
                                        message.reply("**Nome do cla " + docudono._nome + " foi trocado!**");
                                    } else {
                                        database.Clas.findOne({
                                            "staff1": message.author.id
                                        }, function(errostaff1, docustaff1) {
                                            if (docudono) {
                                                docustaff1._nome = message.content.replace("a!cla edit nome ", "")
                                                docustaff1.save();
                                                message.reply("**Nome do cla " + docustaff1._nome + " foi trocado!**");
                                            } else {
                                                database.Clas.findOne({
                                                    "staff2": message.author.id
                                                }, function(errostaff2, docustaff2) {
                                                    if (docudono) {
                                                        docustaff2._nome = message.content.replace("a!cla edit nome ", "")
                                                        docustaff2.save();
                                                        message.reply("**Nome do cla " + docustaff2._nome + " foi trocado!**");
                                                    } else {
                                                        database.Clas.findOne({
                                                            "staff3": message.author.id
                                                        }, function(errostaff3, docustaff3) {
                                                            if (docudono) {
                                                                docustaff1._nome = message.content.replace("a!cla edit nome ", "")
                                                                docustaff1.save();
                                                                message.reply("**Nome do cla " + docustaff3._nome + " foi trocado!**");
                                                            } else {
                                                                message.reply("**Você não é staff de nenhum cla!**");
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            } else {
                                message.channel.sendMessage({
                                    "embed": {
                                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ CLAS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!cla edit nome <novo nome do cla>```",
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
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ CLAS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!cla edit nome <novo nome do cla>\na!cla edit foto <nova foto do cla>\na!cla edit public```",
                                "color": 55512,
                                "thumbnail": {
                                    "url": "https://i.imgur.com/4JaNmFp.png"
                                }
                            }
                        });
                    }
                }

                if (message.content.startsWith("a!cla info")) {
                    if (!razaod.length < 1) {
                        database.Clas.findOne({
                            "_nome": message.content.replace("a!cla info ", "")
                        }, function(erroclanz, docuclanz) {
                            if (docuclanz) {
                                var xpup = docuclanz.level * 370 + 1
                                if (docuclanz.public) {
                                    message.channel.sendMessage({
                                        "embed": {
                                            "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ " + docuclanz._nome + " ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n:earth_africa: **CLA ABERTO**\nㅤ\n:star2: **DONO:** <@" + docuclanz.dono + ">\nㅤ\n:sunglasses: **STAFF:**\nㅤ- **<@" + docuclanz.staff1 + ">**\nㅤ- **<@" + docuclanz.staff2 + ">**\nㅤ- **<@" + docuclanz.staff3 + ">**\nㅤ\n:wink: **MEMBROS:**\nㅤ- **<@" + docuclanz.membro4 + ">**\nㅤ- **<@" + docuclanz.membro5 + ">**\nㅤ- **<@" + docuclanz.membro6 + ">**\nㅤ- **<@" + docuclanz.membro7 + ">**\nㅤ- **<@" + docuclanz.membro8 + ">**\nㅤ- **<@" + docuclanz.membro9 + ">**\nㅤ- **<@" + docuclanz.membro10 + ">**\nㅤ\n:money_mouth: **Coins: " + docuclanz.coins + "ㅤ:gem: Level: " + docuclanz.level + "ㅤ:star: Xp: " + docuclanz.xp + "/" + xpup + "ㅤ:sparkles: Pontos: " + docuclanz.points + "**",
                                            "color": 55512,
                                            "thumbnail": {
                                                "url": docuclanz.imagem
                                            }
                                        }
                                    });
                                } else {
                                    message.channel.sendMessage({
                                        "embed": {
                                            "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ " + docuclanz._nome + " ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n:earth_africa: **CLA PRIVADO**\nㅤ\n:star2: **DONO:** <@" + docuclanz.dono + ">\nㅤ\n:sunglasses: **STAFF:**\nㅤ- **<@" + docuclanz.staff1 + ">**\nㅤ- **<@" + docuclanz.staff2 + ">**\nㅤ- **<@" + docuclanz.staff3 + ">**\nㅤ\n:wink: **MEMBROS:**\nㅤ- **<@" + docuclanz.membro4 + ">**\nㅤ- **<@" + docuclanz.membro5 + ">**\nㅤ- **<@" + docuclanz.membro6 + ">**\nㅤ- **<@" + docuclanz.membro7 + ">**\nㅤ- **<@" + docuclanz.membro8 + ">**\nㅤ- **<@" + docuclanz.membro9 + ">**\nㅤ- **<@" + docuclanz.membro10 + ">**\nㅤ\n:money_mouth: **Coins: " + docuclanz.coins + "ㅤ:gem: Level: " + docuclanz.level + "ㅤ:star: Xp: " + docuclanz.xp + "/" + xpup + "ㅤ:sparkles: Pontos: " + docuclanz.points + "**",
                                            "color": 55512,
                                            "thumbnail": {
                                                "url": docuclanz.imagem
                                            }
                                        }
                                    });
                                }
                            } else {
                                message.reply("**Cla inexistente. :confused:**");
                            }
                        })
                    } else {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ CLAS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!cla info <nome do cla>```",
                                "color": 55512,
                                "thumbnail": {
                                    "url": "https://i.imgur.com/4JaNmFp.png"
                                }
                            }
                        });
                    }
                }

                if (message.content.startsWith("a!cla top")) {
                    database.Clas.find({}, function(erro, documaninho) {
                        if (documaninho) {
                            var position = documaninho.map(function(docu) {
                                return {
                                    _nome: docu._nome,
                                    points: docu.points
                                }
                            });
                            position = position.sort(function(a, b) {
                                return b.points - a.points
                            });
                            var topclas = "\n" + position.slice(0, 10).map((a, posicao) => "**" + (posicao + 1) + "** " + a._nome + " - **" + a.points + "**").join("\n") + "";
                            message.channel.sendMessage({
                                "embed": {
                                    "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ TOP CLAS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n" + topclas,
                                    "color": 55512,
                                    "thumbnail": {
                                        "url": "https://i.imgur.com/4JaNmFp.png"
                                    }
                                }
                            })
                        }
                    });
                }

                if (message.content.startsWith("a!cla entrar")) {

                    if (!razaod.length < 1) {

                        database.Clas.findOne({
                            "_nome": message.content.replace("a!cla entrar ", "")
                        }, function(erroclanz, docuclanz) {

                            if (docuclanz) {

                                database.Clas.findOne({
                                    "dono": message.author.id
                                }, function(errodono, docudono) {

                                    if (docudono) {
                                        message.reply("**Você já é dono de um clã!**");
                                    } else {
                                        database.Clas.findOne({
                                            "staff1": message.author.id
                                        }, function(errostaff1, docustaff1) {

                                            if (docustaff1) {
                                                message.reply("**Você já está em um clã!**");
                                            } else {
                                                database.Clas.findOne({
                                                    "staff2": message.author.id
                                                }, function(errostaff2, docustaff2) {

                                                    if (docustaff2) {
                                                        message.reply("**Você já está em um clã!**");
                                                    } else {
                                                        database.Clas.findOne({
                                                            "staff3": message.author.id
                                                        }, function(errostaff3, docustaff3) {

                                                            if (docustaff3) {
                                                                message.reply("**Você já está em um clã!**");
                                                            } else {
                                                                database.Clas.findOne({
                                                                    "membro4": message.author.id
                                                                }, function(erromembro4, documembro4) {

                                                                    if (documembro4) {
                                                                        message.reply("**Você já está em um clã!**");
                                                                    } else {
                                                                        database.Clas.findOne({
                                                                            "membro5": message.author.id
                                                                        }, function(erromembro5, documembro5) {

                                                                            if (documembro5) {
                                                                                message.reply("**Você já está em um clã!**");
                                                                            } else {
                                                                                database.Clas.findOne({
                                                                                    "membro6": message.author.id
                                                                                }, function(erromembro6, documembro6) {

                                                                                    if (documembro6) {
                                                                                        message.reply("**Você já está em um clã!**");
                                                                                    } else {
                                                                                        database.Clas.findOne({
                                                                                            "membro7": message.author.id
                                                                                        }, function(erromembro7, documembro7) {

                                                                                            if (documembro7) {
                                                                                                message.reply("**Você já está em um clã!**");
                                                                                            } else {
                                                                                                database.Clas.findOne({
                                                                                                    "membro8": message.author.id
                                                                                                }, function(erromembro8, documembro8) {

                                                                                                    if (documembro8) {
                                                                                                        message.reply("**Você já está em um clã!**");
                                                                                                    } else {
                                                                                                        database.Clas.findOne({
                                                                                                            "membro9": message.author.id
                                                                                                        }, function(erromembro9, documembro9) {

                                                                                                            if (documembro9) {
                                                                                                                message.reply("**Você já está em um clã!**");
                                                                                                            } else {
                                                                                                                database.Clas.findOne({
                                                                                                                    "membro10": message.author.id
                                                                                                                }, function(erromembro10, documembro10) {

                                                                                                                    if (documembro10) {
                                                                                                                        message.reply("**Você já está em um clã!**");
                                                                                                                    } else {
                                                                                                                        if (!docuclanz.public) {
                                                                                                                            message.reply("**Este clã é privado!**");
                                                                                                                        } else {
                                                                                                                            if (docuclanz.userssize > 10) {
                                                                                                                                message.reply("**Este clã está cheio!**");
                                                                                                                            } else {
                                                                                                                                if (docuclanz.membro4 == "Ninguem") {
                                                                                                                                    docuclanz.membro4 = message.author.id
                                                                                                                                    docuclanz.userssize += 1
                                                                                                                                    docuclanz.save();
                                                                                                                                    message.reply("**Você entrou para o cla " + docuclanz._nome + "**");
                                                                                                                                } else {
                                                                                                                                    if (docuclanz.membro5 == "Ninguem") {
                                                                                                                                        docuclanz.membro5 = message.author.id
                                                                                                                                        docuclanz.userssize += 1
                                                                                                                                        docuclanz.save();
                                                                                                                                        message.reply("**Você entrou para o cla " + docuclanz._nome + "**");
                                                                                                                                    } else {
                                                                                                                                        if (docuclanz.membro6 == "Ninguem") {
                                                                                                                                            docuclanz.membro6 = message.author.id
                                                                                                                                            docuclanz.userssize += 1
                                                                                                                                            docuclanz.save();
                                                                                                                                            message.reply("**Você entrou para o cla " + docuclanz._nome + "**");
                                                                                                                                        } else {
                                                                                                                                            if (docuclanz.membro7 == "Ninguem") {
                                                                                                                                                docuclanz.membro7 = message.author.id
                                                                                                                                                docuclanz.userssize += 1
                                                                                                                                                docuclanz.save();
                                                                                                                                                message.reply("**Você entrou para o cla " + docuclanz._nome + "**");
                                                                                                                                            } else {
                                                                                                                                                if (docuclanz.membro8 == "Ninguem") {
                                                                                                                                                    docuclanz.membro8 = message.author.id
                                                                                                                                                    docuclanz.userssize += 1
                                                                                                                                                    docuclanz.save();
                                                                                                                                                    message.reply("**Você entrou para o cla " + docuclanz._nome + "**");
                                                                                                                                                } else {
                                                                                                                                                    if (docuclanz.membro9 == "Ninguem") {
                                                                                                                                                        docuclanz.membro9 = message.author.id
                                                                                                                                                        docuclanz.userssize += 1
                                                                                                                                                        docuclanz.save();
                                                                                                                                                        message.reply("**Você entrou para o cla " + docuclanz._nome + "**");
                                                                                                                                                    } else {
                                                                                                                                                        if (docuclanz.membro10 == "Ninguem") {
                                                                                                                                                            docuclanz.membro10 = message.author.id
                                                                                                                                                            docuclanz.userssize += 1
                                                                                                                                                            docuclanz.save();
                                                                                                                                                            message.reply("**Você entrou para o cla " + docuclanz._nome + "**");
                                                                                                                                                        } else {
                                                                                                                                                            message.reply("**Clã sem vagas para membros!**");
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
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

                            } else {

                                message.reply("**Este cla não existe. :confused:**");

                            }

                        })

                    } else {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ CLAS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!cla entrar <nome do cla>```",
                                "color": 55512,
                                "thumbnail": {
                                    "url": "https://i.imgur.com/4JaNmFp.png"
                                }
                            }
                        });
                    }

                }

                if (message.content.startsWith("a!cla money")) {

                }


                //ACABA AQUI
            } else {
                message.channel.sendMessage({
                    "embed": {
                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ CLAS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!cla criar\na!cla delete\na!cla edit\na!cla promover\na!cla info\na!cla top\na!cla entrar\na!cla sair\na!cla convidar\na!cla kick\na!cla money\na!cla banir```",
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
                coins: 0
            })

            pessoa.save()
        }
    }

    })

}