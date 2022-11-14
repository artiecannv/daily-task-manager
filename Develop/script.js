$(function () {
  const timeSlot = $(".time-block");
  const currentTime = dayjs().format("HH");

  // Add a listener for click events on the save button.
  $(".saveBtn").on("click", function () {
    localStorage.setItem($(this).parent().attr("id"), $(this).prev().val());
  });

  //Apply the past, present, or future class to each time block by comparing to current hour
  for (let index = 0; index < timeSlot.length; index++) {
    let hourIndex = timeSlot[index].id;
    let currentHour = hourIndex[5] + hourIndex[6];

    if (currentTime == currentHour) {
      $("#" + hourIndex).addClass("present");
    } else if (currentTime < currentHour) {
      $("#" + hourIndex).addClass("future");
    } else {
      $("#" + hourIndex).addClass("past");
    }
  }

  // Get user input that was saved in localStorage and set the values of the corresponding textarea elements.
  

  for (let index = 0; index < localStorage.length; index++) {
    let storageKey = localStorage.key(index);

    $('#' + storageKey).children('textarea').val(localStorage.getItem(storageKey));
  }

  //Display the current date in the header of the page.
  var now = dayjs().format("dddd, MMMM D, YYYY");
  var x = document.getElementById("header");

  $("#currentDay").text(now);
});
