const { Client } = require('discord.js');

class CodesClient extends Client {
  /**
   *
   * @param {string} token - Yours bot token
   * @param {string} owner - Your/owner id
   * @param {string} prefix - the prefix for this bot
   */
  constructor(token, owner, prefix) {
    super({
      messageCacheMaxSize: 1000,
    });
    // Let command_path = path.commands
    // this.on('message', message => {
    //   if (message.content.indexOf(this.prefix) !== 0) return;
    //   const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
    //   const command = args.shift().toLowerCase();
    //   let c = require((command_path.endsWith("/")) ? command_path + `${command}.js`: command_path + `/${command}.js`)
    //   c.run()
    // })
    this.token = token;
    this.owner = owner;
    this.prefix = prefix;
  }
  /**
   * @param {CommandSettings} [settings = {}] - command settings
   * @param {Function} exec - function to execute!
   */
  command(settings, exec) {
    const {
      name,
      aliases = [],
    } = settings;

    this.on('message', message => {
      if (message.content.indexOf(this.prefix) !== 0) return;
      const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      if (command === name || aliases.includes(command)) {
        exec(message);
      }
    });
  }


  start() {
    return this.login(this.token);
  }
}


module.exports = CodesClient;
