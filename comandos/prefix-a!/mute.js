exports.run = (client, message, args) => {
    

        const cargoNOME = '🔇 Athenos Mute'


    let user = message.mentions.users.first(); 
    let reason = args.slice(1).join(' ');
    if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply("**Você não tem permissão para mutar alguem!**");
    if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para eu mutar!**");
    if (reason.length < 1) return message.reply('**Diga o tempo em minutos para eu mutar!**');
    if(message.guild.member(message.mentions.users.first()).highestRole.position >= message.member.highestRole.position){
        message.reply("**Este usuário tem um cargo maior que o seu!**");
    } else {
        if (message.guild.roles.find("name", cargoNOME)){
            var mute = message.guild.roles.find("name",cargoNOME)
            for (var i =0;i < mute.members.size;i++){
                if (mute.members.array()[i].id ==  message.mentions.users.first().id){
                message.reply("Usuário já está mutado(a)!")
            }}
            message.guild.members.get(message.mentions.users.first().id).addRole(mute.id);
                setTimeout(function() {
                    message.guild.members.get(message.mentions.users.first().id).removeRole(mute.id);
                    message.channel.sendMessage("**<@" + message.mentions.users.first().id + ">, Você foi desmutado(a)**");
                },args[1] * 1000 * 60)
                message.reply("**Usuário mutado por " + args[1] + "minutos**");
               message.mentions.users.first().send("**Você foi mutado(a) no servidor " + message.guild.name + " por " + args[1] + "m !**");
               message.mentions.users.first().send("**Você foi desmutado(a) no servidor " + message.guild.name + "!**");
        }   if(!mute){
            message.reply("**Use o comando novamente, pois o cargo " + cargoNOME + " não existia aqui!**");
            message.guild.createRole({
                name: cargoNOME
            })
        }
    }

}