import { event } from "jellycommands";

export default event({
  name: "guildMemberAdd",
  run: (member, client) => console.log("guildMemberAdd", member),
});
