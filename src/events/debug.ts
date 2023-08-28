import { event } from "jellycommands";

export default event({
  name: "debug",
  run: (_, info) => console.log("debug", info),
  // run: (_, info) => {},
});
