import { SlashCommandBuilder } from "discord.js";

export const encriptCommand = new SlashCommandBuilder()
.setName('encript')
.setDescription('Comando para encriptar dados')
.addStringOption(option => 
    option.setName('secretkey')
        .setDescription('Chave secreta para encriptação')
        .setRequired(true))
.addStringOption(option => 
    option.setName('data')
        .setDescription('Dados para serem encriptados')
        .setRequired(true));
export const decriptCommand = new SlashCommandBuilder()
  .setName('decript')
  .setDescription('Comando para descriptar dados')
  .addStringOption(option => 
      option.setName('secretkey')
        .setDescription('Chave secreta para decriptação')
        .setRequired(true))
        .addStringOption(option => 
      option.setName('data')
        .setDescription('Dados para serem decriptados')
        .setRequired(true));
