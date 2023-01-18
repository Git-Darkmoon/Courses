console.clear();

const today = new Date().getFullYear();

// The classes can be made like this:

class Car {
  constructor(brand, ref, model) {
    this.brand = brand;
    this.ref = ref;
    this.model = model;
  }
  start() {
    `The ${this.brand} ${this.ref} model: ${this.model} has been started.`;
  }
}

class Person {
  constructor(firstName, yearOfBirth, ID, profession) {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.ID = ID;
    this.profession = profession;
  }
  walk() {
    `${this.firstName} with ID: ${ID} is walking now.`;
  }
  calculateAge() {
    return `${this.firstName}'s age: ${today - this.yearOfBirth} years old.`;
  }
}

const car1 = new Car("BMW", "Z4", 2021);
const car2 = new Car("Jeep", "Wrangler", 2023);
const owner1 = new Person("John", "2002", "1193562916", "Developer");

console.log(
  `${owner1.firstName} is a ${owner1.profession} and is riding a ${car1.brand} ${car1.model}`
);

console.log(owner1.calculateAge());
