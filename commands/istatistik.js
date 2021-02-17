const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");

module.exports = {
  info: {
    name: "**__istatistik__**",
    description: "**Bot İstatistiklerini Gösterir.**",
    usage: "",
    aliases: ["i", "ıstk", "istats", "bot-bilgi"]
  },

  run: async function(client, message, args) {
    const istatistik = new Discord.MessageEmbed()
      .setColor("YELLOW")

      .addField(
        "**<a:kahkemusic_discordneon:786147845559681025> Botun Sahibi <a:kahkemusic_discordneon:786147845559681025>\n\n**",
        "<a:kahkemusic_discordneon:786147845559681025> <@791021060581621801> - ⫝̸ | Kahke ßêy #0001 <a:kahkemusic_discordneon:786147845559681025> \n<a:kahkemusic_discordneon:786147845559681025><@795676367936684032> - 𝚿 Mert ẞêy ⁷⁵#2629<a:kahkemusic_discordneon:786147845559681025>"
      )
      .addField("**\n<a:kahkemusic_yetkili:786147845668601856> Geliştirici<a:kahkemusic_yetkili:786147845668601856>\n\n** ", "<a:kahkemusic_yetkili:786147845668601856> <@358667747929882627> - 𝚿 QuaRetay⁷⁵#0021 <a:kahkemusic_yetkili:786147845668601856> \n <a:kahkemusic_yetkili:786147845668601856> <@530816183683907594> - Sweethr#0302 <a:kahkemusic_yetkili:786147845668601856>\n\n")
      .addField(
        "\n\n**• Bellek kullanımı<a:mariana_evet:786147846491340830>**",
        (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + " MB",
        true
      )
      .addField(
        "**• Kullanıcılar<a:mariana_evet:786147846491340830>**",
        client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)
      )
      .addField(
        "**• Sunucular<a:mariana_evet:786147846491340830>**",
        client.guilds.cache.size.toLocaleString(),
        true
      )
      .addField(
        "**• Kanallar<a:mariana_evet:786147846491340830>**",
        client.channels.cache.size.toLocaleString(),
        true
      )
      .addField("**• Discord.JS<a:mariana_evet:786147846491340830>**", "v" + Discord.version, true)
      .addField("**• Node.JS<a:mariana_evet:786147846491340830>**", `${process.version}`, true)
      .addField("**• Bit<a:mariana_evet:786147846491340830>**", `\`${os.arch()}\``, true)
      

      .setImage(
        "https://cdn.discordapp.com/attachments/791022828644073474/802715198934089778/standard.gif"
      );
    return message.channel.send(istatistik);
  }
};
