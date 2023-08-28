import { event } from "jellycommands";

export default event({
  name: "error",
  run: (error) => console.log("error", error),
});
