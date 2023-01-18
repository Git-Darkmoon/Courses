/*

    --- reduce() ---

Just like map(), reduce() also iterates 
through the entire array and it accepts a callback
function to perform some action on the array element
The difference here is that reduce() passes the result
of the callback from one iteration to the next one. This
callback result is called accumulator. The accumulator
can be pretty much any kind of value and must be instantiated
and passed calling reduce()

Syntax:

array.reduce((acc,item) => {
    Callback function body
}, acc_default_value)

*/

const num = [53, 45, 34];

let numSum = num.reduce((accumulator, item) => {
  let sum = accumulator + item;
  return sum;
}, 0);

console.log(`The sum of the array is: ${numSum}`);
