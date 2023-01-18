console.clear();

// Color wristBand changer:

const btnColorPurple = document.getElementById("btn1"),
  btnColorRed = document.getElementById("btn2"),
  btnColorBlack = document.getElementById("btn3"),
  btnColorPink = document.getElementById("btn4"),
  btnColorBrown = document.getElementById("btn5");

const watchColor = document.getElementById("watchColor");
const buyBtn = document.getElementById("buyBtn");

btnColorPurple.addEventListener("click", () => {
  watchColor.setAttribute("src", "assets/purple watch.png");
});

btnColorRed.addEventListener("click", () => {
  watchColor.setAttribute("src", "assets/red watch.png");
});

btnColorBlack.addEventListener("click", () => {
  watchColor.setAttribute("src", "assets/black watch.png");
});

btnColorPink.addEventListener("click", () => {
  watchColor.setAttribute("src", "assets/pink watch.png");
});

btnColorBrown.addEventListener("click", () => {
  watchColor.setAttribute("src", "assets/brown watch.png");
});

buyBtn.addEventListener("click", () => {
  let ans = confirm("Are you sure to buy the product ?");
  ans == true
    ? alert(
        "The watch will be shipped tomorrow. 🛒\nThanks for your purchase.😊"
      )
    : null;
});

// Features functionality:

const timeBtn = document.getElementById("showTime");
const heartBtn = document.getElementById("showHR");
const heartBeatInfo = document.querySelector(".featureHR");

// Time functionality.

const watchTime = document.querySelector(".featureTime");

setInterval(() => {
  let today = new Date().toLocaleTimeString();
  watchTime.innerHTML = today;
}, 1000);

// Features buttons:

timeBtn.addEventListener("click", () => {
  watchTime.style.display = "block";
  heartBeatInfo.style.display = "none";
});

heartBtn.addEventListener("click", () => {
  watchTime.style.display = "none";
  heartBeatInfo.style.display = "block";
});
