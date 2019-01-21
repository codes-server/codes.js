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

  command(name, settings, exec) {
    this.aliases = settings.aliases;
    this.name = name;
    this.on('message', message => {
      if (message.content.indexOf(this.prefix) !== 0) return;
      const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      if (command === this.name || this.aliases.includes(command)) {
        exec(message);
      }
    });
  }


  start() {
    return this.login(this.token);
  }
}


module.exports = CodesClient;
