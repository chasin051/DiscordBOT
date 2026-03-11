const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});
const REPORT_CHANNEL_ID = "1481010403277410384";
client.once('ready', () => {
  console.log('RUSTEZ Bot is Online!');
});

client.on('messageCreate', message => {

  if (message.content === "!server") {
    message.reply("Rust server is online!");
  }

  if (message.content === "!wipe") {
    message.reply("Next wipe: Friday 3PM EST");
}
});

client.login("process.env.TOKEN");