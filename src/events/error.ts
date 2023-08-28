import { event } from "jellycommands";

export default event({
  name: "error",
  run: (_, error) => console.log("error", error),
});
