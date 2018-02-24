exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');

        if(!razaou.length < 1) {

    if(message.content.startsWith("a!parceria notify")) {

        if(!message.guild.members.get(message.author.id).roles.find("name", '🔔 PARCECAR 🔔')) {
            message.reply("**Notificações de parceiros ativadas! 🔔**");
            message.guild.members.get(message.author.id).addRole("416952138690986002");
        } else {
            message.reply("**Notificações de parceiros desativadas! 🔕**");
            message.guild.members.get(message.author.id).removeRole("416952138690986002");
        }

    }

} else {
    message.channel.sendMessage({
        "embed": {
            "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ PARCEIRO ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```a!parceria info\na!parceria notify```",
            "color": 55512,
            "thumbnail": {
                "url": "https://i.imgur.com/4JaNmFp.png"
            }
        }
    });
}

}