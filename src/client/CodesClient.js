const { Client } = require('discord.js');

class CodesClient extends Client {
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

  command(settings, exec) {
<<<<<<< HEAD
    let aliases = settings.aliases
    let name = settings.name
    let perm = settings.permissions;
    let roles = settings.roles;

    if(!name) return;
    if(!aliases) aliases = []
    if(!perm) perm = []
    if(!roles) roles = []
=======
    this.settings = settings;
    let aliases = this.settings.aliases || [];
    let name = this.settings.name;
    if (!name || !exec) return;

>>>>>>> 4e90daa7516f19b744b7f18fc00f8f65c4f53367
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
