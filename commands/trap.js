module.exports = {
    name:'trap',
    description: 'REAL TRAP SHIT',
    execute(msg){
        if(msg.member.voiceChannel){
            msg.member.voiceChannel.join().then(
                connection => {
                    var dispatcher = connection.playFile("./sounds/trap.mp3");
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