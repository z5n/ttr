var fs = require('fs')
var Discord = require("discord.js");
var { logchannel,embledcolor }  = require("../../config.json");
var exec = require('child_process').exec;

module.exports = {
    name: "info",
    aliases: ['help','about'],
    description: "new rule system",
    run: async (client, message, args) => {
    var info = exec(`~/*/scripts/information-final.sh`);

        info.stdout.on('data', (data) => { 
            message.channel.send(reply(`${data}`))
        });
    }
}

function reply(description) {
    return new Discord.MessageEmbed()
        .setColor(embledcolor)
        .setDescription(description)
  }
