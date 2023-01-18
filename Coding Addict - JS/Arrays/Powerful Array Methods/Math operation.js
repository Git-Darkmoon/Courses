/* Math
Standard built-in objects - always available */

//Floor is going to round down the number

let number = 4.86789
let result = Math.floor(number)

console.log(result)

//Ceil is going to round up the number

let number = 4.12222
let result = Math.ceil(number)

console.log(result)

let number = 25
let result = Math.sqrt(number)

console.log(result)

let number = Math.PI

console.log(number)

let result = Math.min(1, 2, 4, 5, 6)
console.log(result)

let result = Math.max(1, 2, 4, 5, 6)
console.log(result)

// IMPORTANT Math method: random

let random = Math.random()
console.log(random)

// Random numbers between 1 - 10 with decimals

let random = Math.random() * 10
console.log(random)

// Random integer numbers between 1 - 10

let random = Math.ceil(Math.random() * 10)
console.log(random)
