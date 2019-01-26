declare module 'codes.js' {
    import { Client, Snowflake } from 'discord.js';

    // Classes

    export class CodesClient extends Client {
        constructor(token: string, owner: Snowflake | Snowflake[], prefix: string)
        public command(settings: CommandSettings, exec: Function): null
        public start():Promise<string>
    }

    type CommandSettings = {
        name: string,
        aliases: string | string[],
        permissions: string[],
        roles: string[],
        ownerOnly: boolean
    }
    
    export const version: string;

}