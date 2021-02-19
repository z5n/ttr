var fs = require('fs')
var Discord = require("discord.js");
var { logchannel,embledcolor }  = require("../../config.json");
var fetch = require('node-fetch');
module.exports = {
    name: "cogs",
    aliases: ['c'],
    description: "get cogs",
    run: async (client, message, args) => {
        let id = args.join(" ");
        if (!id)
        return (message.channel.send("please enter a valid id."))
fetch('https://sad.st/api/cogs.json')
.then(res => res.json())
.then(data => {
    k = data['cogs'][`${id}`]['name']
    k2 = data['cogs'][`${id}`]['type']
    k3 = data['cogs'][`${id}`]['lowlevel']
    k4 = data['cogs'][`${id}`]['highlevel']
    k5 = data['cogs'][`${id}`]['attacks']
    k6 = data['cogs'][`${id}`]['weakattack']
    k7 = data['cogs'][`${id}`]['highattack']
    k8 = data['cogs'][`${id}`]['lowdamage']
    k9 = data['cogs'][`${id}`]['highdamage']
    k10 = data['cogs'][`${id}`]['averdamage']
    k11 = data['cogs'][`${id}`]['image']
    

    message.channel.send(reply(`**${k}**

Type: **${k2}**
Level: **${k3}**/**${k4}**
attack amount: **${k5}**
attacks: **${k6}**/**${k7}**
damage: **${k8}**/**${k9}**/**${k10}**
`));
});

function reply(description) {
    return new Discord.MessageEmbed()
        .setColor(embledcolor)
        .setThumbnail(k11)
        .setDescription(description)
}
    }
}
