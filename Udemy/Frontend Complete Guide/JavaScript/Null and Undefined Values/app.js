console.clear();
// An undefined variable is the one that is declared but never initialized.
let mNum;
console.log(`The variable mNum is ${mNum}.`);
// A variable null is the one that its value is NULL.
mNum = null;
console.log(`The variable mNum is ${mNum}.`);

console.log(undefined == null); // Will return true
console.log(undefined === null); // Will return false
