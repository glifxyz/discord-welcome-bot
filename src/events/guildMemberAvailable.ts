import { event } from "jellycommands";

export default event({
  name: "guildMemberAvailable",
  run: (member, client) => console.log("guildMemberAvailable", member),
});
