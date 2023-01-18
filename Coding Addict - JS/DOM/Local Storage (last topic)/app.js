// Web storage API - provided by browser

/* Session storage: The storage is saved by sessions, meaning, 
it is going to be storaged only when the window is open
and erased once the window is closed

Local Storage: This kind of storage is going to be 
storaged in the browser, so it can be storaged even if the
window is closed 

Its methods are going to be: 
 .setItem , .getItem , .removeItem, .clear
 
 and they'll work the same work for session and local storage i.e:

 localStorage.setItem('nameOfTheKey','whateverValue')
 sessionStorage.setItem('name','Jhon')

*/

// localStorage.setItem("name", "Jhon");
// sessionStorage.setItem("name", "Halpert");

localStorage.setItem("name", "pepe");
localStorage.setItem("age", "25");
localStorage.setItem("job", "developer");

// To get the value of some item you set it to a variable, use .getItem('nameOfTheKey')

let person = localStorage.getItem("name");
console.log(person);

// The method .removeItem will remove a specific item

localStorage.removeItem("name");

// The method clear will remove all the items

// ~~ localStorage.clear();

/* To storage multiple values you are going to use JSON.stringify()
and JSON.parse() 

JSON.stringify() is going to convert our value to JSON string

JSON.parse() is going to return us back our initial value

*/

let friends = ["Jhon", "Peter", "Bob"];

localStorage.setItem("friends", JSON.stringify(friends));

let values = JSON.parse(localStorage.getItem("friends"));
console.log(`The first of our friends is: ${values[0]}`);

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log(fruits);
// fruits.push("apple");
fruits.push("orange");
localStorage.setItem("fruits", JSON.stringify(fruits));
