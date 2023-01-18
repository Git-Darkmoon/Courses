// ~ className

let firstHeading = document.querySelector("#title1");
let secondHeading = document.querySelector("#title2");
let thirdHeading = document.querySelector("#title3");

// To check what class is assigned to an element we use:

let classValue = firstHeading.className;
console.log(`Class for element with Id = title1 is: ${classValue}`);

// Now to add an element to a class we do :

secondHeading.className = "colors";

/* If you assign to this className another className
     you are going to overwrite it */

// ~classList

/* Using classList is the better option to add
    (with this one you can also remove) multiple classes */

// Adding classes
thirdHeading.classList.add("colors", "text");

// Removing Classes
thirdHeading.classList.remove("colors");

// Checking if the class exists
let checker = thirdHeading.classList.contains("colors");

checker
  ? console.log(`Contains 'colors' class`)
  : console.log(`Does not contain 'colors' class`);
