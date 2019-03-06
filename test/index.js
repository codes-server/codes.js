const { TOKEN } = require('../../auth');
const { Client, Plugins, version } = require('../src/index');
const client = new Client(TOKEN, ['228401267263668224','407595276946243604','354716386716811264','171259176029257728','298732816995319809'], '-');

client.on('ready', () => {
  /* eslint-disable no-console */
  console.log(`${client.user.tag} is ready
OWNER: ${client.owner}
VERSION: ${version}
`);
});
client.command({
    name: "ping",
    aliases: ['kpop', 'brok', 'pings', 'pong']
  },
  message => {
    message.channel.send('PONG!');
  });

  client.command({
    name: "status",
    aliases: ['status','bot-status'],
    ownerOnly: true
  }, message=>{
    message.channel.send(`CHANGE BOT STATUS...`)
  });

client.command({
    name: "members",
    aliases: ["users", "member", "الأعضاء"],
    permissions: ["MANAGE_GUILD"],
    args: [
      {
        id: "test",
        type: "string",
        default: "Test"
      }
    ]
  },
  (msg, args) => {
    Plugins.members(msg)
  })

client.command({
  name: "help",
  aliases: ["help", "مساعدة", "قائمة الأوامر", "commands"]
}, message => {
  message.channel.send(client.user.username + " Help list:\n")
})

client.start();