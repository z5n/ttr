var fs = require('fs')
var Discord = require("discord.js");
var { logchannel,embledcolor }  = require("../../config.json");
var fetch = require('node-fetch');
module.exports = {
    name: "fish",
    aliases: ['f'],
    description: "get fish",
    run: async (client, message, args) => {
        let id = args.join(" ");
        if (!id)
        return (message.channel.send("please enter a valid id."))
fetch('https://sad.st/api/fish.json')
.then(res => res.json())
.then(data => {
    k = data['fish'][`${id}`]['name']
    k2 = data['fish'][`${id}`]['location']
    k3 = data['fish'][`${id}`]['weight']
    k4 = data['fish'][`${id}`]['value']
    k5 = data['fish'][`${id}`]['type']

    message.channel.send(reply(`**${k}**

Location: **${k2}**
Weight: **${k3}**
jelly value: **${k4}**
type: **${k5}**


`));
});

function reply(description) {
    return new Discord.MessageEmbed()
        .setColor(embledcolor)
        .setDescription(description)
}
    }
}
