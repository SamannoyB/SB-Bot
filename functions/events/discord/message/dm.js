const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.content.startsWith(`${process.env.PREFIX}dm`)){
  const values = ['hi!','hello!','My creator is SamannoyB!','Aha.','Thanks for calling me.','How are you?','Know Me?'];
  
  var a = values[Math.floor(Math.random()*values.length)];
  
  let val = a;
  let messageCreated= await lib.discord.users['@0.1.1'].dms.create({
    recipient_id: `${context.params.event.author.id}`,
    content: val,
  })
}
