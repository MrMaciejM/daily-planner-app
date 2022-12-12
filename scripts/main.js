var currentDay = moment().format("dddd DD MMM YYYY");
var getIndex = 0;
// prettier-ignore
var workHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm","3pm", "4pm", "5pm"];

// display current day on the app, e.g. "Monday 12 Dec 2022"
$("#currentDay").text(currentDay);

// planner timeslots 9am-5pm
$(workHours).each(function (hour) {
  // the hour parameter acts as an index that is incremented by 1 by the each() function.
  // below append creates a div and adds <p>, <textarea> and <button> elements for the work hours. It also sets its classes and ids dynamically with jQuery.
  $(".container").append(
    `<div class="timeslot-div"><p class="pHour p${hour}">${workHours[hour]}</p><textarea class="textarea${hour}"></textarea><button id="myBtn${hour}" class="saveBtnItem">Save</button></div>`
  );
});

// sets localStorage to correctly receive planner values - this is essential for storing and retrieving items
// prettier-ignore
var storageArr = [
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

// fixes issues if localStorage keys and values does not exist / were deleted
if (localStorage.getItem("items") === null) {
  localStorage.setItem("items", JSON.stringify(storageArr));
}

// retrieve data from the array and display on textarea
var getItems = JSON.parse(localStorage.getItem("items"));
$(`textarea`).each(function (getIndex) {
  $(`textarea.textarea${getIndex}`).val(getItems[getIndex][getIndex]);
});

// all save buttons
// prettier-ignore
$(".saveBtnItem").on("click", function() {
    $(`textarea`).each(function (getIndex) {
        // gets all tasks, if no tasks then empty string
        var storeInput = $(`textarea.textarea${getIndex}`).val();
        // sets textarea items to storeInput
        getItems[getIndex][getIndex] = storeInput;
        // stores items in localStorage
        localStorage.setItem("items", JSON.stringify(getItems)); 
    })
    // creates alert upon save then disappears after 2 seconds
    $(".alert").text("Saved to localStorage!").delay(2000).fadeOut("slow"); 
});

$(".pHour").each(function (getIndex) {
  // .hours(9) starts the time at 9am, then with getIndex, adds extra hour until 5pm, thus creating our 9am-5pm timeslot
  var startOfTime = moment().hours(9).add(getIndex, "hour");

  // checks whether current time is before/same/after 9am-5pm slots
  var before = moment().isBefore(startOfTime);
  var same = moment().isSame(startOfTime);
  var after = moment().isAfter(startOfTime);

  // depending on time, background of textarea will change:
  // red = same, gray = before, green = after/future
  if (before == true) {
    $(`.textarea${getIndex}`).css("background-color", "#77dd77");
  }
  if (same == true) {
    $(`.textarea${getIndex}`).css("background-color", "#ff6961");
  }
  if (after == true) {
    $(`.textarea${getIndex}`).css("background-color", "#d3d3d3");
  }

  // PERSONAL NOTE: DO NOT FORMAT moment().format("ha") time, otherwise comparisons will NOT work.
});

/* example of storing and retrieving items from localStorage
var arr = [
    {number: 1, string: 'string'},
    {number: 2, string: 'second string'}
]
localStorage.setItem('test', JSON.string(arr))
var test = localStorage.getItem('test');
*/
