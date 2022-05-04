const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.users['@0.1.1'].dms.create({
  recipient_id: `${context.params.event.user.id}`,
  content: `**Thanks for joining Our Server, <@!${context.params.event.user.id}>!** Here's some info to let you be successful on the server!:`,
  embed: {
    title: `Hello Coding Fans!`,
    description: `Helpful info on the server.`,
    fields: [
      {
        name: '📜 - Rules and Info ',
        value: `Be Respectful, kind and helpful to everyone. Don;t be against the rules.`,
      },
      {
        name: '❤️ - Be Respectful',
        value:
          'In our server you must be respectful, we like to keep the hate out!',
      },
      {
        name: '❓ - Questions?',
        value: 'Get support in our website -- https://hello-coding-fans.epizy.com or mail us at -- sbworldinfo@aol.com  if you have any more concerns!',
      },
      {
        name: 'Discord Invite',
        value: 'A discord Invite',
      },
    ],
    image: {
      url: 'https://www.rosellepark.net/wp-content/uploads/2021/01/welcome.jpg',
    },
    footer: {
      text: 'With ❤️ from Hello Coding Fans!',
    },
    color: 0x009fb7, //Cyanish Color
  },
})