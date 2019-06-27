module.exports = {
    name:'earlyblaze',
    description: 'Simulates scheduled 420 celebration',
    execute(msg){
        var imgArray   = ['https://imgur.com/gallery/KMchKkx','https://i.imgur.com/go6uGV7.jpg','https://imgur.com/gallery/8nC6LVu','https://i.imgur.com/U6h7fI5.jpg'];
        var textArray  = ['**ITS FOUR TWENTY MY DUDE**', '**DUDE WEED LMAO**', '**HEY FAM GUESS WHAT TIME IT IS? **', '**WANNA BUY MY ESSENTIAL OILS?**'];
        // Get values from someFiles obj and then gets random value to use in dispatcher variable
        var soundFiles = {
            weedCirculation: "sounds/WeedCirculation.mp3",
            blendW: "sounds/BlendW.mp3",
            nichiJoint: "sounds/Nichijoint.mp3"
        };
        var fileValues = Object.values(soundFiles);
        var value  = fileValues[Math.floor(Math.random() * fileValues.length)];

        if(msg.member.voiceChannel){
            msg.member.voiceChannel.join().then(
                connection => {
                    var dispatcher = connection.playFile(value);
                    dispatcher.on('end', function(){
                        msg.member.voiceChannel.leave();
                    });
                }
            ) .catch(console.log);
        } else {
            msg.reply('Try again idiot');
        }

        msg.reply(imgArray[Math.floor(Math.random() * imgArray.length)]);
        msg.reply(textArray[Math.floor(Math.random() * textArray.length)]);
    },
};