const { Client } = require('discord.js');
var client = new Client()
class CodesClient extends Client {
  constructor(token, owner, prefix) {
    super({
      messageCacheMaxSize: 1000,
    });
    this.token = token;
    this.owner = owner;
    this.prefix = prefix
  }
  start() {
    this.login(this.token);
  }
  command(name, settings, cmd) {
    client.on("message", message => {
      if(message.content === this.prefix + name){
      cmd(message)
      }
    });
  }
}


module.exports = CodesClient;
