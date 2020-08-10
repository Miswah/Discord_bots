const Discord = require('discord.js');
const client  = new Discord.Client();

client.on('ready', function () {
    console.log("Connect as "+ client.user.tag);

    client.user.setActivity("With JavaScript",);

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channel) => {
            console.log(channel.name+" "+ channel.type+" "+ channel.id);
        })
        //General channel id : 741976014015692835
    })


    let generalChannel = client.channels.cache.get("741976014015692835");
    const logo = new Discord.MessageAttachment("http://www.ovationtravel.com.au/wp-content/uploads/2017/03/helloworld-logo-horizontal.jpg");
    generalChannel.send(logo);
});


client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }


    else {
        split(receivedMessage.toString());
    }
})


function split (receivedMessage) {
    let splitCommand = receivedMessage.split(" ");
    let generalChannel = client.channels.cache.get("706906132953956425");
    for (let i = 0; i <splitCommand.length; i++) {
        if (splitCommand[i].toString().toLocaleLowerCase() == "molu" || splitCommand[i].toString().toLocaleLowerCase() == "laraib") {
        generalChannel.send(splitCommand[i].toString() +" is a dumbass");
    }
}
}


client.login(put tokken here);