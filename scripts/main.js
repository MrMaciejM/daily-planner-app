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
    {0: ""},
    {1: ""},
    {2: ""},
    {3: ""},
    {4: ""},
    {5: ""},
    {6: ""},
    {7: ""},
    {8: ""},
];

// fixes issues if array does not exist / was deleted
if (localStorage.getItem("items") === null) {
  localStorage.setItem("items", JSON.stringify(testArr));
}
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

// save buttons
// prettier-ignore
$(".saveBtnItem").on("click", function(event) {
    //testGet[0][0] = storeInput;
    $(`textarea`).each(function (getIndex) {
        var storeInput = $(`textarea.textarea${getIndex}`).val();
        // gets current string/task
        testGet[getIndex][getIndex] = storeInput;
        localStorage.setItem("items", JSON.stringify(testGet)); 
    })
    
    $(".alert").text("Saved to localStorage!").delay(2000).fadeOut("slow"); 
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
    $(`.textarea${getIndex}`).css("background-color", "#77dd77");
  }
  if (same == true) {
    $(`.textarea${getIndex}`).css("background-color", "#ff6961");
  }
  if (after == true) {
    $(`.textarea${getIndex}`).css("background-color", "#d3d3d3");
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
