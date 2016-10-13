// moment.js library http://momentjs.com/docs/#/displaying/

var moment = require('moment');

console.log(moment().format());

// Storing unix timestamps - single number of seconds since the unix epoch
// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @12:01am -> 60

var now = moment();
console.log('Current timestamp ' + now.unix());

var timestamp = 1459111648;
var currentMoment = moment.unix(timestamp);
console.log('Current moment ' + currentMoment.format());
console.log('Current moment ' + currentMoment.format('MMM'));
console.log('Current moment ' + currentMoment.format('MMM D, YY @ h:mm a'));
console.log('Current moment ' + currentMoment.format('MMMM Do, YYYY @ h:mm A'));
