let audioClap = document.getElementById("audioClap");
let audioHihat = document.getElementById("audioHihat");
let audioKick = document.getElementById("audioKick");
let audioOpenhat = document.getElementById("audioOpenhat");
let audioBoom = document.getElementById("audioBoom");
let audioRide = document.getElementById("audioRide");
let audioSnare = document.getElementById("audioSnare");
let audioTom = document.getElementById("audioTom");
let audioTink = document.getElementById("audioTink");

let CLAP = document.getElementById("CLAP");
let HIHAT = document.getElementById("HIHAT");
let KICK = document.getElementById("KICK");
let OPENHAT = document.getElementById("OPENHAT");
let BOOM = document.getElementById("BOOM");
let RIDE = document.getElementById("RIDE");
let SNARE = document.getElementById("SNARE");
let TOM = document.getElementById("TOM");

const keyColorChange = (sound) => {
  sound.style.backgroundColor = "#fff";
  sound.style.color = "#000";
  sound.style.width = "4.75rem";
  sound.style.height = "4.75rem";
  setTimeout(() => {
    sound.style.backgroundColor = "";
    sound.style.color = "#fff";
    sound.style.width = "";
    sound.style.height = "";
  }, 200);
};

document.addEventListener("keydown", (k) => {
  switch (k.key) {
    case "a":
      audioClap.play();
      keyColorChange(CLAP);
      break;
    case "s":
      audioHihat.play();
      keyColorChange(HIHAT);
      break;
    case "d":
      audioKick.play();
      keyColorChange(KICK);
      break;
    case "f":
      audioOpenhat.play();
      keyColorChange(OPENHAT);
      break;
    case "g":
      audioBoom.play();
      keyColorChange(BOOM);
      break;
    case "h":
      audioRide.play();
      keyColorChange(RIDE);
      break;
    case "j":
      audioSnare.play();
      keyColorChange(SNARE);
      break;
    case "k":
      audioTom.play();
      keyColorChange(TOM);
      break;
  }
});
