/* 
--- Destructuring ---

It allows us to "unpack" arrays or objects 
into a bunch of variable which makes working with arrays 
and objects bit more convenient. */

// Examples with arrays:

const names = ["Pedro", "Daniela", "Stewart", "James", "Sophie"];

let [firstOcurrence, secondOcurrence] = names;

console.log(firstOcurrence);
console.log(secondOcurrence);

const numbers = [1, 2, 3, 4];
let [a, b] = numbers;
console.log(a, b);

const [x, y] = ["Qatar", "Berlin", "London", "Paris"];
console.log(x, y);

// Examples with objects:

const human = {
  name: "Valentine",
  genre: "Female",
  age: 71,
};

/* Working with objects, the variable MUST MATCH with
the object attributes and the syntax is with curly braces */

let { age } = human;
console.log(age);

let { model, price } = {
  price: 120_000_000,
  model: "Mazda",
  year: 2021,
};

console.log(model, price);
