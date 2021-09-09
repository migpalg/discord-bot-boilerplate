import { commandsWrapper } from './commands-intializer';

describe('commands initializer unit testing', () => {
  it('should return commands', async () => {
    const commands = await commandsWrapper.getCommands();

    expect(commands.size).toBeTruthy();
  });
});
