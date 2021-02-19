var Discord = require("discord.js");
var exec = require('child_process').exec;
var Discord = require('discord.js');
var { logchannel,embledcolor }  = require("../../config.json");

module.exports = {
    name: "invasion",
    aliases: ['i'],
    description: "i",
    run: async (client, message, args) => {
    var myShellScript = exec(`curl -Ls https://www.toontownrewritten.com/api/invasions | jq '.invasions' | tr -s " " | tr -d '":{},'`);
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
