const text = document.getElementById("keyText");

document.body.addEventListener("keypress", (k) => {
  let keyPressed = k.key;
  text.innerHTML = `The key pressed was: ${keyPressed}`;
});
