const { TOKEN } = require('./auth');
const { Client } = require('../src/index');
const client = new Client(TOKEN, '171259176029257728');
client.start();
client.on('ready', () => {
/* eslint-disable no-console */
  console.log('ready');
  console.log(client.owner);
});
client.command("ping", {aliases: ["pings", "pong"]}, function cmd(message) {
  message.channel.send("PONG!")
})