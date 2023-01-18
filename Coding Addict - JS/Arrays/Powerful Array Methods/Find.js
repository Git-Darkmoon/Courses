/* Find, returns a single object (meaning, single instance).
returns first match, if no match: undefined
great for getting unique value */

let people = [
  { name: "Bob", age: 30, position: "Developer", id: 1 },
  { name: "Peter", age: 25, position: "Designer", id: 2 },
  { name: "Susy", age: 20, position: "CEO", id: 3 },
  { name: "Dante", age: 42, position: "Writer", id: 4 },
  { name: "Valentine", age: 22, position: "Developer", id: 5 },
]

let personById = people.find((person) => person.id === 3)

console.log(personById)

/*---------------------------------*/

let workerNames = ["Bob", "Susy", "Kevin", "Mohammed", "Elvis"]

let isBob = workerNames.find((name) => name === "Bob")

isBob !== undefined ? console.log(isBob) : console.log("There's no Bob.")
