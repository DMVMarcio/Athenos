exports.run = (client, message, args) => {

    message.channel.send({
            "embed": {
              "description": "ㅤㅤㅤ:snowflake: **PING:** :snowflake:ㅤㅤ\n\n📡" + (Date.now() - message.createdTimestamp) + "ms",
              "color": 55512,
              "thumbnail": {
                "url": "https://i.imgur.com/4JaNmFp.png"
              }
            }
          });
}