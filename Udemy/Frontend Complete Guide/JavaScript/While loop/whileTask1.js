/* Q1. Write a JavaScript program to find the GCD of two numbers */

const GCD = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
};

// console.log(GCD(15, 25));

/* Q2: Write a JavaScript program to find the number of even values in sequence before
the first occurrence of a given number. */

let sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let givenNumber = 8;
let boolInstance = true;
let occurrences = 0;

while (boolInstance) {
  for (i of sampleArray) {
    if (i % 2 == 0) {
      occurrences++;
      if (i == givenNumber) {
        boolInstance = false;
      }
    }
  }
}

console.log(occurrences);
