import { event } from "jellycommands";

export default event({
  name: "guildMemberRemove",
  run: (member, client) => console.log("guildMemberRemove", member),
});
