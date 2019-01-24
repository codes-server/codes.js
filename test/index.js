const { TOKEN } = require('./auth');
const { Client, Plugins } = require('../src/index');
const client = new Client(TOKEN, '171259176029257728', '-');
client.start();
client.on('ready', () => {
/* eslint-disable no-console */
  console.log('ready');
  console.log(client.owner);
  console.log(client.user.tag);
});
client.command({name: "ping", aliases: ['kpop', 'brok', 'pings', 'pong'] }, message => {
  message.channel.send('PONG!');
});
client.command({name: "members", aliases: ["users", "member"]}, msg => {
Plugins.members(msg)
})
client.command({name: "help", cooldown: 2}, message => {
  message.channel.send("Send")
})
