var Discord       = require('Discord.js');
client            = new Discord.Client();
module.exports = {
    name: 'leave',
    description: 'Leaves VC',
    execute(msg){
        if(msg.member.voiceChannel){
            if(!msg.guild) return;
            msg.member.voiceChannel.leave();
            msg.reply(`Pomf left the channel!`);
        } else {
            msg.reply('You need to be in a voice channel first.');
        }
    },
};