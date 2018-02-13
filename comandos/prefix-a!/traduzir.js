exports.run = (client, message, args)  => {
    const translate = require('google-translate-api');
    let reason = args.slice(1).join(' ');
      if (reason.length < 1) return message.reply('**Diga o idioma e oque devo traduzir!**');
    translate(`${message.content.replace(`a!traduzir ${args[0]} `,"")}`, {to: `${args[0]}`}).then(res => {
        message.channel.sendMessage({
            "embed": {
              "description": "ㅤ",
              "color": 55512,
              "thumbnail": {
                "url": "https://i.imgur.com/4JaNmFp.png"
              },
              "author": {
                "name": message.author.username,
                "icon_url": message.author.displayAvatarURL
              },
              "fields": [
                {
                  "name": ":confused: NORMAL",
                  "value": "```\n" + message.content.replace(`a!traduzir ${args[0]} `,"") + "```",
                  "inline": true
                },
                {
                  "name": ":sunglasses: TRADUZIDO",
                  "value": "```\n" + res.text + "```",
                  "inline": true
                }
              ]
            }
          });
    }).catch(err => {
        console.error(err);
        message.reply("**O idioma parece não existir. 😕**")
    });
    }