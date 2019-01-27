# Codes.js
A discord.js clone but more simple and have more features.
<div align="center">
<p>
<a href="https://travis-ci.org/codes-server/codes.js"> <img src="https://travis-ci.org/codes-server/codes.js.svg?branch=master" alt="Travis CI" /></a>
</p>
</div>

## Example usage:
```js
const Client = require('codes.js');
const client = new Client(botToken, ['YOUR ID','OTHER ID'], '-');
//new Client(توكن بوتك, ['YOUR ID'], 'بريفكس بوتك')
client.start();
client.on('ready', () => {
  /* eslint-disable no-console */
  console.log(`${client.user.tag} is ready
OWNER: ${client.owner}`);
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
  name: ""
})
client.command({
    name: "members",
    aliases: ["users", "member", "الأعضاء"]
  },
  msg => {
    Plugins.members(msg)
  })

client.command({
  name: "help",
  aliases: ["help", "مساعدة", "قائمة الأوامر", "commands"]
}, message => {
  message.channel.send(client.user.username + " Help list:\n")
})
