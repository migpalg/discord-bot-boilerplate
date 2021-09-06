import { Client, Intents } from 'discord.js';

async function main(): Promise<void> {
  const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

  client.once('ready', () => {
    console.log('Ready!');
  });
}

main();
