let btn = document.getElementById("btn");
let colorValue = document.getElementById("colorValue");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  colorValue.innerHTML = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
});
