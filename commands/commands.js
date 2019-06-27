var airhorn    = require('./airhorn.js'),
    anotha     = require('./anotha.js'),
    earlyblaze = require('./earlyblaze.js'),
    ftb        = require('./ftb.js'),
    leave      = require('./leave.js'),
    trap       = require('./trap.js');
module.exports = {
    name: 'commands',
    description: 'lists commands',
    execute(msg){
        msg.reply(`List of commands\n
        **${airhorn.name}** - ${airhorn.description}
        **${earlyblaze.name}** - ${earlyblaze.description}
        **${anotha.name}** - ${anotha.description}
        **${trap.name}** - ${trap.description}
        **${ftb.name}** - ${ftb.description}
        **${leave.name}** - ${leave.description}`);
    },
};