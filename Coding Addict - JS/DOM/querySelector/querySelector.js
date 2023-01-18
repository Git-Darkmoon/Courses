// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// querySelector('any CSS') - selects single => only the first instance
// querySelectorAll ('any CSS') - selects all

// ~~ BE VERY CAREFUL with the css selector introduced in the querySelector
// For ID use '# id' and for the CLASS use '. class' ~~

let result = document.querySelector("#result");
result.style.backgroundColor = "blue";

// See that the background here, only is going to change for Apple. Because it is the first instance
// But, not for all the items in class = special

let item = document.querySelector(".special");
item.style.backgroundColor = "white";

// With a more complex css selector, you can access the last item
let lastItem = document.querySelector("li:last-child");
lastItem.style.color = "gold";

let list = document.querySelectorAll(".special");

// As you can see, using the querySelector, it is not
// necessary to do any transformations to the array to
// use the aray methods.

list.forEach((thing) => {
  console.log(thing);
  thing.style.color = "pink";
});
