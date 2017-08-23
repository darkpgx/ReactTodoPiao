//Demo on how moment.js works and unix timestamp
var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0 in unix timestamp
// January 1st 1970 @ 12:01am -> 60 each second is add 1 to unix timestamp

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1503454261;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));

//August 22nd, 2017 @ 7:11 PM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
