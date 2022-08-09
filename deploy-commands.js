const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');


const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.DDISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands('1006616701946822706', '607271025104781410'), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);