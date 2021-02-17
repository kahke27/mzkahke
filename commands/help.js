const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "__**help**__",
    description: "**Botdaki Komutları Gösterir**",
    usage: "[command]",
    aliases: ["commands", "yardım", "pls help"]
  },

  run: async function(client, message, args) {
    var allcmds = "";

    client.commands.forEach(cmd => {
      let cmdinfo = cmd.info;
      allcmds +=
        "<:emoji_9:802732570508263464>" +
        process.env.PREFIX +
        cmdinfo.name +
        " " +
        cmdinfo.usage +
        " • " +
        cmdinfo.description +
        "\n";
    });

    let embed = new MessageEmbed()
      .setAuthor(
        "Commands of " + client.user.username,
        "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif"
      )
      .setColor("BLUE")
      .setDescription(allcmds)
      .setFooter(
        `Yapabileceğiniz her komut hakkında bilgi almak için ${process.env.PREFIX}help [command] |`
      );

    if (!args[0]) return message.channel.send(embed);
    else {
      let cmd = args[0];
      let command = client.commands.get(cmd);
      if (!command)
        command = client.commands.find(x => x.info.aliases.includes(cmd));
      if (!command) return message.channel.send("Unknown Command");
      let commandinfo = new MessageEmbed()
        .setTitle("Command: " + command.info.name + " info")
        .setColor("YELLOW").setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${process.env.PREFIX}${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`);
      message.channel.send(commandinfo);
    }
  }
};
