
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let ten = document.getElementById("10");
let eleven = document.getElementById("11");
let twelve = document.getElementById("12");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");

let m = moment();

//show current date
let currentDateEl = document.getElementById("currentDate");
currentDateEl.innerHTML = m.format("LL");

// show current time 
let currentTimeEl = document.getElementById("currentTime");
currentTimeEl.innerHTML = m.format("LT");



