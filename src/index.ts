// @packages
import { Client, Intents } from 'discord.js';

// @scripts
import { config } from './config';

/**
 * Entry point of the application
 */
async function main(): Promise<void> {
  const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

  client.login(config.discord.token);
}

main();
