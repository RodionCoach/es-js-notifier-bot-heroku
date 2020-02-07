const { data, setBotConfig } = require('../../../config/bot_config');

const deleteBotsMessages = ({ dataConfig = [], ctx = null, telegram = null }) => {
  if (dataConfig.length === 0 && data.botReply) ctx.reply('there is nothing to delete');
  dataConfig.forEach((item) => {
    if (ctx !== null) {
      ctx.deleteMessage(item)
        .catch((error) => console.info(`Something went wrong by delete bot message with id ${item} - ${error}`));
    } else {
      telegram.deleteMessage(data.config.currentWorkingChatId, item)
        .catch((error) => console.info(`Something went wrong by delete bot message with id ${item} - ${error}`));
    }
  });

  setBotConfig({ propertyName: 'botsMessagesIds', value: [] });
};

module.exports = deleteBotsMessages;
