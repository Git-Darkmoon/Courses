/* In this little assignment you are given a string of space separated numbers, and have to return the highest and 
lowest number.

--------------------------------------------------------------------------------------------------

Exists another regex which is \s which means whitespace but
using \s+ is faster as the \s means one space and the \s+ means one or more spaces
i.e
console.log(str.replace(/\s/g, '#'));  // ##A#B##C###D#EF#
console.log(str.replace(/\s+/g, '#')); // #A#B#C#D#EF#

console.log(test1.replace(/\s+/g, ""));
--------------------------------------------------------------------------------------------------*/
let test1 = "1 2 3 4 5"; // Output: "5 1"
let test2 = "1 2 -3 4 5"; // Output: "5 -3"
let test3 = "1 9 3 4 -5"; // Output: "9 -5"
let test4 = "8 3 -5 42 -1 0 0 -9 4 7 4 -4"; // Output: "42 -9"
let test5 = "1 2 3"; // Output: "3 1"

const highAndLow = (nums) => {
  let splittedNums = nums.split(" ").map(Number);
  let higherNum = Math.max(...splittedNums);
  let lowerNum = Math.min(...splittedNums);
  return `${higherNum} ${lowerNum}`;
};

console.log(highAndLow(test3));
