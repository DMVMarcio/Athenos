exports.run = (client, message, args)  => {

  message.reply("**Enviei os comandos no seu privado! :heart: **");
  message.author.sendMessage({
    "embed": {
      "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ COMANDOS ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**" + message.author.username + " Aqui estão os comandos que você pode usar em nosso servidor 😉**\nㅤ\n**1** - **a!coins | a!money**\n**2** - **a!level**\n**3** - **a!cla**\n**4** - **a!moneytop**\n**5** - **a!topusers**\n**6** - **a!notificar**\n**7** - **a!comprar**\n**8** - **a!traduzir**\n**9** - **a!doar**\n**10** - **a!mute**\n**11** - **a!lembrete**\n**12** - **a!nick**\n**13** - **a!ping**\n**14** - **a!mcskin**\n**15** - **a!daily**\n**16** - **a!roubar**\n**17** - **a!loteria**\n**18** - **a!memory**\n**19** - **a!invite | a!convite**\n**20** - **a!sugest**",
      "color": 55512,
      "thumbnail": {
        "url": "https://i.imgur.com/4JaNmFp.png"
      }
    }
  });

}