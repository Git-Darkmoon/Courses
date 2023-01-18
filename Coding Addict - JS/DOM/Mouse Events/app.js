let heading = document.querySelector("h1");
let button = document.querySelector(".btn");

// Click - Fires after full action occurs ( this means, it activates
// the function after the button is clicked and released)

button.addEventListener("click", () => {
  heading.classList.add("titleCool");
});

// Mousedown - button is pressed

button.addEventListener("mousedown", () => {
  console.log("You clicked me :)");
});

// Mouseup - button is released

button.addEventListener("mouseup", () => {
  console.log("You stopped clicking me :c");
});

// Mouseenter - moved onto an element ( like hover)

button.addEventListener("mouseenter", () => {
  console.log("You are hovering me :0");
});

// Mouseleavve - moved out of an elemen

button.addEventListener("mouseleave", () => {
  console.log("You stopped hovering me -_-");
});
