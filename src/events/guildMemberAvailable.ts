import { event } from "jellycommands";

export default event({
  name: "guildMemberAvailable",
  run: (_, member) => console.log("guildMemberAvailable", member),
});
