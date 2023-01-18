// Event Object Argument e,evt

let container = document.querySelector(".container");
let heading = document.querySelector("h1");
let button = document.querySelector(".btn");

heading.addEventListener("click", () => {
  heading.classList.add("blue");
});

// Event.currentTarget (the name event can be changed)
// event.currentTarget, points to the element you are applying the function

heading.addEventListener("click", (event) => {
  console.log(event.currentTarget);
});

//  Event Bubbling - clicked element first then bubbles up

const showBubbling = (e) => {
  console.log(`current target`, e.currentTarget);
  console.log("target", e.target);
  if (e.target.classList.contains("link")) {
    console.log("you clicked on the link");
  }
};

document.addEventListener("click", showBubbling);

button.addEventListener("click", () => {
  let element = document.createElement("h1");
  element.classList.add("blue");
  element.textContent = `i'm inside the container`;
  container.appendChild(element);
});
