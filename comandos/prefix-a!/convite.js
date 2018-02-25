exports.run = (client, message, args) => {

    message.channel.sendMessage({
        "embed": {
          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Aqui está o link de convite para você convidas seus amigos para o servidor:**\nhttps://discord.gg/9WUTx4A\nㅤ\nNo momento estamos com **" + message.guild.members.size + " membros** :smile:",
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