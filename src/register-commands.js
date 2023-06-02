require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
  {
    name: 'embed',
    description: 'Sends an embed!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {  
  try {
    console.log('Registrando i comandi con la slash...')
  await rest.put(
    Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.
    GUILD_ID),
    { body: commands}
  )

  console.log('I comandi con la slash sono stati registrati corretamente!')
} catch (error) {
  console.log(`C'e' stato un errore: ${error}`);
  }
})();