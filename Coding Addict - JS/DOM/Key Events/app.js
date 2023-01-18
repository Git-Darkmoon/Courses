//  Key events : Usually used with inputs

let heading = document.querySelector("h1");
let input = document.querySelector(".input");

// Keypress - When key is pressed

// input.addEventListener("keypress", () => {
//   console.log(`You presssed a key`);
// });

//  Keydown - when key is down

// input.addEventListener("keydown", () => {
//   console.log(`You presssed a key`);
// });

// Keyup - when key is released

input.addEventListener("keyup", () => {
  console.log(input.value);
});
