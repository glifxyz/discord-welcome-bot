import { event } from "jellycommands";

export default event({
  name: "messageReactionAdd",
  run: (reaction, client) => console.log("messageReactionAdd", reaction),
});
