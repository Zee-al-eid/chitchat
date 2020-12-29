function formatMessage(username, text) {
  return {
    username,
    text,
    time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  };
}

module.exports = formatMessage;
