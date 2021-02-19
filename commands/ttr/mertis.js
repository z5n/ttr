var Discord = require("discord.js");
var exec = require('child_process').exec;
var Discord = require('discord.js');
var { logchannel,embledcolor }  = require("../../config.json");

module.exports = {
    name: "mertis",
    aliases: ['m'],
    description: "i",
    run: async (client, message, args) => {
        let id = args.join(" ");
    var myShellScript = exec(`~/ttr/scripts/mertis.sh ${id}`);
    myShellScript.stdout.on('data', (data) => { 
        message.channel.send(embled(`${data}`))
    });

    myShellScript.stderr.on('data', (data) => {
        console.error(data);
    });

}
}
function embled(description) {
    return new Discord.MessageEmbed()
        .setColor(embledcolor)
        .setDescription(description)
  }
