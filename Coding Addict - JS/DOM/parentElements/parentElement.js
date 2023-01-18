// ~ parentElement

let heading = document.querySelector("h2");
let parent = heading.parentElement;

parent.style.color = "gold";

// ~ previousSibling
// return Whitespace

let first = document.querySelector(".Orange");

// this is not going to return a property or anything more than a whitespace

let whitespace = first.nextSibling;
console.log(whitespace);

// To return the item is necessary to:

let second = first.nextSibling.nextSibling;
console.log(second);

second.style.color = "White";

// ~ previousSibling

let last = document.querySelector("#last");
let third = last.previousSibling.previousSibling;
console.log(third);

// ~~ previousElementSibling
/* This is going to return the previous element, 
 is going to work like x.previousSibling.previousSibling*/

let x = document.querySelector(".special");
let previousElBanana = x.previousElementSibling;
console.log(previousElBanana);

// ~~nextElementSibling
/* This is going to return the next element,
is going to work like x.nextSibling.nextSibling */

let y = document.querySelector(".special");
let nextElBananna = y.nextElementSibling;
console.log(nextElBananna);

// textContent
/* Is going to return the content of the specified node, and all its descendants 
 ~i.e: I'm going to access the elements that exist in the node,ID 'list' */

let textContentVariable = document.querySelector("#list").textContent;
console.log(textContentVariable);
