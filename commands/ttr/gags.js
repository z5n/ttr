var fs = require('fs')
var Discord = require("discord.js");
var { logchannel,embledcolor }  = require("../../config.json");
var fetch = require('node-fetch');
module.exports = {
    name: "gags",
    aliases: ['g'],
    description: "get gags",
    run: async (client, message, args) => {
        let id = args.join(" ");
        if (!id)
        return (message.channel.send("please enter a valid id."))
fetch('https://sad.st/api/gags.json')
.then(res => res.json())
.then(data => {
    k = data['gags'][`${id}`]['name']
    k2 = data['gags'][`${id}`]['level']
    k3 = data['gags'][`${id}`]['accuracy']
    k4 = data['gags'][`${id}`]['affects']
    k5 = data['gags'][`${id}`]['roundsLured']
    k6 = data['gags'][`${id}`]['orgBoost']
    k7 = data['gags'][`${id}`]['carry']
    k8 = data['gags'][`${id}`]['expNeeded']
    k9 = data['gags'][`${id}`]['type']
    k10 = data['gags'][`${id}`]['heal']
    k11 = data['gags'][`${id}`]['orgHeal']
    k12 = data['gags'][`${id}`]['damage']
    k13 = data['gags'][`${id}`]['orgDamage']
    

    message.channel.send(reply(`**${k}**

Level: **${k2}**
Accuracy: **${k3}**
Heal: **${k10}**
orgHeal: **${k11}**
Damage: **${k12}**
orgDamage: **${k13}**
Affects: **${k4}**
Rounds Lured: **${k5}**
orgBoost: **${k6}**
Carry: **${k7}**
EXP Needed: **${k8}**
type: **${k9}**
`));
});

function reply(description) {
    return new Discord.MessageEmbed()
        .setColor(embledcolor)
        .setDescription(description)
}
    }
}
