// 1. Show the current date at the top

var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(todayDate); // Add it to the `currentDay` element

// 2. Colour code each block based on the current time
//      Create variables to target each time block

// SaveBtn event click listener  - set two variables: one for time and one for description
$(".saveBtn").click(function () {
  var time = $(this).parent().attr("id"); // use this(selector) to call the parent object and attribute of relevant hour id
  var description = $(this).siblings(".description").val(); //calls the sibling of the parent object and as its an input tet the val is set to ().

  // use localStorage.setItem(values to be saved) to save into local storage
  localStorage.setItem(time, description);
});

// In the html add the data-hour which represent which hour each element is
// Create variable for moment().format(H) (0 - 23) e.g. thisHour
function time() {
  var timeNow = moment().format(H)(0 - 23);
}

//Loop over time-blocks
$(".time-block").each(function () {
  // use the for each jquery function and use "time-block" as the target ID
  var timeblock = parseInt($(this).attr("id").split("hour")[1]); // takes the full string attrbuted to hour ID (Hour, description) and splits it and takes the second element from the array (description)

  if (timeblock < timeNow) {
    //if current time is past the time block then time block is in the past (gray)
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
  } else if (timeblock === timeNow) {
    //timeblock matches current time then in the present (red)
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
  } else {
    $(this).removeClass("past"); // if current time hasn't reached the time block then the time block is in the future (green)
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});
var timeNow = moment().format(H)(0 - 23);
//      timeblocks = $('.timeblock')
//      timeblocks.each(function() {
//          var hour = $(this).attr('data-hour');
//          if (hour < thisHour) {
//              this.css('background-color', pastColour)
//          } else if (hour == thisHour) {
//              this.css('background-color', presentColour)
//          } else {
//              this.css('background-color', futureColour)
//          }
//      })
// 3. Save input to local storage
//      create variable (an array) called inputs that will store all of the input data

//      Add event listener to all save button
//          Add event.preventDefault inside the click event listener
//          Push the input value to inputs array with the format of { time: xx, input: xxx }
//              Get the input value
//              Get the hour value
//              Push to the inputs array if the hour entry not exist yet in the array
//              Replace the existing entry if the hour entry exist in the array
//          Save inputs variable to local storage
//              Stringify the inputs array
//          Show feedback message to the user (optional)
//          The feedback need to be dissappeared automatically
//
//      Example of inputs array format
//      var inputs = [{
//        time: 9,
//        input: 'Meeting',
//      },{
//        time: 10,
//        input: 'Coffee',
//      },...];
// 4. Load input from local storage when page load/refresh if there's any data in local storage
//      var localStorageInput = get data from local storage
//      check if localStorageInput exist, if it is
//          var parsedLocalStorageInput = parse localStorageInput
//          populate the inputs with the value from parsedLocalStorageInput
//          inputs.forEach(function(input) {
//              input => {
//                time: 9,
//                input: 'Meeting',
//              }
//              $('.timeblock[data-hour="' + input.time + '"] textarea').val(input.input)
//          })
//      if theres no data in local storage, do nothing

// Extra, add hover effect on the save button
