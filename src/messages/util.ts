import type { Guild, User, PartialUser } from "discord.js";

export const getMessage = (user: User | PartialUser, messages: string[]) => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  // return message.replace(/{USER}/gm, `\`${user.username}\``);
  return message.replace(/{USER}/gm, `${user.username}`);
};

export const getChannel = async (guild: Guild) => {
  const channel_id = process.env["WELCOME_CHANNEL_ID"]!;

  if (!channel_id)
    throw new Error("Unable to find WELCOME_CHANNEL_ID environment variable");

  const channel = await guild.channels.fetch(channel_id);

  if (!channel) return console.error("Unable to find welcome channel");
  if (!channel?.isTextBased()) return console.error("Channel is not text");

  return channel;
};
