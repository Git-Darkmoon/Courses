// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// getElementsByClassName('classname')

// Node-list = array-like object
// Index, lenght property but not array methods

let listItems = document.getElementsByClassName("special");

console.log(listItems);

// Remember that this is going to return a node-lsit so, to make any change to
// Some element you need to access the item like an array: array[index]

listItems[0].style.color = "gold";
