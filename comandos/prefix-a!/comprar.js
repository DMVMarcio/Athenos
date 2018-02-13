var database = require("../../database.js")

exports.run = (client, message, args) => {

    if (message.channel.id == client.guilds.get("399756948951662592").channels.get("404466159778398220").id) {

  database.Users.findOne({
    "_id": message.author.id
}, function(erro, documento) {

    database.Users.findOne({
        "_id": "315263840268976128"
    }, function(errou, docs) {

        database.Users.findOne({
            "_id": "399302842688733195"
        }, function(erros, docu) {

    var d1 = 13721 - documento.coins
    var d2 = 18217 - documento.coins
    var d3 = 23832 - documento.coins
    var d4 = 17981 - documento.coins
    var d5 = 20712 - documento.coins
    var d6 = 19321 - documento.coins
    var d7 = 15030 - documento.coins
    var d8 = 5001 - documento.coins
    var d9 = 42501 - documento.coins

  if (documento) {

    if (message.content.startsWith("a!comprar 1")) {

        if(message.guild.members.get(message.author.id).roles.get("399760304277553152")){

            message.reply("**Você já é um usuário Vip Bronze!**");

        } else {

        if(documento.coins > 13720) {

            documento.coins -= 13721
            documento.save();
            docs.coins += 13721
            docs.save();
            docu.coins += 13721
            docu.save();
            message.guild.members.get(message.author.id).addRole("399760304277553152");
            message.reply("**Compra feita com sucesso! :money_mouth:**");

        } else {

            message.reply("**Dinheiro insuficiente! :pensive: Você precisa de mais " + d1 + " coins!**");

        }

    }

}

if (message.content.startsWith("a!comprar 2")) {

    if(message.guild.members.get(message.author.id).roles.get("405067413940600853")){

        message.reply("**Você já é um usuário Vip Prata!**");

    } else {

    if(documento.coins > 18216) {

        documento.coins -= 18217
        documento.save();
        docs.coins += 18217
        docs.save();
        docu.coins += 18217
        docu.save();
        message.guild.members.get(message.author.id).addRole("405067413940600853");
        message.reply("**Compra feita com sucesso! :money_mouth:**");

    } else {

        message.reply("**Dinheiro insuficiente! :pensive: Você precisa de mais " + d2 + " coins!**");

    }

}

}

if (message.content.startsWith("a!comprar 3")) {

    if(message.guild.members.get(message.author.id).roles.get("405067852882640897")){

        message.reply("**Você já é um usuário Vip Ouro!**");

    } else {

    if(documento.coins > 23831) {

        documento.coins -= 23832
        documento.save();
        docs.coins += 23832
        docs.save();
        docu.coins += 23832
        docu.save();
        message.guild.members.get(message.author.id).addRole("405067852882640897");
        message.reply("**Compra feita com sucesso! :money_mouth:**");

    } else {

        message.reply("**Dinheiro insuficiente! :pensive: Você precisa de mais " + d3 + " coins!**");

    }

}

}

if (message.content.startsWith("a!comprar 4")) {

    if(message.guild.members.get(message.author.id).roles.get("405069427894386688")){

        message.reply("**Você já tem XP x2!**");

    } else {

    if(documento.coins > 17980) {

        documento.coins -= 17981
        documento.save();
        docs.coins += 17981
        docs.save();
        docu.coins += 17981
        docu.save();
        message.guild.members.get(message.author.id).addRole("405069427894386688");
        message.reply("**Compra feita com sucesso! :money_mouth:**");

    } else {

        message.reply("**Dinheiro insuficiente! :pensive: Você precisa de mais " + d4 + " coins!**");

    }

}

}

if (message.content.startsWith("a!comprar 5")) {

    if(message.guild.members.get(message.author.id).roles.get("405070139738816532")){

        message.reply("**Você já tem Coins x2!**");

    } else {

    if(documento.coins > 20712) {

        documento.coins -= 20712
        documento.save();
        docs.coins += 20712
        docs.save();
        docu.coins += 20712
        docu.save();
        message.guild.members.get(message.author.id).addRole("405070139738816532");
        message.reply("**Compra feita com sucesso! :money_mouth:**");

    } else {

        message.reply("**Dinheiro insuficiente! :pensive: Você precisa de mais " + d5 + " coins!**");

    }

}

}

if (message.content.startsWith("a!comprar 6")) {

    if(message.guild.members.get(message.author.id).roles.get("405084942255521813")){

        message.reply("**Você já tem Permissão para divulgar!**");

    } else {

    if(documento.coins > 19320) {

        documento.coins -= 19321
        documento.save();
        docs.coins += 19321
        docs.save();
        docu.coins += 19321
        docu.save();
        message.guild.members.get(message.author.id).addRole("405084942255521813");
        message.reply("**Compra feita com sucesso! :money_mouth:**");

    } else {

        message.reply("**Dinheiro insuficiente! :pensive: Você precisa de mais " + d6 + "coins!**");

    }

}

}

if (message.content.startsWith("a!comprar 7")) {

    if(message.guild.members.get(message.author.id).roles.get("405068372221493250")){

        message.reply("**Você já tem AUDIT-LOG!**");

    } else {

    if(documento.coins > 15029) {

        documento.coins -= 15030
        documento.save();
        docs.coins += 15030
        docs.save();
        docu.coins += 15030
        docu.save();
        message.guild.members.get(message.author.id).addRole("405068372221493250");
        message.reply("**Compra feita com sucesso! :money_mouth:**");

    } else {

        message.reply("**Dinheiro insuficiente! :pensive: Você precisa de mais " + d7 + " coins!**");

    }

}

}

if (message.content.startsWith("a!comprar 8")) {

    if(message.guild.members.get(message.author.id).roles.get("405068787486818304")){

        message.reply("**Você já tem Comando de Lembrete!**");

    } else {

    if(documento.coins > 5000) {

        documento.coins -= 5001
        documento.save();
        docs.coins += 5001
        docs.save();
        docu.coins += 5001
        docu.save();
        message.guild.members.get(message.author.id).addRole("405068787486818304");
        message.reply("**Compra feita com sucesso! :money_mouth:**");

    } else {

        message.reply("**Dinheiro insuficiente! :pensive: Você precisa de mais " + d8 + " coins!**");

    }

}

}

if (message.content.startsWith("a!comprar 9")) {

    if(message.guild.members.get(message.author.id).roles.get("408823662838546442")){

        message.reply("**Você já tem COINS x4!**");

    } else {

    if(documento.coins > 42500) {

        documento.coins -= 42501
        documento.save();
        docs.coins += 42501
        docs.save();
        docu.coins += 42501
        docu.save();
        message.guild.members.get(message.author.id).addRole("408823662838546442");
        message.reply("**Compra feita com sucesso! :money_mouth:**");

    } else {

        message.reply("**Dinheiro insuficiente! :pensive: Você precisa de mais " + d9 + " coins!**");

    }

}

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
})
})

    } else {
        message.reply("**Aqui não é lugar de fazer compras!**");
    }

}