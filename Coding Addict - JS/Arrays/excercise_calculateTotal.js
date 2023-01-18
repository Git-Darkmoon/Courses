// Functions , return, if, arrays, for loop

let gas = [20, 40, 100]
let food = [10, 40, 50]

const calculateTotal = (array1) => {
  let total = 0
  for (i of array1) {
    total += i
  }
  return total
}

let gasTotal = calculateTotal(gas)
let foodTotal = calculateTotal(food)
let Total = calculateTotal(food) + calculateTotal(gas)

console.log({
  Gas: gasTotal,
  Food: foodTotal,
  Total: Total,
})

/* a = prompt("Ingresa un numero: ");
console.log(a); */
