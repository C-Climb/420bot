module.exports = {
    name:'airhorn',
    description: 'Plays an airhorn in vc',
    execute(msg){
        if(msg.member.voiceChannel){
            msg.member.voiceChannel.join().then(
                connection => {
                    var dispatcher = connection.playFile("./sounds/airhorn.mp3");
                    dispatcher.on('end', function(){
                        msg.member.voiceChannel.leave();
                    });
                }
            ) .catch(console.log);
        } else {
            msg.reply('Try again idiot');
        }
    },
};