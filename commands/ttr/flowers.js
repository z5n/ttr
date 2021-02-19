var fs = require('fs')
var Discord = require("discord.js");
var { logchannel,embledcolor }  = require("../../config.json");
var fetch = require('node-fetch');
module.exports = {
    name: "flowers",
    aliases: ['fl'],
    description: "get flowers",
    run: async (client, message, args) => {
        let id = args.join(" ");
        if (!id)
        return (message.channel.send("please enter a valid id."))
fetch('https://sad.st/api/flowers.json')
.then(res => res.json())
.then(data => {
    k = data['flowers'][`${id}`]['name']
    k2 = data['flowers'][`${id}`]['type']
    k3 = data['flowers'][`${id}`]['level']
    k4 = data['flowers'][`${id}`]['value']
    k5 = data['flowers'][`${id}`]['combo']

    message.channel.send(reply(`**${k}**

Type: **${k2}**
Level: **${k3}**
jelly value: **${k4}**
combo: **${k5}**


`));
});

function reply(description) {
    return new Discord.MessageEmbed()
        .setColor(embledcolor)
        .setDescription(description)
}
    }
}
