import { event } from "jellycommands";

export default event({
  name: "warn",
  run: (_, warn) => console.log("warn", warn),
});
