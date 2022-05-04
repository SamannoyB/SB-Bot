// i am still working on it
// fix it if you can lol
//i am really raw a t arrays and all so yeah

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const bannedWords = ['wtf','stfu','shit','wretch','fuck'];
const bannedWords2 = ['Wtf','Stfu','Shit','Wretch','Fuck'];
const bannedWords3 = ['WTF','STFU','SHIT','WRETCH','FUCK'];


if(context.params.event.content.includes(bannedWords[0])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}
else if(context.params.event.content.includes(bannedWords[1])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}
else if(context.params.event.content.includes(bannedWords[2])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}
else if(context.params.event.content.includes(bannedWords[3])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}
else if(context.params.event.content.includes(bannedWords[0])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}

else if(context.params.event.content.includes(bannedWords2[0])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}
else if(context.params.event.content.includes(bannedWords2[1])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}
else if(context.params.event.content.includes(bannedWords2[2])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}
else if(context.params.event.content.includes(bannedWords2[3])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}
else if(context.params.event.content.includes(bannedWords2[4])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}

else if(context.params.event.content.includes(bannedWords3[0])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}
else if(context.params.event.content.includes(bannedWords3[1])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}
else if(context.params.event.content.includes(bannedWords3[2])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}
else if(context.params.event.content.includes(bannedWords3[3])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}
else if(context.params.event.content.includes(bannedWords3[4])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`, // required
    channel_id: `${context.params.event.channel_id}` // required
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@!${context.params.event.author.id}> , you are using wrong language.`,
  })
}

