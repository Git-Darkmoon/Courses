/* Q1: Write a JavaScript program to create a new array by
reversing the elements of given array */

const { string } = require("prop-types");

let arrQ1 = [1, "a", 2, "b", 3, "c", 6, "d", 7, "e", 8, "f"];

// console.log(arrQ1.reverse());

/* Q2: Write a JavaScript program to check if there is at least one element which occurs in
two given sorted arrays of integers. */

const INSTANCE_CHECKER = (arr1, arr2) => {
  arr1.sort();
  arr2.sort();
  let veracity = "";
  for (i of arr1) {
    if (arr2.includes(i)) {
      veracity = "Yes";
      return `Element found: ${veracity}`;
    } else {
      veracity = "No";
    }
  }
  return `Element found: ${veracity}`;
};

let arr1Q2 = [4, 11, 12, 23, 46, 65, 70, 73, 98];
let arr2Q2 = [7, 13, 25, 46, 58, 70, 84];

// console.log(`\n${INSTANCE_CHECKER(arr1Q2, arr2Q2)}\n`);

/* Q3: Write a JavaScript program to check whether a given 
array of integers represents a STRICTLY increasing or 
a strictly decreasing sequence. */

const sequenceChecker = (arr) => {
  let check = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      check = `\nThe array: [${arr}] is NOT a strictly increasing sequence`;
      break;
    } else {
      check = `\nThe array: [${arr}] is a strictly increasing sequence`;
    }
  }
  return check;
};

let sequence1 = [4, 5, 6, 7, 8];
let sequence2 = [3, 4, 6, 6, 7, 8, 9];
let sequence3 = [34, 23, 45, 55, 67, 77];
let sequence4 = [-3, -2, -1];

// console.log(sequenceChecker(sequence3));

/* Q5:  Write a JavaScript function to create a new array from given array by formatting the
numbers to human readable form with correct suffix like 1 to 1st, 2 to 2nd, 3 to 3rd and
4 to 4th */

let sample1 = [22, 8, 301, 404, 35, 99];
let sample2 = [51, 67, 12, 14, 3, 4];
let sample3 = [-7, -5, 12, 41, 3];

const numFormatter = (e) => {
  let newArray = e.map((item) => {
    if (item < 0) {
      console.log(`WARNING !!! Negative values like: ${item} won't be read`);
      return NaN;
    } else {
      item = item.toString();
      let last = item.slice(-1);
      if (last == "1") {
        return `${item}st`;
      } else if (last == "2") {
        return `${item}nd`;
      } else if (last == "3") {
        return `${item}rd`;
      } else {
        return `${item}th`;
      }
    }
  });
  return newArray;
};

console.log(numFormatter(sample3));
