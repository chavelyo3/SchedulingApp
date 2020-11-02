$(document).ready(function () {
  //hours to be saved to local storage and getting them
  $("sevenAm").val(localStorage.getItem("7"));
  $("eightAm").val(localStorage.getItem("8"));
  $("nineAm").val(localStorage.getItem("9"));
  $("tenAm").val(localStorage.getItem("10"));
  $("elevenAm").val(localStorage.getItem("11"));
  $("twelvePm").val(localStorage.getItem("12"));
  $("onePm").val(localStorage.getItem("13"));
  $("twoPm").val(localStorage.getItem("14"));
  $("threePm").val(localStorage.getItem("15"));

  // save button local storage
  $(".saveBtn").on("click", function () {
    let task = $(this).siblings(".describtion").val();
    console.log($(this));
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, task);
    console.log(time, task);
  });

  let m = moment();
  // show current date and time on header
  //current date
  let currentDateEl = document.getElementById("currentDate");
  currentDateEl.innerHTML = m.format("LL");
  // current time
  let currentTimeEl = document.getElementById("currentTiempo");
  currentTimeEl.innerHTML = m.format("LT");

  //
  function dayTracker() {
    let currentHour = moment().hours();
    console.log(currentTiempo);
    $(".time-block").each(function () {
      console.log($(this));
      let timeHour = parseInt($(this).attr("id").split("-")[1]);

      if (timeHour < currentTiempo) {
        $(this).addClass("past");
      } else if (timeHour === currentTiempo) {
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      if (timeHour > currentTiempo) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  dayTracker();
});
