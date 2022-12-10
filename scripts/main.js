//<p id="currentDay" class="lead"></p>
var currentDay = document.getElementById("currentDay");
var currentTime = moment().format("dddd DD MMM YYYY");
var workHours = 9;

// display current day on the app
$((currentDay.innerText = currentTime));

//<div class="container">
// calendar timeslots 9am-5pm

for (var i = 0; i < workHours; i++) {}

console.log(currentTime);
//console.log(moment.calendar());

// changes/commits:
/*
- added text-center to jumbotron
*/
