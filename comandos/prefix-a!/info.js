exports.run = (client, message, args) => {

    var marcio = client.guilds.get("399756948951662592").members.get("315263840268976128").user.tag
    var julia = client.guilds.get("399756948951662592").members.get("399302842688733195").user.tag
    var kauan = client.guilds.get("399756948951662592").members.get("425797924232888340").user.tag
    var john = client.guilds.get("399756948951662592").members.get("404966710077292544").user.tag
    var zagrion = client.guilds.get("399756948951662592").members.get("286144811680137218").user.tag
    var natsu = client.guilds.get("399756948951662592").members.get("282504900552949760").user.tag

    message.channel.sendMessage({
        "embed": {
          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ATHENOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\nOlá, sou **Athenos**, um bot simples para discord, aqui estão algumas informações sobre mim:\nㅤ",
          "color": 55512,
          "timestamp": new Date(),
          "footer": {
            "icon_url": message.author.displayAvatarURL,
            "text": message.author.username
          },
          "thumbnail": {
            "url": "https://i.imgur.com/4JaNmFp.png"
          },
          "fields": [
            {
              "name": ":bust_in_silhouette: Donos:",
              "value": `- **${marcio}**\n- **${julia}**\n- **${kauan}**`,
              "inline": true
            },
            {
              "name": ":tools: Ajudantes:",
              "value": `- **${john}**\n- **${zagrion}**\n- **${natsu}**`,
              "inline": true
            },
            {
              "name": ":trident: Status:",
              "value": `- **${client.guilds.size}** guilds\n- **${client.channels.size}** channels\n- **${client.users.size}** users\n- **${client.emojis.size}** emojis`,
              "inline": true
            },
            {
              "name": ":tools:  Links:",
              "value": "- **[Bot](https://discordapp.com/oauth2/authorize?client_id=421759842382774272&scope=bot&permissions=2146958591)**\n- **[Servidor](https://discord.gg/9WUTx4A)**",
              "inline": true
            }
          ]
        }
      });

}