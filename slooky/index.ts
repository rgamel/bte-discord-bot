import Discord from 'discord.js';
import { config } from './config';
import { handleOnMessage } from './events';


export const client = new Discord.Client();

client.on("message", handleOnMessage);

client.login(config.BOT_TOKEN);