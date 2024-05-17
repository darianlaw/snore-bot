require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);
    const guildCount = client.guilds.cache.size;

    client.user.setActivity({
        name: `${guildCount} servers :]`,
        type: ActivityType.Watching,
    });


});





client.login(process.env.TOKEN);