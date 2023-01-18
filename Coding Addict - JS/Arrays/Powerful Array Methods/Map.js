/* The map method , does return a new array.
  Does not change size of the original array
  uses values from the original array when making the new one */

let people = [
  { name: "Bob", age: 20, position: "Developer" },
  { name: "Peter", age: 25, position: "Designer" },
  { name: "Susy", age: 30, position: "CEO" },
  { name: "Dante", age: 42, position: "Writer" },
]

let newArray = people.map((person) => {
  return person.position
})
console.log(newArray)

let newPeople = people.map((human) => {
  return {
    firstName: human.name.toUpperCase(),
    age: human.age,
    job: human.position,
  }
})

console.log(newPeople)

// So by the following ~~ you can see the real power of the .map function looking

let names = people.map((livingThing) => {
  return `<h1> ${livingThing.name}</h1>`
})

// document.body.innerHTML = names.join(" Map method");
