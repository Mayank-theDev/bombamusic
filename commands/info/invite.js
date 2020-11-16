const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  aliases: ["invite", "addbot", "invitebot", "add"],
  usage: ["info"], //fthis usage mtfff
  description: "Get Invite Link for BombaBot",

  run: async (client, message, args) => {
    let botVersion = "1.0.0";

    function deraton(ms) {
      const min = Math.floor((ms / (1000 * 60)) % 60).toString();
      const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
      const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
      return `${days.padStart(1, "0")} days, ${hrs.padStart(
        2,
        "0"
      )} hours, ${min.padStart(2, "0")} minutes, `;
    }
    const embed = new MessageEmbed()
      // .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
      .setAuthor("BombaBot Version 4.1.0 With 100 Commands| Invite", "")
      .addField(
        "Links",
        ":rocket: [BombaBot! Click me to invite me to your server!](https://discord.com/api/oauth2/authorize?client_id=730307957081768037&permissions=2146958839&scope=bot)"
      )
      .addField("Prefix", " `b?`")
      .setFooter(
        "Thank You For Supporting BombaBot!",
        "https://images-ext-1.discordapp.net/external/gTBrx3RUbp6Ux0f0GXE63VBNOcLNCbco9O-XnY3_OdE/%3Fv%3D1/https/cdn.discordapp.com/emojis/500353366946217987.gif"
      )
      .setTimestamp();
    if (
      message.channel.guild.me.hasPermission("EMBED_LINKS") ||
      message.guild.me.hasPermission("EMBED_LINKS" || "ADMINISTRATOR")
    ) {
      message.channel.send(embed);
    } else {
      message.channel.send(
        `**Uptime**: ${deraton(
          client.uptime
        )}\n**Useful Link**\n- Discord Server: https://discord.gg/guEt8ck\n**Developers**: \n**Version**: ${botVersion}\n`
      );
    }
  },
  aliases: ["bot", "botinfo"]
};
