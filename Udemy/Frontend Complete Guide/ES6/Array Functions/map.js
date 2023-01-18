/* 
--- Map() ---

Iterates the array for us and we can pass a callback
function to perform some operation on each item of the array.
The updated values can be returned by the callback
function to create a new array.

Syntax:

array.map((item,index) => {
    Callback function body
})
*/

let numbers = [9, 19, 38, 72, 51, -6];

let newNumbers = numbers.map((item, index) => {
  console.log(`Items at position [${index}] is: ${item}`);
  if (item % 2 == 0) {
    return item * 2;
  } else {
    return 0;
  }
});

console.log(newNumbers);

/* Whenever you return something, that thing is pushed 
to new array */
