const moment = require('moment');
var dt = new Date();
var hours = dt.getHours();
var AmOrPm = hours >= 12 ? 'pm' : 'am';
hours = (hours % 12) || 12;
var minutes = dt.getMinutes() ;
var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm;
function formatMessage(username, text) {
  return {
    username,
    text,
    time: finalTime
  };
}

module.exports = formatMessage;
