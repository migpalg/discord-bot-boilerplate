import { Client } from 'discord.js';
import fs from 'fs';
import path from 'path';

const EVENTS_DIR_PATH = '../../events/';

/**
 * Injects events into the passed client as argumment
 * @param client Current discord client
 */
export async function initEventHandlers(client: Client): Promise<void> {
  const eventFiles = fs
    .readdirSync(path.resolve(__dirname, EVENTS_DIR_PATH))
    .filter(Boolean);

  const eventHandlers = await Promise.all(
    eventFiles.map(
      (eventName) => import(path.join(EVENTS_DIR_PATH, eventName, eventName)),
    ),
  );

  eventHandlers.forEach((eventImport) => {
    const event = eventImport.default;

    if (event.once)
      client.once(event.name, (...args) => event.execute(...args));
    else client.on(event.name, (...args) => event.execute(...args));
  });
}
