//<p id="currentDay" class="lead"></p>
var currentDay = moment().format("dddd DD MMM YYYY");

// prettier-ignore
var workHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm","3pm", "4pm", "5pm"];
var timeSlots = document.querySelectorAll(".timeslot-div");

// display current day on the app
$("#currentDay").text(currentDay);
//<div class="container">
//var container = document.getElementsByClassName("container");
// calendar timeslots 9am-5pm
$(workHours).each(function (hour) {
  //
  $(".container").append(
    `<div class="timeslot-div"><p class="pHour p${hour}">${workHours[hour]}</p><textarea class="textarea${hour}"></textarea><button id="myBtn${hour}" class="saveBtnItem">Save</button></div>`
  );
  //console.log(hour);
});

// localStorage DUMMY DATA
// prettier-ignore
var testArr = [
    {0: "string task 1"},
    {1: "string task 2"},
    {2: "string task 3"},
    {3: "string task 4"},
    {4: "string task 5"},
    {5: "string task 6"},
    {6: "string task 7"},
    {7: "string task 8"},
    {8: "string task 9"},
];
//localStorage.setItem("items", JSON.stringify(testArr));

/*
localStorage.setItem("items", JSON.stringify(testArr));
var testGet = JSON.parse(localStorage.getItem("items"));
console.log(testGet);
*/

// retrieve data from the array and display on textarea
var getIndex = 0;
var testGet = JSON.parse(localStorage.getItem("items"));
//console.log(testArr);
$(`textarea`).each(function (getIndex) {
  $(`textarea.textarea${getIndex}`).val(testGet[getIndex][getIndex]);
});

// add event listeners to save buttons and
// save items to localStorage
// var saveItem = localStorage.setItem("items", JSON.stringify(testArr));
//localStorage.setItem("items", JSON.stringify(testArr));
//console.log(testArr);
//console.log(testGet);
// prettier-ignore
$(".saveBtnItem").on("click", function(event) {
    //testGet[0][0] = storeInput;
    //console.log(testGet[0][0]);
    // get entire array, then update the value, then push to save
    $(`textarea`).each(function (getIndex) {
        var storeInput = $(`textarea.textarea${getIndex}`).val();
        // gets current string/task
        testGet[getIndex][getIndex] = storeInput;
        localStorage.setItem("items", JSON.stringify(testGet)); 
    })
    //console.log(testArr); 
 
});

// create logic past, present and future items, then apply correct color to the textarea
// past = grey, present = red, future = green;
//console.log(workHours);
// retrieve the time from <p> time tags - try string format first
$(".pHour").each(function (getIndex) {
  //var currentTime = moment().format("ha");
  var currentTime = moment().format("ha");
  var slotTime = $(`.p${getIndex}`).text();
  //console.log(currentTime);
  //var startOfTime = moment().hours(9).add(getIndex, "hour").format("ha");
  var startOfTime = moment().hours(9).add(getIndex, "hour");
  var before = moment().isBefore(startOfTime);
  var same = moment().isSame(startOfTime);
  var after = moment().isAfter(startOfTime);
  if (before == true) {
    $(`.textarea${getIndex}`).css("background-color", "lime");
  }
  if (same == true) {
    $(`.textarea${getIndex}`).css("background-color", "red");
  }
  if (after == true) {
    $(`.textarea${getIndex}`).css("background-color", "gray");
  }

  //console.log(moment().isBefore(startOfTime));

  //$("textarea").css("background-color", "grey");
  //console.log(moment().isBefore("5pm", "ha"));
  //console.log(startOfTime);
  //console.log(startOfTime);
  //console.log(moment().format("ha"));
  //console.log(moment("ha").isBefore("4pm"));
  // $(".pHour").css("background-color", "red");
});
//   console.log(currentTime);
//   console.log($(".pHour").text());
//   if (currentTime === $(".pHour").text()) {
//     $(".pHour").css("background-color", "blue");
//   }
//   //console.log(currentTime);
//   console.log(pHourVal);
// });

//fixDummyData();
//$(".textarea0").get(testArr.keys("9am")).append();
// .css("background-color", "aqua")

// store items in the localStorage

//console.log(currentTime);
//console.log(moment.calendar());

/* example of storing and retrieving items from localStorage
var arr = [
    {number: 1, string: 'string'},
    {number: 2, string: 'second string'}
]
localStorage.setItem('test', JSON.string(arr))
var test = localStorage.getItem('test');
*/

// changes/commits:
/*
- added text-center to jumbotron
- added timeslots, and roughly positioned the elements
*/
