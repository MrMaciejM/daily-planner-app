//<p id="currentDay" class="lead"></p>
var currentTime = moment().format("dddd DD MMM YYYY");

// prettier-ignore
var workHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm","3pm", "4pm", "5pm"];
var timeSlots = document.querySelectorAll(".timeslot-div");

// display current day on the app
$("#currentDay").text(currentTime);

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
localStorage.setItem("test", JSON.stringify(testArr));
var testGet = JSON.parse(localStorage.getItem("test"));
console.log(testGet);

// retrieve data from the array and display on textarea
var getIndex = 0;
console.log(testArr);
$(`textarea`).each(function (getIndex) {
  $(`textarea.textarea${getIndex}`).val(testGet[getIndex][getIndex]);
});

// add event listeners to save buttons
// prettier-ignore
$(".saveBtnItem").on("click", function(event) {
    //console.log("btn clicked")
    var textareaValue = $("textarea").val();
    console.log(textareaValue); 

    // resets textarea 
    $("textarea").val("")
});

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
