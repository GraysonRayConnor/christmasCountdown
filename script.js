const daysOp = document.querySelector("#daysOp");
const hoursOp = document.querySelector("#hoursOp");
const mintutesOp = document.querySelector("#minutesOp");
const secondsOp = document.querySelector("#secondsOp");


const christmasDay = "25 Dec 2021";

function countdown(){
  const christmasDayDate = new Date(christmasDay);
  const currentDate = new Date();
  const totalSeconds = (christmasDayDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  
  daysOp.innerText = days;
  hoursOp.innerText = hours;
  minutesOp.innerText = minutes;
  secondsOp.innerText = seconds;
}

setInterval(countdown, 1000);