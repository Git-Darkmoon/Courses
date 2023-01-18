/*

--- filter() ---

It iterates through the array to create a new array. The
difference is that YOU can DECIDE which elements should
be added in the new array based on some conditions.

Syntax:

array.filter((item) => {
    return true to add / false to skip the current item
})

*/
console.clear();

let numbers = [11, 23, 526, 21, -2];

let evenNums = numbers.filter((item) => {
  return item % 2 == 0;
});

console.log(evenNums);

let cars = [
  {
    brand: "Ferrari",
    model: "Enzo",
    year: 2008,
    price: 178_800_000,
  },
  {
    brand: "Lamborghini",
    model: "Huracan",
    year: 2018,
    price: 372_800_000,
  },
  {
    brand: "Chevrolet",
    model: "Corvette",
    year: 2021,
    price: 671_890_000,
  },
  {
    brand: "Porsche",
    model: "911",
    year: 2023,
    price: 268_390_000,
  },
];

let luxCars = cars.filter((item) => {
  return item.price >= 400_000_000;
});

console.log("Luxury cars are:\n ", luxCars);

let execCars = cars.filter((item) => {
  return item.price < 400_000_000;
});

console.log("Executive cars are: \n", execCars);
