function calcDateDifference() {
  let first = document.getElementById("firstTime");
  let second = document.getElementById("secondTime");

  let newDate1 = new Date("1970-01-01T00:00:00");
  let newDate2 = new Date();

  let milliSeconds = newDate2 - newDate1; 
  let seconds = milliSeconds / 1000; 
  let minutes = seconds / 60; 
  let hours = minutes / 60; 
  let days = hours / 24; 
}
