const { Client } = require('discord.js');
var client = new Client();
class CodesClient extends Client {
  constructor(token, owner, prefix) {
    super({
      messageCacheMaxSize: 1000,
    });
    this.token = token;
    this.owner = owner;
    this.prefix = prefix;
  }
  start() {
    client.login(this.token);
    this.login(this.token);
  }
  command(name, settings, exec) {
    let aliases = settings.aliases;
    for (const i in aliases) {
      aliases[i] = this.prefix + aliases[i];
    }
    client.on('message', message => {
      if (message.content === this.prefix + name || aliases.includes(message.content)) {
        exec(message);
      }
    });
  }
}


module.exports = CodesClient;
