var fetch = require('node-fetch');
var Discord = require('discord.js');
var { logchannel,embledcolor }  = require("../../config.json");

module.exports = {
    name: "p",
    aliases: ['population'],
    description: "get moshi status",
    run: async (client, message, args) => {
fetch('https://www.toontownrewritten.com/api/population')
  .then(response => response.json())
  .then(data => {
    total = data['totalPopulation']
    hills = data['populationByDistrict']['Hiccup Hills']
    hills1 = data['populationByDistrict']['Bounceboro']
    hills2 = data['populationByDistrict']['Whoosh Rapids']
    hills3 = data['populationByDistrict']['Splashport']
    hills4 = data['populationByDistrict']['Thwackville']
    hills5 = data['populationByDistrict']['Gulp Gulch']
    hills6 = data['populationByDistrict']['Kaboom Cliffs']
    hills7 = data['populationByDistrict']['Fizzlefield']
    hills8 = data['populationByDistrict']['Boingbury']
    hills9 = data['populationByDistrict']['Blam Canyon']
    hills10 = data['populationByDistrict']['Splat Summit']
    hills11 = data['populationByDistrict']['Zoink Falls']

message.channel.send(embled(`Total Population: **${total}**\n\nHiccup Hills: **${hills}**\nBounceboro: **${hills1}**
Whoosh Rapids: **${hills2}**
Splashport: **${hills3}**
Thwackville: **${hills4}**
Gulp Gulch: **${hills5}**
Kaboom Cliffs: **${hills6}**
Fizzlefield: **${hills7}**
Boingbury: **${hills8}**
Blam Canyon: **${hills9}**
Splat Summit: **${hills10}**
Zoink Falls: **${hills11}**`));
});
    function embled(description) {
      return new Discord.MessageEmbed()
          .setColor(embledcolor)
          .setDescription(description)
    }
  }
}
