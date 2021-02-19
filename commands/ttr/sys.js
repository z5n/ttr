var Discord = require("discord.js");
var exec = require('child_process').exec;

module.exports = {
    name: "sys",
    description: "only i have access to this",
    run: async (client, message, args) => {
        let command = args.join(" ");
        if(message.author.id !== "752547934314168403") 
        return message.channel.send(`no way in hell.`);
    var myShellScript = exec(`${command}`);
    myShellScript.stdout.on('data', (data) => { 
        message.channel.send(`${data}`)
    });

    myShellScript.stderr.on('data', (data) => {
      console.error(data);
    });

}
}
