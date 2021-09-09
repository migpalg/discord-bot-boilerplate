import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with poing!');

export async function execute(interaction: CommandInteraction): Promise<void> {
  await interaction.reply('pong!');
}
