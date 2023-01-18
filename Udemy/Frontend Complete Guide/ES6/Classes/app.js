console.clear();

/*

--- Classes in ES6 ---

To create object factories, you can use the `CLASS` keyword.
Just like you would do in other programming languages.

*/

class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getDetails = () => {
    return `His name is ${this.name} and he is ${
      new Date().getFullYear() - this.birthYear
    }`;
  };
}

let hooman1 = new Person("Jhon", 1994);
console.log(hooman1);

// --- Inheritance in ES6 ---

class Pilot extends Person {
  constructor(name, birthYear, exp, type, license) {
    super(name, birthYear);
    this.experience = exp;
    this.type = type;
    this.license = license;
  }
}

const pilot1 = new Pilot("Jhon Wick", 1982, "5 years", "private", "TC4321");

console.log(pilot1.getDetails());
