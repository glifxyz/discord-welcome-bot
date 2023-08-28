import { event } from "jellycommands";

export default event({
  name: "warn",
  run: (warn) => console.log("warn", warn),
});
