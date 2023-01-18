// For each, does not return new array

let people = [
  { name: "Bob", age: 20, position: "Developer" },
  { name: "Peter", age: 25, position: "Designer" },
  { name: "Susy", age: 30, position: "CEO" },
  { name: "Dante", age: 42, position: "Writer" },
]

/* The "Person" parameter, is going to work like an i of iterations
  so it is going to iterate ~ FOR EACH ~ value. Also, the "index"
  parameter is going to tell us the index of that iterated value
  IMPORTANT: ~ The name of the parameters can be changed, it is not necessary to be exactly:
  - Person nor index. */

people.forEach((person, index) => {
  console.log(`The person is ${person.position} for the index ${index}`)
})
