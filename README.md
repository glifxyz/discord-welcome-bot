# glifConcierge

Friendly host bot for the glif.app Discord server - join here: <https://glif.app/discord>

This project was created with [JellyCommands](https://jellycommands.dev/)

The randomly-generated intro message looks something like this:

![CleanShot 2024-09-11 at 13 38 02@2x](https://github.com/user-attachments/assets/64dbe94e-587b-4666-a601-d08e6419f5ad)


## Install this bot

<https://discord.com/api/oauth2/authorize?client_id=1145632354442940448&permissions=2147745856&scope=bot%20applications.commands>

## Development

We are using `pnpm` rather than npm or yarn.

Copy the example `.env` and put your Discord bot token in the:

```sh
cp .env.example .env
```

Then in development:

```sh
pnpm run dev
```

In a production deployment:

```sh
pnpm run start
```

## Helpful docs

Full list of Discord.js events and their parameters: <https://old.discordjs.dev/#/docs/discord.js/14.13.0/class/Client?scrollTo=e-guildMemberAdd>

JellyCommands docs - helper layer + boilerplate on top of discord.js: <https://jellycommands.dev/guide/commands/slash.html>
