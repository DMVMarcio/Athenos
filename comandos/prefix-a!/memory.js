exports.run = (client, message, args) => {
message.reply(`**Memoria usada:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb :timer:`);
}