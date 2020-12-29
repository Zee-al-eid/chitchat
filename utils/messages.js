const moment = require('moment');
var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
function formatMessage(username, text) {
  return {
    username,
    text,
    time: datetime
  };
}

module.exports = formatMessage;
