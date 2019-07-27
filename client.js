var Discord          = require('discord.js'),
    client           = new Discord.Client(),
    fs               = require('fs'),
    { prefix,token } = require('./config.json'),
    cron             = require('node-cron'),
    talkedRecently   = new Set();

client.commands = new Discord.Collection();
var commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (var file of commandFiles) {
    var command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    client.user.setActivity('~commands || SNOOP DOGG - SMOKE WEED EVERYDAY', {type: 'LISTENING'});
    console.log(`Logged in as ${client.user.tag} !`);

    var voiceChannel = client.channels.get('489838454016966662'); //REPLACE WITH DESIRED VOICE CHANNEL
    var textChannel  = client.channels.get('489838454016966660'); //REPLACE WITH DESIRED TEXT CHANNEL

    var imgArray   = ['https://imgur.com/gallery/KMchKkx','https://i.imgur.com/go6uGV7.jpg','https://imgur.com/gallery/8nC6LVu','https://i.imgur.com/U6h7fI5.jpg'];
    var textArray  = ['**ITS FOUR TWENTY MY DUDE**', '**DUDE WEED LMAO**', '**HEY FAM GUESS WHAT TIME IT IS? **', '**WANNA BUY MY ESSENTIAL OILS?**'];

    var soundFiles = {
        weedCirculation: "sounds/WeedCirculation.mp3",
        blendW: "sounds/BlendW.mp3",
        nichiJoint: "sounds/Nichijoint.mp3"
    };
    var fileValues = Object.values(soundFiles);
    var value  = fileValues[Math.floor(Math.random() * fileValues.length)];
    console.log(value);

    var fourTwentyMsg = function fourTwentyMsg(){
        textChannel.send(imgArray[Math.floor(Math.random() * imgArray.length)]);
        textChannel.send(textArray[Math.floor(Math.random() * textArray.length)]);
    };
	
    cron.schedule("00 20 4 * * *", () => {
        voiceChannel.join()
        .then(connection => {
            var dispatcher = connection.playFile(value);
            dispatcher.on('end', function(){
                voiceChannel.leave();
            });
            dispatcher.on('error', function(e){
                console.log(e);
            });
        })
        .catch(console.error);
        fourTwentyMsg();
    });

    cron.schedule("00 20 16 * * *", () => {
        voiceChannel.join()
        .then(connection => {
            var dispatcher = connection.playFile(value);
            dispatcher.on('end', function(){
                voiceChannel.leave();
            });
            dispatcher.on('error', function(e){
                console.log(e);
            });
        })
        .catch(console.error);
        fourTwentyMsg();
    });
});

client.on('message', (msg) => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    var args = msg.content.slice(prefix.length).split(/ +/);
	var command = args.shift().toLowerCase();                                                                                  
    if (!client.commands.has(command)) return;

    if (talkedRecently.has(msg.author.id)) {
        msg.channel.send("Cooldown 2.5 seconds");
        msg.delete();
        return;
      }
    
      talkedRecently.add(msg.author.id);
      setTimeout(() => {
        talkedRecently.delete(msg.author.id);
      }, 2500);

    try {
        client.commands.get(command).execute(msg, args);
    } catch (err) {
        console.error(err);
        msg.reply('Try again!');
    }
});

client.login(token);
