import { event } from "jellycommands";
import { getChannel } from "../messages/util";
import { runWelcomeGlifAndPostToChannel } from "../messages/glifs";

export default event({
  name: "messageReactionAdd",
  run: async (_, reaction, user) => {
    console.log("messageReactionAdd", reaction, user);
    await user.fetch();
    await reaction.fetch();
    const channel = reaction.message.channel;
    // const channel = await getChannel(member.guild);
    // if (!channel) return;

    channel.send({ content: `Welcome ${user.username}! stand by...` });

    console.log("let's run glif for...");
    await runWelcomeGlifAndPostToChannel(user, channel);
    console.log("we did it!");
  },
});
