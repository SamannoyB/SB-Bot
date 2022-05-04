const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: "",
  description: "",
  embed: {
    title: "I'm Here!",
    type: "rich",
    color: 0x00AA00,
    fields: [{
      name: `<@!${context.params.event.author.id}!> , Yeah!`,
      value: "I'm here, WHAT DO YOU WANT?",
    }]
  }
})