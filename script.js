$(document).ready(function () {

  // hours to local storage
  $("#7").val(localStorage.getItem("Hour-7"));
  
  $("#8").val(localStorage.getItem("Hour-8"));
  
  $("#9").val(localStorage.getItem("Hour-9"));
  
  $("#10").val(localStorage.getItem("Hour-10"));
  
  $("#11").val(localStorage.getItem("Hour-11"));
  
  $("#12").val(localStorage.getItem("Hour-12"));
  
  $("#13").val(localStorage.getItem("Hour-13"));
  
  $("#14").val(localStorage.getItem("Hour-4"));
  
  $("#15").val(localStorage.getItem("Hour-15"));
 

  // save button local storage
  $(".saveBtn").on("click", function () {
    let task = $(this).parent().attr("id")
    console.log($(this));
    let time = $(this).prev().val().trim();
    localStorage.setItem(task, time);
    console.log(task, time);
    
    
  });

  let m = moment();
  // show current date and time on header
  //current date
  let currentDateEl = document.getElementById("currentDate");
  currentDateEl.innerHTML = m.format("LL");
  // current time
  let currentTimeEl = document.getElementById("currentTiempo");
  currentTimeEl.innerHTML = m.format("LT");
  
  var currentTiempo = m.format("H")
  

  //
  function dayTracker() {
    $(".time-block").each(function () {
      console.log(this.childNodes[3].getAttribute("id"))
      //console.log($(this))
      let timeHour = parseInt(this.childNodes[3].getAttribute("id"));
      if (timeHour == currentTiempo) {
        this.childNodes[3].setAttribute("class", "col-sm-10 present")
      } if (timeHour < currentTiempo) {
      
        this.childNodes[3].setAttribute("class", "col-sm-10 past")
      }
      if (timeHour > currentTiempo) {
        this.childNodes[3].setAttribute("class", "col-sm-10 future");
      }

     
    
    });
  }

  dayTracker();
});


