import { getChannel, getMessage } from "../messages/util";
import { joinMessages } from "../messages/messages";
import { EmbedBuilder } from "discord.js";
import { event } from "jellycommands";
import wretch from "wretch";
import { runWelcomeGlifAndPostToChannel } from "../messages/glifs";

export default event({
  name: "guildMemberAdd",

  async run(_, member) {
    // console.log("guildMemberAdd", member);
    console.log("guildMemberAdd", member.user);

    const channel = await getChannel(member.guild);
    if (!channel) return;

    await member.fetch();
    // await user.fetch();
    // await reaction.fetch();
    await runWelcomeGlifAndPostToChannel(member.user, channel);
  },
});
