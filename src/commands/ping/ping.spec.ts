import * as pingCommand from './ping';

describe('ping command unit testing', () => {
  it('should reply poing', async () => {
    const interaction = {
      reply: jest.fn(() => Promise.resolve()),
    };

    await pingCommand.execute(interaction as any);

    expect(interaction.reply).toHaveBeenCalledWith('pong!');
  });
});
