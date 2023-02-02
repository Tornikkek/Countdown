const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const endDate = new Date(2023, 3, 20, 18, 30, 0);

const year = endDate.getFullYear();
const month = months[endDate.getMonth()];
const day = weekdays[endDate.getDay()];
const hour = endDate.getHours();
const minute = endDate.getMinutes();
const date = endDate.getDate();

giveaway.textContent = `Giveaway Ends on ${day}, ${date} ${month} ${year} ${hour}:${minute}pm`;

const currentDate = new Date();

function calculateRemainingTime() {
  const currentDate = new Date();
  const endSeconds = endDate.getTime();
  const currentSeconds = currentDate.getTime();
  const remainingTime = endSeconds - currentSeconds;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const days = Math.floor(remainingTime / oneDay);
  const hours = Math.floor((remainingTime % oneDay) / oneHour);
  const minutes = Math.floor((remainingTime % oneHour) / oneMin);
  const seconds = Math.floor((remainingTime % oneMin) / 1000);

  const times = [days, hours, minutes, seconds];

  function format(number) {
    if (number < 10) {
      return `0${number}`;
    } else return number;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(times[index]);
  });

  if (remainingTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }
}

let countdown = setInterval(calculateRemainingTime, 1000);

calculateRemainingTime();
