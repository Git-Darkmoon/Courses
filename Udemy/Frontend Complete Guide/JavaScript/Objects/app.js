/* We have an object of customers for our food delivery app with 
the information about their past orders with order values.
Write a JavaScript program to give a "Premium Membership" to 
the customer if the customer has made at least 5 orders 
of the minimum value of 20. */

let customers = {
  Ben: [22, 30, 11, 17, 15, 52, 27, 12],
  Sameer: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
  Zeeshan: [22, 30, 11, 5, 17, 30, 6, 57],
};

for (i in customers) {
  // for (iter of customers[i]) {
  //   console.log(`${i}\n`);
  // }
  // console.log(customers[i]);
}

/*
let people = {
  x: [1, 2, 3],
  y: [4, 5, 6],
};

for (let i in people) {
  console.log(people[i]);
  for (iter of people[i]) {
    console.log(iter);
  }
}
*/

let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

let properties = [];

for (i in student) {
  properties.push(i);
}
console.log(properties);

let newStudent = { ...student, age: 24 };
console.log(student);
console.log(newStudent);
delete student.rollno;
console.log(student);
