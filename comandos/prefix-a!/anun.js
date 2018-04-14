exports.run = (client, message, args) => {

    if (message.author.id === "315263840268976128" || message.author.id === '399302842688733195' || message.author.id === '286144811680137218'){
    message.delete();
    message.channel.sendMessage("<@&399759520089374720> :arrow_down: :arrow_down: <@&399759520089374720>");
    message.channel.sendMessage({
        "embed": {
          "description": `ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ ANUNCIO ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\nSistema de loteria foi criado no servidor, informações em <#410084948930854912>. :wink:`,
          "url": "https://discordapp.com",
          "color": 55512,
          "thumbnail": {
            "url": "https://i.imgur.com/4JaNmFp.png"
          }
        }
      });
    } else {
     message.reply("**Sem permissão.**);   
    }
    
    }
