console.clear();

class Person {
  constructor(firstName, yearOfBirth, ID) {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.ID = ID;
  }
  calculateAge() {
    return `${this.firstName}'s age: ${today - this.yearOfBirth} years old.`;
  }
}

class Driver extends Person {
  constructor(firstName, yearOfBirth, ID, hasCar, hasLicense) {
    super(firstName, yearOfBirth, ID);
    this.hasCar = hasCar;
    this.hasLicense = hasLicense;
  }
  drive() {
    let driveThrough;
    this.hasLicense
      ? (driveThrough = `${this.firstName} started driving.`)
      : (driveThrough = `${this.firstName} can't drive without a driver license.`);
    return driveThrough;
  }
}

const hooman1 = new Driver("SpongeBob", "2002", "20211020078", false, true);
const hooman2 = new Driver("Patrick", "1992", "20211020084", true, false);

console.log(hooman1.drive());
console.log(hooman2.drive());
