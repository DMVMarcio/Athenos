exports.run = (client, message, args) => {

  message.channel.sendMessage({
      "embed": {
        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**ATHENOS** é apenas um servidor normal onde você poderá se divertir, arranjar amigos etc...\nㅤ\nEsperamos que você se divirta em nosso servidor.\nㅤ\nCaso goste do servidor, que tal nos ajudar a divulga-lo com **[este link?](https://discord.gg/Ez8PyvA)**\nㅤ\nNo momento estamos com **" + message.guild.members.size + " membros** :smile:",
        "color": 55512,
        "timestamp": "2018-01-23T18:21:28.492Z",
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