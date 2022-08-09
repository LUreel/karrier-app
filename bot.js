console.log('starting bot');
console.log(process.env.DISCORD_TOKEN);
var Discord = require('discord.io');

// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.DISCORD_TOKEN,
   autorun: true
});
bot.on('ready', function (evt) {
    console.log('Bot Ready to Go');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !pinga
            case 'pinga':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});

