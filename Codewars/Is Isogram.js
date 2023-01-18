// This solution is developed with a Set object:

/* As the answer expected is a boolean value, this code compares
the size of the set with the actual length of the word to verify  */

const isIsogram = (word) => new Set(word.toLowerCase()).size === word.length;

/* A set in JS is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type. */

let test1 = "Dermatoglyphics";
let test2 = "isogram";
let test3 = "moOse";
let test4 = "";
let test5 = "BAT";

console.log(isIsogram(test1));
