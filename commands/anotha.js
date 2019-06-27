module.exports = {
    name:'anotha',
    description: 'Plays extremely loud airhorn',
    execute(msg){
        if(msg.member.voiceChannel){
            msg.member.voiceChannel.join().then(
                connection => {
                    var dispatcher = connection.playFile("./sounds/airhorn2.mp3");
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