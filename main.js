function calcDateDifference() {
  let firstTime = document.getElementById("firstTime").value;
  let secondTime = document.getElementById("secondTime").value;

  if (!firstTime || !secondTime) {
    alert("Please enter both dates.");
    return;
  }

  let newDate1 = new Date(firstTime);
  let newDate2 = new Date(secondTime);

  let milliSeconds = Math.abs(newDate2 - newDate1);
  let seconds = Math.floor(milliSeconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  document.getElementById("result").innerHTML = `
    <strong>Time Difference:</strong><br>
    Milliseconds: ${milliSeconds}<br>
    Seconds: ${seconds}<br>
    Minutes: ${minutes}<br>
    Hours: ${hours}<br>
    Days: ${days}
  `;
}
