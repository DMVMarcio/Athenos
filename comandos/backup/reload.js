exports.run = (client, message, args) => {
    let reason = args.slice(0).join(' ');
    if (message.author.id === "399302842688733195" || message.author.id === "274716580984913921") {
      if (reason.length < 1) return message.reply('**Diga o comando que devo reiniciar!**'); 
      delete require.cache[require.resolve(`./${args[0]}.js`)];
  
      message.channel.sendMessage({
        "embed": {
          "description": ":white_check_mark: **| Recarreguei o comando `" + args[0] + "` com sucesso!**",
          "color": 13450255,
          "author": {
            "name": "Touka",
            "icon_url": "http://25.media.tumblr.com/tumblr_mdxfggJf1T1r8oyaho1_500.gif"
          },
          "timestamp": "2018-01-23T18:21:28.492Z"
        } 
      });
    } else {
      return message.reply("**Você não pode usar este comando!**");
    }
  
  
  }