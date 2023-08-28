import "dotenv/config";
import { JellyCommands } from "jellycommands";
import { IntentsBitField, Partials } from "discord.js";

if (!process.env.GUILD_ID) throw new Error("missing GUILD_ID");
if (!process.env.WELCOME_CHANNEL_ID)
  throw new Error("missing WELCOME_CHANNEL_ID");

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
    guilds: [process.env.GUILD_ID],
  },

  // print bonus debugging
  // debug: true,
});

// Automatically reads the DISCORD_TOKEN environment variable
client.login();
