/* getElementsByTagName(''tagName)
Node- list = array-like object
index, lenght property but not array methods */

let titles = document.getElementsByTagName("h2");
titles[0].style.color = "white";

let items = document.getElementsByTagName("li");

// You can't use the array methods in this node-list so you need to do:

let betterItems = [...items];

// Now you can aplly the array methods like the forEach one:

betterItems.forEach = (eachItem) => (eachItem.style.color = "white");
