const { Client } = require('discord.js');

class CodesClient extends Client {
  constructor(token, owner) {
    super({
      messageCacheMaxSize: 1000,
    });
    this.token = token;
    this.owner = owner;
  }
  start() {
    this.login(this.token);
  }
  command(name, settings, cmd) {
    client.on("message", message => {
      if(message.content === prefix + name){
      cmd(message)
      }
    });
  }
}


module.exports = CodesClient;
