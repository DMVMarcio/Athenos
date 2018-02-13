exports.run = (client, message, args)  => {
let reason = args.slice(0).join(' ');
  if(message.member && message.member.roles.find("name", "⚠ LEMBRETE ⚠")){
  if (reason.length < 1) return message.reply('**Você precisa inserir a quantidade de minutos que o bot irá mandar o lembrete. :confused:**');
  if (reason.length < 2) return message.reply('**Você precisa dizer o lembrete. :confused:**');
message.reply("**Lembrete setado! :heavy_check_mark: **");
setTimeout(function(){
message.author.sendMessage({
  "embed": {
    "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ LEMBRETE ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n" + message.content.replace(`a!lembrete ${args[0]} `,""),
    "color": 55512,
    "thumbnail": {
      "url": "https://i.imgur.com/4JaNmFp.png"
    }
  }
});
},`${args[0]}` * 60 * 1000)
  } else {
    message.reply("**Você não pode usar este comando.**");
  }
}