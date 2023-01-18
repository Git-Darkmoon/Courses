// Ternary Operator

// It is wrote like this:
// Condition ? (runs if true) : (runs if false) i.e

let value = 2 < 1;

// In the "Condition", you can write either the variable or the condition

value ? console.log("Value is true") : console.log("Value is false");

// It is the same, to say:

2 < 1 ? console.log("Value is true") : console.log("Value is false");

// Another example:

let test = 5;

test < 0 ? (test = test * -1) : (test = test * 10);

console.log(test);
