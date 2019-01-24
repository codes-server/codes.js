const { Client } = require('discord.js');

class CodesClient extends Client {
  constructor(token, owner, prefix) {
    super({
      messageCacheMaxSize: 1000,
    });
    this.token = token;
    this.owner = owner;
    this.prefix = prefix;
  }
<<<<<<< HEAD
  start() {
    this.login(this.token);
  }
  command(name, settings, cmd) {
    client.on("message", message => {
      if(message.content === prefix + name){
      cmd(message)
=======

  command(name, settings, exec) {
    this.aliases = settings.aliases;
    this.name = name;
    this.on('message', message => {
      if (message.content.indexOf(this.prefix) !== 0) return;
      const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      if (command === this.name || this.aliases.includes(command)) {
        exec(message);
>>>>>>> f2a9906b71eee012efb62420496d93b69c0d7c52
      }
    });
  }


  start() {
    return this.login(this.token);
  }
}


module.exports = CodesClient;
