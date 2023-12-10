import { REST,Routes,ClientUser} from 'discord.js';
import { Client, GatewayIntentBits } from 'discord.js';
import { decriptCommand, encriptCommand } from './commands/commands';
import { encriptDataWithCryptoJs } from './functions/encriptDataWithCryptojs';
import { decriptDataWithCryptoJs } from './functions/decriptDataWithCryptoJs';
import  dotenv from "dotenv";
dotenv.config();
export const commands = [
    encriptCommand.toJSON(),
    decriptCommand.toJSON(),
];
const TOKEN = process.env.TOKEN as string;
const CLIENT_ID = process.env.CLIENT_ID as string;
const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
] });
const registerCommand = async()=>{
    const rest = new REST({ version: '10' }).setToken(TOKEN);
    try {
      console.log('Started refreshing application (/) commands.');
      await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
}
const startBot = async()=>{    
    client.on('ready', async() => {
        await registerCommand();
        const clientUser = client.user as  ClientUser;
        console.log(`Logged in as ${clientUser.tag}!`);
      });
      client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === "encript" ) {
            const sendSecretKey = interaction.options.getString('secretkey');
            const sendData = interaction.options.getString('data');
            const sendSecretKeyString = sendSecretKey as string;
            const sendDataString = sendData as string; 
            const encriptData = await encriptDataWithCryptoJs(sendSecretKeyString,sendDataString);
            await interaction.reply(encriptData);
        };
        if (interaction.commandName === "decript" ) {
            const sendSecretKey = interaction.options.getString('secretkey');
            const sendData = interaction.options.getString('data');
            const sendSecretKeyString = sendSecretKey as string;
            const sendDataString = sendData as string; 
            const encriptData = await decriptDataWithCryptoJs(sendSecretKeyString,sendDataString);
            await interaction.reply(encriptData);
        };
      });
      client.login(TOKEN);
}
startBot();

