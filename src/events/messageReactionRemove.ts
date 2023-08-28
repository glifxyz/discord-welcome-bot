import { event } from "jellycommands";

export default event({
  name: "messageReactionRemove",
  run: (reaction, client) => console.log("messageReactionRemove", reaction),
});
