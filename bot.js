console.log('starting bot');
console.log(process.env.DISCORD_TOKEN);
var Discord = require('discord.io');

const client = new Discord.Client();
client.login(process.env.DISCORD_TOKEN);
// Initialize Discord Bot


