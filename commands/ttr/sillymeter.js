var fetch = require('node-fetch');
var Discord = require('discord.js');
var { logchannel,embledcolor }  = require("../../config.json");

module.exports = {
    name: "silly",
    aliases: ['sillymeter','s'],
    description: "get sillymeter",
    run: async (client, message, args) => {
fetch('https://www.toontownrewritten.com/api/sillymeter')
  .then(response => response.json())
  .then(data => {
    rd1 = data['rewards']['0']
    rd2 = data['rewards']['1']
    rd3 = data['rewards']['2']
    rdd1 = data['rewardDescriptions']['0']
    rdd2 = data['rewardDescriptions']['1']
    rdd3 = data['rewardDescriptions']['2']
    r1 = data['rewardPoints']['0']
    r2 = data['rewardPoints']['1']
    r3 = data['rewardPoints']['2']
    state = data['state']
    hp = data['hp']
    winner = data['winner']

message.channel.send(embled(`
Reward 1: **${rd1}** points: **${r1}**
**${rdd1}**

Reward 2: **${rd2}** points: **${r2}** 
**${rdd2}**

Reward 3: **${rd3}** points: **${r3}**
**${rdd3}**

Winner: **${winner}**
State: **${state}**
Health Points: **${hp}**
`));
});
    function embled(description) {
      return new Discord.MessageEmbed()
          .setColor(embledcolor)
          .setDescription(description)
    }
  }
}
