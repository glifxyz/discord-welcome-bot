import { event } from "jellycommands";
import { getChannel } from "../messages/util";
import { runWelcomeGlifAndPostToChannel } from "../messages/glifs";

export default event({
  name: "messageReactionAdd",
  run: async (_, reaction, user) => {
    console.log("messageReactionAdd", reaction, user);

    // for testing if our welcome command works...!
    // await user.fetch();
    // await reaction.fetch();
    // const channel = reaction.message.channel;
    // await runWelcomeGlifAndPostToChannel(user, channel);
  },
});
