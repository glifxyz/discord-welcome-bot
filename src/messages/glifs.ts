import {
  TextChannel,
  NewsChannel,
  VoiceChannel,
  PartialDMChannel,
  DMChannel,
  User,
  PartialUser,
  PublicThreadChannel,
  PrivateThreadChannel,
  EmbedBuilder,
} from "discord.js";
import wretch from "wretch";

const firstElementIfArray = (value: unknown) => {
  return Array.isArray(value) ? value[0] : value;
};

export async function runWelcomeGlifAndPostToChannel(
  user: User | PartialUser,
  channel:
    | TextChannel
    | NewsChannel
    | VoiceChannel
    | PartialDMChannel
    | DMChannel
    | PublicThreadChannel
    | PrivateThreadChannel
) {
  // Insane Welcome Mesage https://glif.app/@fab1an/glifs/cllkjq2jh0006mf0f3evcdjmm
  const glifId = "cllkjq2jh0006mf0f3evcdjmm";

  const inputs = [user.username];

  console.log("runGlif", { glifId, inputs });
  const response: any = await wretch(`https://simple-api.glif.app/${glifId}`)
    .post({ inputs })
    .json();
  console.log("runGlif response =>", response);

  let output = firstElementIfArray(response.output);
  console.log("output =>", output);

  // const url = `https://glif.app/@${glif.user.username}/glifs/${id}`;

  // channel.send({
  //   content: `Welcome ${user.username}!`,
  //   embeds: embeds,
  // });

  const embed = new EmbedBuilder()
    .setTitle("welcome!")
    // .setDescription('This is a description.')
    .setColor("#0099ff")
    .setImage(output);
  channel.send({ embeds: [embed] });

  return response;
}
