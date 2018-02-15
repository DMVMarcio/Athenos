exports.run = (client, message, args) => {
    if (!message.member.hasPermission(["MANAGE_ROLES"])) return message.reply("Você não tem permissão para ver os cargos!!").then((value) => {
        setTimeout(() => {
            value.delete();
        }, 10000);
    })
    for (var i = 0; i < message.guild.roles.size; i++) {
        message.channel.sendMessage("ID: " + message.guild.roles.array()[i].id + " / Nome: " + message.guild.roles.array()[i].name);
    }
}
