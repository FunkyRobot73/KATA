const talkingCalendar = function(date) {
  // Your code here
  let newDate = [];
  let month = 0;
  let ordinal = "th";
  const months = {
    01: "January",
    02: "February",
    03: "March",
    04: "April",
    05: "May",
    06: "June",
    07: "July",
    08: "August",
    09: "Sept",
    10: "October",
    11: "November",
    12: "December"
  }



newDate = date.split("/");
let day = newDate[2];


if(newDate[2] == 01 || newDate[2] == 21 || newDate[2] == 31) {ordinal = "st"};
if(newDate[2] == 02 || newDate[2] == 22) {ordinal = "nd"};
if(newDate[2] == 03 || newDate[2] == 23) {ordinal = "rd"};

day = day.replace(/^0+/, '');

let x = newDate[1];
month = parseFloat(x);

return (months[month]) + ` ${day}${ordinal}, ${newDate[0]}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/01"));
console.log(talkingCalendar("1973/01/03"));
