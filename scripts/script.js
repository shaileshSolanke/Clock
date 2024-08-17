const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourhand = document.querySelector(".hour-hand");
const display = document.querySelector("span");

function timeToDegrees(time,maxTime) {
  return (time / maxTime) * 360 + 90;
}

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();
  const currentTime=now.toLocaleTimeString();

  const secondsInDegrees = timeToDegrees(second,60);
  const minuteInDegrees = timeToDegrees(minute,60);
  const hourInDegrees = timeToDegrees(hour,12);

  secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteInDegrees}deg)`;
  hourhand.style.transform = `rotate(${hourInDegrees}deg)`;
  display.innerHTML=currentTime;
}

setInterval(setDate, 1000);
