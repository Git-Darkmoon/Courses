let btnDecreaseFont = document.getElementById("decrease");
let btnIncreaseFont = document.getElementById("increase");
let text = document.getElementById("text");
let textFontSize = window.getComputedStyle(text).fontSize;

let valueOfTextFontSize = parseInt(
  textFontSize.substring(0, textFontSize.length - 2)
);

btnDecreaseFont.addEventListener("click", () => {
  valueOfTextFontSize > 0
    ? (valueOfTextFontSize -= 6)
    : alert("The font size is too small and it could disappear.");

  text.style.fontSize = `${valueOfTextFontSize}px`;
});

btnIncreaseFont.addEventListener("click", () => {
  valueOfTextFontSize = parseInt(valueOfTextFontSize);

  valueOfTextFontSize < 118
    ? (valueOfTextFontSize += 6)
    : alert("That's the maximum font size available. ");

  text.style.fontSize = `${valueOfTextFontSize}px`;
});
