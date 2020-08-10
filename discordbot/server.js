const Discord = require('discord.js');
const client  = new Discord.Client();

client.on('ready', function () {
    console.log("Connect as "+ client.user.tag);

    client.user.setActivity("With JavaScript",);

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channle) => {
            console.log(channle.name+" "+ channle.type+" "+ channle.id);
        })
        //General Channlel id : 741976014015692835
    })


    let generalChannel = client.channels.cache.get("741976014015692835");
    const logo = new Discord.MessageAttachment("http://www.ovationtravel.com.au/wp-content/uploads/2017/03/helloworld-logo-horizontal.jpg");
    generalChannel.send(logo);
});


client.on('message', (recivedMessage) => {
    if (recivedMessage.author == client.user) {
        return
    }
    // let author = recivedMessage.author.toString();
    // recivedMessage.channel.send("Message Received: "+author+" "+ recivedMessage.content)





    if(recivedMessage.content.startsWith("!")) {

        processComand(recivedMessage);
    }

})

function processComand(recivedMessage) {
    let fullCommand = recivedMessage.content.substr(1);
    let splitCommand = fullCommand.split(" ");
    let primaryCommand = splitCommand[0];
    let arguments = splitCommand.slice(1);

    if (primaryCommand == "bio") {

        bioCommand(arguments, recivedMessage);
    }

}


function bioCommand(arguments, recivedMessage) {
    if(recivedMessage.content.toString().toLocaleLowerCase() == "!bio molu" || recivedMessage.content.toString().toLocaleLowerCase() == "!bio laraib" ){
            recivedMessage.channel.send( "Molu is a Dumbass");
        } else {
            recivedMessage.channel.send(" he is a great guy");
        }
}

client.login("NzQxOTc2NTU5MDAyMzIwODk2.Xy_ZhA.O7xfJU_BL3baWaY6or9ZvnGxvIA");