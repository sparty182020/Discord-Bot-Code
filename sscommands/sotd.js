const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sotd')
        .setDescription('Start the sond of the day')
        .setDefaultPermission(false)
}