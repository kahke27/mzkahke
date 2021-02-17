const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const fs = require('fs');//youtube/NoblesYT


module.exports = {
  info: {
    name: "**__afk__**",
    description: "**24/7**",//youtube/NoblesYT
    usage: "[afk]",
    aliases: ["24/7"],
  },

  run: async function (client, message, args) {
    let afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
       if (!afk[message.guild.id]) afk[message.guild.id] = {//youtube/NoblesYT
        afk: false,
    };
    var serverQueue = afk[message.guild.id]
       if (serverQueue) {
            serverQueue.afk = !serverQueue.afk;
             message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `💤  **|**  AFK is **\`${serverQueue.afk === true ? "enabled" : "disabled"}\`**`//youtube/NoblesYT
                }
            });
            return  fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {
        if (err) console.error(err);
    });
        };
    return sendError("Bu sunucuda oynatılan hiçbir şey yok.", message.channel);//youtube/NoblesYT
  },
};
