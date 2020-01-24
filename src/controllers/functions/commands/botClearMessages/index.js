const {
  isAdmin, deleteMessage, deleteBotsMessages,
} = require('../../index');
const { data } = require('../../../../bot_config');

const botClearMessages = (ctx) => deleteMessage(ctx) && isAdmin(ctx) && deleteBotsMessages({ dataConfig: data.config.botsMessagesIds, ctx });

module.exports = botClearMessages;
