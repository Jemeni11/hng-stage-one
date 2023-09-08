const dayOfTheWeek = document.querySelector("#dayOfTheWeek > p");
const time = document.querySelector("#time > p");
const newDate = new Date();
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfTheWeekNumber = newDate.getDay();
const timeInUTCMilliseconds = newDate.getTime();
dayOfTheWeek.innerHTML = daysOfTheWeek[dayOfTheWeekNumber];
time.innerHTML = timeInUTCMilliseconds;

// function updateTime() {
//   const newDate = new Date();
//   const timeInUTCMilliseconds = newDate.getTime();
//   time.innerHTML = timeInUTCMilliseconds;
// }

// updateTime();

// setInterval(updateTime, 1);
