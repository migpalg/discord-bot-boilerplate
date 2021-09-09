// @packages
import { Client, Intents } from 'discord.js';

// @scripts
import { config } from './config';
import { initEventHandlers } from './initializers';

/**
 * Entry point of the application
 */
async function main(): Promise<void> {
  const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

  await initEventHandlers(client);

  client.login(config.discord.token);
}

main();
