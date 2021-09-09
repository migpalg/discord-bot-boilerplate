// @scripts
import { createEvent } from '@app/utils';
import { commandsWrapper } from '@app/initializers';

export default createEvent({
  name: 'interactionCreate',
  execute: async (interaction) => {
    if (!interaction.isCommand()) return;

    const commands = await commandsWrapper.getCommands();
    const command = commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      await interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true,
      });
    }
  },
});
