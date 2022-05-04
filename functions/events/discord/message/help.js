const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if(context.params.event.content.startsWith(`${process.env.PREFIX}help`)){
    
  let message = await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
     content: "",
    embed: {
      title: `Hey <@!${context.params.event.author.id}> , You Asked For Help, So Here I Am!`,
      type: "rich",
      color: 0x00AA00,
      description: "Help Info: ",
      fields: [{
        name: "$ping",
        value: "Sends You A Pong",
        },
        {
        name: "$help",
        value: "Gives You All Help Info",
        },
        {
          name: "$dm",
          value: "Sends You A Random Message In Your DM",
        }
      ]
    }
  })
 
}