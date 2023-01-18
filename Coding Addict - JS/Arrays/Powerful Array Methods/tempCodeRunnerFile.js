let people = [
  { name: "Bob", age: 20, position: "Developer" },
  { name: "Peter", age: 25, position: "Designer" },
  { name: "Susy", age: 30, position: "CEO" },
  { name: "Dante", age: 42, position: "Writer" },
]

/* array.map((eachItem, indexEachOne) => {
  
})
*/

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