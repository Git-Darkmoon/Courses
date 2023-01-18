/* Q1: Write a JavaScript program to find the
longest string from a given array */

let sampleArray = ["asdf", "sd", "something", "right", "position"];

let length = 0;
let longest;

const LONGEST_STRING = (arrayPassed) => {
  arrayPassed.forEach((item) => {
    if (item.length > length) {
      length = item.length;
      longest = item;
    }
  });
  return longest;
};

console.log(
  `The longest word of the given array is: "${LONGEST_STRING(sampleArray)}"`
);

/* Q2: Write a JavaScript program to remove '0', false, undefined, null, NaN,
from given array. */

let arrayQ2 = [NaN, 0, 15, false, -22, "", undefined, 47, null, 94];

let filteredArr = arrayQ2.filter((v) => {
  return (
    v !== 0 &&
    v !== false &&
    v !== undefined &&
    v !== null &&
    v !== "" &&
    !Number.isNaN(v)
  );
});

console.log(filteredArr);

/* Q3: Write a JavaScript code to divide a given array of 
positive integers into two parts. First elements goes to first
part, second element goes to second part, and third element goes
to first part and so on.

Compute the sum of two parts and store into an array of size two. */

let arrayOfQ3 = [1, 3, 6, 2, 5, 10];

const Q3SOLVER = (arrayQ3) => {
  let firstPart = arrayQ3.filter((element, eIndex) => {
    if (eIndex % 2 == 0) {
      return element;
    }
  });

  let secondPart = arrayQ3.filter((element, eIndex) => {
    if (eIndex % 2 != 0) {
      return element;
    }
  });

  let fpTotal = 0;
  for (let i in firstPart) {
    fpTotal += firstPart[i];
  }

  let spTotal = 0;
  for (let i in secondPart) {
    spTotal += secondPart[i];
  }

  let answer = [fpTotal, spTotal];

  return `\nThe first part is: ${firstPart}\nThe second part is: ${secondPart}\nAsked answer: ${answer}`;
};

console.log(`${Q3SOLVER(arrayOfQ3)}`);

/* Q4: Write a JavaScript program to check whether
there is at least one element which occurs in two given sorted
arrays of integers */

let array1Q4 = [1, 2, 3, 11, 7];
let array2Q4 = [4, 5, 9, 14, 11];

const INSTANCE_CHECKER = (arr1, arr2) => {
  arr1.sort();
  arr2.sort();
  let result;
  for (i of arr1) {
    if (arr2.includes(i)) {
      result = true;
      return result;
    } else {
      result = false;
    }
  }
  return result;
};

console.log(`\n${INSTANCE_CHECKER(array1Q4, array2Q4)}`);
