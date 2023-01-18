//Array properties and methods

let names = ["jhon", "bobo", "barry", "olga"];

// Lenght - gives you the lenght of the array
console.log(names.length);

console.log(names[names.length - 1]);

// Concat - concatenates two arrays
let lastNames = ["Perez", "Ortiz", "White", "banana"];

let fullNames = names.concat(lastNames);
console.log(fullNames);

//**** reverse method ( this method can reverse anything it does not have to be an Array)
console.log(fullNames.reverse());

//unshift - This adds items to he beginning of the array

fullNames.unshift("Susy");
console.log(fullNames);

// shift - Removes the first item of the array ( no need to pass an array)
fullNames.shift();
console.log(fullNames);

// push - Adds an item to the end of the array
fullNames.push("Albert");
console.log(fullNames);

//pop - removes the last items of the array
fullNames.pop("Cassie");
console.log(fullNames);

/* Splice - It gonna make an interval for the element you want to keep
for example if my array is letters = [a,b,c,d] and i do letters.splice(0,1) 
i will only conserve a and b cuz that was my interval ( MUTATES THE ORIGINAL ARRAY)*/

let specificNames = fullNames.splice(0, 3);
console.log(specificNames);
