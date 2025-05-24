module.exports = {
    name: 'ban',
    description: 'Ban garee qof',
    async execute(message, args) {
        if (!message.member.permissions.has('BanMembers')) return message.reply('Ma haysid ogolaansho ban!');
        const member = message.mentions.members.first();
        if (!member) return message.reply('Xus qofka aad rabto in aad ban garayso.');
        await member.ban();
        message.channel.send(`**${member.user.tag}** waa la ban-gareeyay.`);
    }
};
