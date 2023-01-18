// Switch statement

/* Write a program to print the number of days in a month using a
switch case. Change the value of monthNumber and check if your code
works fine */

/*
let monthNumber = 5;

switch (monthNumber) {
  case 1:
    console.log("Your picked month is: January");
    break;
  case 2:
    console.log("Your picked month is: February");
    break;
  case 3:
    console.log("Your picked month is: March");
    break;
  case 4:
    console.log("Your picked month is: April");
    break;
  case 5:
    console.log("Your picked month is: May");
    break;
  case 6:
    console.log("Your picked month is: June");
    break;
  case 7:
    console.log("Your picked month is: July");
    break;
  case 8:
    console.log("Your picked month is: August");
    break;
  case 9:
    console.log("Your picked month is: September");
    break;
  case 10:
    console.log("Your picked month is: October");
    break;
  case 11:
    console.log("Your picked month is: November");
    break;
  case 12:
    console.log("Your picked month is: December");
    break;
  default:
    console.log("The entered value is not valid.");
}
*/

/* ---------------------------------------------------------------- 
let operation = "div";
let a = 3;
let b = 7;

switch (operation) {
  case "sum":
    console.log(`The sum of your numbers is: ${a + b}`);
    break;
  case "diff":
    console.log(`The difference of your numbers is: ${a - b}`);
    break;
  case "div":
    console.log(
      `The quotient of your numbers is: ${(a / b).toPrecision(2)} (rounded)`
    );
    break;
  case "times":
    console.log(`The product of your numbers is: ${a * b}`);
    break;
  default:
    console.log(`'${operation}' is not a valid operation.`);
}

*/

/*
let enteredNumber = 3;

switch (enteredNumber % 2) {
  case 0:
    console.log(`${enteredNumber} is an even number.`);
    break;
  case 1:
    console.log(`${enteredNumber} is an odd number.`);
    break;
  default:
    console.log(`Please enter a valid number.`);
}

*/

/*
In some cases instead of using a switch you can do this:

*/

const enemy = "Thor";

const LOKI_COSTUMES = {
  "Iron-Man": "Magneto",
  Thor: "Odin",
  Hulk: "Thanos",
  Wolverine: "Magneto",
};

const LOKI_DEFAULT_COSTUME = "Loki";

const loki = LOKI_COSTUMES[enemy] || LOKI_DEFAULT_COSTUME;
console.log(loki);
