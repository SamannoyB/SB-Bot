const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const bannedWords = ['wtf','shit','fuck','wretch','stfu','nig'];

let writtenWord = context.params.event.content.toLowerCase();

if(writtenWord.includes(bannedWords[0]) || writtenWord.includes(bannedWords[1]) || writtenWord.includes(bannedWords[2]) || writtenWord.includes(bannedWords[3]) || writtenWord.includes(bannedWords[4]) || writtenWord.includes(bannedWords[5])){
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: `${context.params.event.id}`,
    channel_id: `${context.params.event.channel_id}`
  });
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Warning <@${context.params.event.author.id}>, you are using wrong language.`
  });
}





