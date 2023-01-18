let linkColor = document.querySelector(".link");
linkColor.style.color = "white";

// getAttribute()
/* The getAttribute() method returns the value of the attribute 
with the specified name, of an element */

let first = document.querySelector(".first");
let classValue = first.getAttribute("class");

let subHeading = document.querySelector("#subHeading");
let idValue = subHeading.getAttribute("id");

let link = document.querySelector(".link");
let showLink = link.getAttribute("href");
console.log(showLink);

// setAttribute()
/* The setAttribute() method adds the specified attribute to an element, 
and gives it the specified value. */

let last = link.nextElementSibling; // This is the same as
// Say : let last = document.querySelector(".link").nextElementSibling
// Or also: let last =

console.log(last);

last.setAttribute("class", "bananaAttribute");
console.log(last.textContent);
// last.textContent = "i also have";
