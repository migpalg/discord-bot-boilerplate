// @packages
import { Command } from '@app/types/command';
import fs from 'fs';
import path from 'path';

export class CommandsWrapper {
  static readonly COMMANDS_DIR_PATH = '../../commands';

  private _commands: Map<string, Command>;

  constructor() {
    this._commands = new Map();
  }

  public async getCommands(): Promise<Map<string, Command>> {
    const { COMMANDS_DIR_PATH } = CommandsWrapper;

    if (!this._commands.size) {
      const commandsFiles = fs
        .readdirSync(path.resolve(__dirname, COMMANDS_DIR_PATH))
        .filter(Boolean);

      const commands = await Promise.all(
        commandsFiles.map(
          (commandName) =>
            import(path.join(COMMANDS_DIR_PATH, commandName, commandName)),
        ),
      );

      this._commands = new Map(
        Object.entries(
          commands.reduce(
            (last, current) => [...last, [current.data.name, current]],
            [],
          ),
        ),
      );
    }

    return this._commands;
  }
}

export const commandsWrapper = new CommandsWrapper();
