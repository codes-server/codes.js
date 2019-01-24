const { Client } = require('discord.js');

class CodesClient extends Client {
  constructor(token, owner, prefix) {
    super({
      messageCacheMaxSize: 1000,
    });
    // let command_path = path.commands
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

  command(settings, exec) {
    let aliases = settings.aliases
    let name = settings.name
    let perm = settings.permissions;
    let roles = settings.roles;

    if(!name) return;
    if(!aliases) aliases = []
    if(!perm) perm = []
    if(!roles) roles = []
    this.on('message', message => {
      if (message.content.indexOf(this.prefix) !== 0) return;
      const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      if (command === name || aliases.includes(command)) {
        exec(message);
      }
    });
    return undefined;
  }


  start() {
    return this.login(this.token);
  }
}


module.exports = CodesClient;
