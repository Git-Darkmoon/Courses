/* Filter: does return a new array, 
can manipulate the size of the new array
returns based on condition */

let people = [
  { name: "Bob", age: 30, position: "Developer" },
  { name: "Peter", age: 25, position: "Designer" },
  { name: "Susy", age: 20, position: "CEO" },
  { name: "Dante", age: 42, position: "Writer" },
  { name: "Valentine", age: 22, position: "Developer" },
];

let youngPeople = people.filter((person, indexOfPerson) => {
  return person.age <= 25;
});

let developers = people.filter((person) => person.position === "Developer");

console.log(youngPeople);

console.log(developers);
