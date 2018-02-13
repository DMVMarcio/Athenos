var database = require("../../database.js")

exports.run = (client, message, args) => {

if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply("**Você não tem permissão para punir alguem!**");



}