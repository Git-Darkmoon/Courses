/* --- Spread Operator --- 
Spread syntax allows arrays and objects to be expanded into:
~ Elements in case of array.
~ Key-value pairs in case of object

It is really useful to copy elements of an array*/

let arr1 = document.querySelector(".element1");
let arr2 = document.querySelector(".element2");
let arr3 = document.querySelector(".element3");

let num1 = prompt("Enter the value for the num1: ");
let num2 = prompt("Enter the value for the num2: ");
let num3 = prompt("Enter the value for the num3: ");

let array1 = [num1, num2];
let array2 = [num3];

arr1.innerHTML = `<b>First Array:</b> ${array1}`;

arr2.innerHTML = `<b>Second Array:</b> ${array2}`;

arr3.innerHTML = `<b>Concatenation of arrays using spread operator:</b> ${[
  ...array1,
  ...array2,
]}`;

console.log([0, ...array1, ...array2, 9]);

/* But can also copy elements from an object, i.e: */

let obj1 = {
  name: "Jhon",
  job: "UX Designer",
};

let obj2 = {
  age: 27,
};

let obj3 = { ...obj1, ...obj2 };

console.log(obj3);

let strArray = ["1", "2", "3"];
let numArray = strArray.map(Number);

console.log(strArray);
console.log(numArray);
