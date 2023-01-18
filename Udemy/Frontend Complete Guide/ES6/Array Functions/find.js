/*

--- find() and findIndex() ---

- find(): It is used to search for an element in 
the array that matches some condition

- findIndex() = It is quite similar to the find() method.
The difference is that findIndex() method returns the index of 
the element instead of the element itself.

*/

const names = ["Martha", "George", "Hallen", "Louisa", "Hallen"];

let eNames = names.find((i) => {
  return i == "Hallen";
});

console.log(eNames);

let eNameIndex = names.findIndex((i) => {
  return i == "Hallen";
});

console.log(`The name Hallen is in the [${eNameIndex}] position of the array.`);
