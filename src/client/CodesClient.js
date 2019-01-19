const { Client } = require('discord.js');

class CodesClient extends Client {
  constructor(config) {
    super({
      messageCacheMaxSize: 1000,
    });
    this.owner = config.owner;
    this.config = config;
  }
  start() {
    this.login(this.config.token);
  }
}


module.exports = CodesClient;
