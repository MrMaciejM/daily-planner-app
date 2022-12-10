//<p id="currentDay" class="lead"></p>
var currentDay = document.getElementById("currentDay");
var currentTime = moment().format("dddd DD MMM YYYY");

// container for timeslots
var container = document.getElementsByClassName("container");
// prettier-ignore
var workHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm","3pm", "4pm", "5pm"];

// display current day on the app
$((currentDay.innerText = currentTime));

//<div class="container">
//var container = document.getElementsByClassName("container");
// calendar timeslots 9am-5pm
$(workHours).each(function (hour) {
  //
  $(container).append(
    `<div class="timeslot-div"><p class="pHour p${hour}">${workHours[hour]}</p><textarea class="textarea${hour}"></textarea><button class="saveBtnItem">Save</button></div>`
  );
  console.log(hour);
});

//console.log(currentTime);
//console.log(moment.calendar());

// changes/commits:
/*
- added text-center to jumbotron
- added timeslots, and roughly positioned the elements
*/
