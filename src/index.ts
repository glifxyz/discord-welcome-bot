import "dotenv/config";
import { JellyCommands } from "jellycommands";
import { IntentsBitField } from "discord.js";

const client = new JellyCommands({
  // https://jellycommands.dev/guide/commands/loading
  commands: "src/commands",

  // https://jellycommands.dev/guide/events/loading
  events: "src/events",

  // https://jellycommands.dev/guide/buttons/loading
  buttons: "src/buttons",

  clientOptions: {
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMessageReactions,
      IntentsBitField.Flags.GuildMembers,
      // IntentsBitField.Flags.GuildPresences
    ],
  },

  // In testing we should enable this, it will make all our commands register in our testing guild
  // https://jellycommands.dev/guide/commands/dev#global-dev-mode
  dev: {
    global: true,
    guilds: [
      "668113742265057300", // memeresearchlab
    ],
  },
});

// Automatically reads the DISCORD_TOKEN environment variable
client.login();
