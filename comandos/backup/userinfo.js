exports.run = (client, message, args) => {
  function stats() {
      var status = userstatus
      if (status == "online") {
          return "<:online:313956277808005120> Online"
      } else if (status == "offline") {
          return ("<:offline:313956277237710868> Offline")
      } else if (status == "dnd") {
          return ("<:dnd:313956276893646850> Ocupado")
      } else if (status == "idle") {
          return ("<:away:313956277220802560> Ausente")
      }
  }

  function playing() {
      var playings = game
      if (playings != undefined) {
          return playings.name;
      } else {
          return "Nada";
      }
  }

  exports.run = (client, message, args, game) => {
      if (message.mentions.users.first()) {
          userapelido = message.guild.member(message.mentions.users.first()).nickname
          user = message.mentions.users.first().username;
          userfoto = message.mentions.users.first().avatarURL;
          userstatus = message.mentions.users.first().presence.status;
          usertag = message.mentions.users.first().tag;
          usercriado = message.mentions.users.first().createdAt;
          userid = message.mentions.users.first().id;
          game = message.mentions.users.first().presence.game
          userentrou = message.guild.member(message.mentions.users.first().id).joinedAt;
          usercargo = message.guild.member(message.mentions.users.first().id).roles.name;
          userbot = message.mentions.users.first().bot;

      } else {
          user = message.author.username;
          userfoto = message.author.avatarURL;
          userstatus = message.author.presence.status;
          usertag = message.author.tag;
          usercriado = message.author.createdAt;
          userid = message.author.id;
          game = message.author.presence.game
          userentrou = message.guild.member(message.author.id).joinedAt;
          usercargo = message.guild.member(message.author.id).roles.name;
          userapelido = message.guild.member(message.author.id).nickname
          userbot = message.author.bot;
      }

      function botCheck() {
          var botChecking = userbot;
          if (botChecking == true) {
              return ":white_check_mark: Sim";
          } else {
              if (botChecking == false) {
                  return ":x: Não"
              }
          }
      }

      function playing() {
          var playings = game
          if (playings != undefined) {
              return playings.name;
          } else {
              return "Nada";
          }
      }

      function nickname() {
          var playings = userapelido
          if (playings != null) {
              return playings;
          } else {
              return "**Não tem**";
          }
      }
      const Discord = require('discord.js');
      const moment = require('moment');
      moment.locale('pt-BR');
      message.channel.send({
          embed: {
              color: 55512,
              author: {
                  name: usertag,
                  icon_url: userfoto
              },
              fields: [{
                      name: "**¤ ID:** ",
                      value: userid
                  },
                  {
                      name: "**¤ Apelido:** ",
                      value: nickname()
                  },
                  {
                      name: "**¤ Status:** ",
                      value: stats()
                  },
                  {
                      name: "**¤ Jogando:** ",
                      value: playing()
                  },
                  {
                      name: "**¤ Criou a conta em:** ",
                      value: moment(usercriado).format('LLLL')
                  },
                  {
                      name: "**¤ Entrou aqui em:** ",
                      value: moment(userentrou).format('LLLL')
                  },
                  {
                      name: "**¤ Cargos:** ",
                      value: usercargo
                  }
              ]
          }
      })
  };


}