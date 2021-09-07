// @packages
import { Awaited, ClientEvents } from 'discord.js';

export interface EventHandler<T extends keyof ClientEvents> {
  name: T;
  once?: boolean;
  execute: (...args: ClientEvents[T]) => Awaited<void>;
}

export function createEvent<T extends keyof ClientEvents>(
  args: EventHandler<T>,
): EventHandler<T> {
  return args;
}
