// Select elements
// addEventListener()
// what event ,  what to do

let btn = document.querySelector(".btn")
let heading = document.querySelector("h2")

// btn.addEventListener('at What event, are we going to be listening for', callback Function)

// ~~btn.addEventListener("click", () => heading.classList.add("titleCool"));

// Now to use a callback function you do it like this, (doing with some ternary operator is cool to do it):

/*
const changeColors = () => {
  heading.classList == "titleCool"
    ? heading.classList.remove("titleCool")
    : heading.classList.add("titleCool")
}
*/

// The other way to do this classList action is with .toggle:

const changeColors = () => heading.classList.toggle("titleCool")

/* BE CAREFUL Adding the callback function, leave it as a reference and DON'T INVOKE IT
  By invoke i mean, typing it like this changeColors(), don't put the parentheses. */

btn.addEventListener("click", changeColors)

// Doing that ~ check ~ in the class, lets our button to have like a toggle functionality
