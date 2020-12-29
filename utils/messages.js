const moment = require('moment');
var currentdate = new Date();
var datetime = currentdate.getHours() + ":" 
+ currentdate.getMinutes() + " @ " 
+ currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear();
function formatMessage(username, text) {
  return {
    username,
    text,
    time: datetime
  };
}

module.exports = formatMessage;
