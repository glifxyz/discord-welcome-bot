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
import { getMessage } from "./util";
import { joinMessages } from "./messages";
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
  if(!process.env.GLIF_API_TOKEN) throw new Error("missing GLIF_API_TOKEN");

  const glifId = "clq0nz7880000yo2oeo5zo4n7";

  // first message - simple welcome
  // channel.send({ content: `Welcome ${user.username}! stand by...` });
  const text = getMessage(user, joinMessages);
  const welcome1 = new EmbedBuilder()
    .setTitle(`welcome <@${user.id}>`)
    .setDescription(text);
  // channel.send({ embeds: [welcome1] });
  const glifInfo = `running **Discord Welcome Message** by @snuts & @fab1an <https://glif.app/glifs/${glifId}>`
  channel.send(
    `welcome <@${user.id}>! making you something with the \`/glif\` command, hold on...
${glifInfo}`
  );

  // second message - with glif image
  // v1: Insane Welcome Mesage https://glif.app/@fab1an/glifs/cllkjq2jh0006mf0f3evcdjmm
  // v2: Insaner Welcome Welcome by @snuts https://glif.app/@snuts/glifs/clmqn32i50007l70fynzaualh
  const inputs = [user.username];
  console.log("runGlif", { glifId, inputs });
  const response: any = await wretch(`https://simple-api.glif.app/${glifId}`)
    .auth(`Bearer ${process.env.GLIF_API_TOKEN}`)
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

  await user.fetch();

  const embed = new EmbedBuilder()
    // .setTitle(getMessage(user, joinMessages))
    // .setDescription('This is a description.')
    // .setDescription(text)
    .setColor("#0099ff")
    .setImage(output);
  channel.send({ embeds: [embed] });

  return response;
}
