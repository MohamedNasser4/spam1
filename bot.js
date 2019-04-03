const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("563023951471837194")
setInterval(function() {
channel.send(`JustMido JustMido JustMido JustMido JustMido JustMido JustMido JustMido`);
}, 30)
})

client.login(process.env.BOT_TOKEN);