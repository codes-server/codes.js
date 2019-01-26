import { Client } from 'discord.js';

declare module 'codes.js' {

    export const version: string

    // Classes

    export class CodesClient extends Client {
        constructor(token: string, owner: string, prefix: string)
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

}