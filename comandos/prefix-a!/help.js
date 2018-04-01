exports.run = (client, message, args) => {

    message.channel.sendMessage({
        "embed": {
          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\nOlá sou **Athenos**, um bot ainda em desenvolvimento.\nㅤ\n**Prefix:** p!\nㅤ\n**1** - autorole\n**2** - welcome\n**3** - byebye\n**4** - clear\n**5** - info",
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