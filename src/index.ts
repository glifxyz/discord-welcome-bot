import "dotenv/config";
import { JellyCommands } from "jellycommands";
import { IntentsBitField, Partials } from "discord.js";

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
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.GuildMessageReactions,
      // IntentsBitField.Flags.GuildPresences
      // IntentsBitField.Flags.MessageContent,
    ],
    partials: [
      Partials.Channel,
      Partials.GuildMember,
      Partials.Message,
      Partials.Reaction,
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

  // print bonus debugging
  debug: true,
});

// Automatically reads the DISCORD_TOKEN environment variable
client.login();
