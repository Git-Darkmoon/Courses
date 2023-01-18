/*
9. Write a JavaScript function to check whether a given value is an valid url or not. Go to the editor

Click me to see the solution

10. Write a JavaScript function to check whether a given value is alpha numeric or not. 
*/

// 1. Write a JavaScript program to test the first character of a string is uppercase or not:
console.clear();
const isUpper = (str) => {
  console.log("Solution for 1:");
  str.match(/^[A-Z]/) // Or it can be done with: /^[A-Z]/.test(str). // The ^ is used to check the start and $ can be used to the check the end.
    ? console.log(`The string: '${str}' starts with capital case`)
    : console.log("The string does not apply.");
};

isUpper("Hello World");

/*
3. Write a pattern that matches e-mail addresses.
The personal information part contains the following ASCII characters.

    Uppercase (A-Z) and lowercase (a-z) English letters.
    Digits (0-9).
    Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
    Character . ( period, dot or fullStop) provided that it is not the first or last character and it will not come one after the other.
*/

const valid_email = (str) => {
  console.log("\nSolution for 3:");
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  mailFormat.test(str)
    ? console.log("Valid email address!")
    : console.log("You have entered an invalid email address!");
};

valid_email("git-darkmoon@example.com");

// 8. Write a JavaScript function to count the number of vowels in a given string.

const vowelCounter = (str) => str.match(/[aeiou]/gi).length;

console.log("\nSolution for 8:");
console.log(vowelCounter("The quick brown fox jumps Over the lazy dog"));
