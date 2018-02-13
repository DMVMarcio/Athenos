exports.run = (client, message, args) => {
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('**Diga o nick da skin!**');
  message.channel.sendMessage({
    "embed": {
      "title": `${args[0]}`,
      "url": `https://mcapi.ca/skin/${args[0]}`,
      "color": 55512,
      "image": {
        "url": `https://mcapi.ca/skin/${args[0]}`
      },
      "author": {
        "name": `${message.author.username}`,
        "icon_url": `${message.author.displayAvatarURL}`
      }
    }
  });

}