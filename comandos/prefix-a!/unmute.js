exports.run = (client, message, args) => {
    

    const cargoNOME = '🔇 Athenos Mute'
    const cargoID = message.guild.roles.find("name",cargoNOME).id


let user = message.mentions.users.first();
if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply("**Você não tem permissão para desmutar alguem!**");
if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para eu desmutar!**");
if(message.guild.member(message.mentions.users.first()).highestRole.position >= message.member.highestRole.position){
    message.reply("**Este usuário tem um cargo maior que o seu!**");
} else {

    if (message.guild.roles.find("name", cargoNOME)){

        if(message.mentions.users.first().roles.find("name",cargoNOME)) {
            message.guild.members.get(message.mentions.users.first().id).removeRole(cargoID);
            message.reply("**Usuário desmutado.**");
        } else {
            message.reply("**Usuário não está mutado.**");
        }

    } else {
        message.reply("**Use o comando novamente, pois o cargo " + cargoNOME + " não existia aqui!**");
        message.guild.createRole({
            name: cargoNOME
        })
    }

}
}