const names = ["Anna", "Susy", "Bob"]
const lastName = ["Shaky"]

let newArray = []

//Using for of:

for (nombre of names) {
  nombreCompleto = `${nombre} ${lastName}`
  newArray.push(nombreCompleto)
}
console.log(newArray)

//Using array.map():

let usingMap = names.map((i) => {
  return `${names.indexOf(i) + 1}. ${i} ${lastName}`
})

console.log(usingMap)

/*Using .map abbreviate, in the way that the
arrow function only returns one value:

let usingMap = names.map((i) => `${i} ${lastName}`); */
