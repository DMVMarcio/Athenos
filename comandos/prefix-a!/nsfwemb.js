exports.run = (client, message, args) => {

    message.channel.sendMessage({
      "embed": {
        "description": "**[clique aqui](https://discord.gg/SZFyZHw) para tocar uma musica :smile:**",
        "color": 55512,
    
        "thumbnail": {
          "url": "https://i.imgur.com/4JaNmFp.png"
        }
      }
    });
    
    }