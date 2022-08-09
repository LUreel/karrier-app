console.log('starting bot');
console.log(process.env.DISCORD_TOKEN);
var Discord = require('discord.io');

const client = new Discord.Client({
    token: process.env.DISCORD_TOKEN
});
client.on("ready", () => {
    console.log('Bot Started');
});


