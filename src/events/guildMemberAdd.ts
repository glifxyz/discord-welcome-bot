import { getChannel, getMessage } from "../messages/util";
import { joinMessages } from "../messages/messages";
import { EmbedBuilder } from "discord.js";
import { event } from "jellycommands";
import wretch from "wretch";
import { runWelcomeGlifAndPostToChannel } from "../messages/glifs";

export default event({
  name: "guildMemberAdd",

  async run(_, member) {
    console.log("guildMemberAdd", member);

    const channel = await getChannel(member.guild);
    if (!channel) return;

    await member.fetch();
    channel.send(`hellllloooo ${member.displayName}`);

    // TODO run a slash command if available :)
    // update: looks like bots can't run slash commands :(

    // run the glif ourselves
    // const response = await runGlif(id, [input]);
    await runWelcomeGlifAndPostToChannel(member.user, channel);

    // channel.send({
    //   content: member.toString(),
    //   embeds: [
    //     new EmbedBuilder()
    //       .setDescription(getMessage(member.user, joinMessages))
    //       .setColor("#7de062"),
    //   ],
    // });
  },
});
