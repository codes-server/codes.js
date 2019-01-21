const { RichEmbed } = require('discord.js');
/* eslint-disable valid-jsdoc */
/**
 * @param {import('discord.js').Message} message
 */
module.exports = message => {
  const members = message.guild ? message.guild.members : null;
  if (!members) throw Error(`[Plugins: Members] Not vaild in non-guild.`);
  const embed = new RichEmbed()
    .setDescription(members.array().slice(0, 50).map(member => `**${member.user.tag}**`))
    .setFooter(`Total Members: ${members.size} | Page 1`);
  return message.channel.send(embed);
};
