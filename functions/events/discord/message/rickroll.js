const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if(context.params.event.content.startsWith(`${process.env.PREFIX}rickroll`)){
  let messageCreated = await lib.discord.channels['@0.1.0'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: "https://c.tenor.com/_4YgA77ExHEAAAAC/rick-roll.gif",
  })
}