"use strict";

const DaysEL = document.getElementById("Days");
const HoursEL = document.getElementById("Hours");
const MinsEL = document.getElementById("Mins");
const SecondsEL = document.getElementById("Seconds");

const newYears = "6 March 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const Days = Math.floor(totalSeconds / 3600 / 24);
  const Hours = Math.floor(totalSeconds / 3600) % 24;
  const Mins = Math.floor(totalSeconds / 60) % 60;
  const Seconds = Math.floor(totalSeconds % 60);

  DaysEL.innerHTML = Days;
  HoursEL.innerHTML = formatTime(Hours);
  MinsEL.innerHTML = formatTime(Mins);
  SecondsEL.innerHTML = formatTime(Seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
