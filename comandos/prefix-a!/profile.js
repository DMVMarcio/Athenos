var database = require("../../database.js")

exports.run = (client, message, args) => {

  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) {

  database.Users.findOne({
    "_id": message.author.id
}, function(erro, documento) {

  if (documento) {

    var unbug = 350 * documento.level + 1

    message.reply({
        "embed": {
          "description": `ㅤ\n:bust_in_silhouette: **Perfil de ${message.author.username}:**\nㅤ`,
          "color": 55512,
          "thumbnail": {
            "url": message.author.displayAvatarURL
          },
          "author": {
            "name": message.author.username,
            "icon_url": message.author.displayAvatarURL
          },
          "fields": [
            {
              "name": ":gem: Level",
              "value": `${documento.level}`,
              "inline": true
            },
            {
              "name": ":star2: XP",
              "value": `${documento.xp}/${unbug}`,
              "inline": true
            },
            {
              "name": ":briefcase: Rep",
              "value": `${documento.rep}`,
              "inline": true
            },
            {
              "name": ":moneybag: Money",
              "value": `${documento.coins}`,
              "inline": true
            },
            {
              "name": ":incoming_envelope: ICODE",
              "value": `${documento.invitecode}`,
              "inline": true
            },
            {
              "name": ":mailbox_with_mail: Invitou",
              "value": `${documento.invitou} users`,
              "inline": true
            },
          ]
        }
      });

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
  } else {
    database.Users.findOne({
      "_id": message.mentions.users.first().id
  }, function(erro, documento) {

      if (documento) {

        var unbug = 350 * documento.level + 1

    message.reply({
        "embed": {
          "description": `ㅤ\n:bust_in_silhouette: **Perfil de ${message.mentions.users.first().username}:**\nㅤ`,
          "color": 55512,
          "thumbnail": {
            "url": message.mentions.users.first().displayAvatarURL
          },
          "author": {
            "name": message.mentions.users.first().username,
            "icon_url": message.mentions.users.first().displayAvatarURL
          },
          "fields": [
            {
              "name": ":gem: Level",
              "value": `${documento.level}`,
              "inline": true
            },
            {
              "name": ":star2: XP",
              "value": `${documento.xp}/${unbug}`,
              "inline": true
            },
            {
              "name": ":briefcase: Rep",
              "value": `${documento.rep}`,
              "inline": true
            },
            {
              "name": ":moneybag: Money",
              "value": `${documento.coins}`,
              "inline": true
            },
            {
              "name": ":incoming_envelope: ICODE",
              "value": `${documento.invitecode}`,
              "inline": true
            },
            {
              "name": ":mailbox_with_mail: Invitou",
              "value": `${documento.invitou} users`,
              "inline": true
            },
          ]
        }
      });

      } else {

        var pessoa = new database.Users({
          _id: message.mentions.users.first().id,
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
}
