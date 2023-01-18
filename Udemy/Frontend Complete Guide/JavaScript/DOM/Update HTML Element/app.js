let numberValue = document.getElementById("value").innerHTML;
let numberElement = document.getElementById("value");
let bgImg = document.getElementById("bgImg");

const countdown = setInterval(() => {
  numberValue > 0 ? (numberValue -= 1) : clearInterval(countdown);
  numberElement.innerHTML = numberValue;
  numberValue % 2 === 0
    ? (bgImg.src = "macos_mojave_day-wallpaper-1920x1080.jpg")
    : (bgImg.src = "macos_mojave_night-wallpaper-1920x1080.jpg");
}, 1000);
