const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "**__invite__**",
    description: "**Botu Sunucunuza Davet Etmeniz İçin Link Verir**",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Beni sunucuda da istiyor musun? Beni davet et! \n\n <a:tk6:777551320289771530>  [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) <a:tk6:777551320289771530>`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
