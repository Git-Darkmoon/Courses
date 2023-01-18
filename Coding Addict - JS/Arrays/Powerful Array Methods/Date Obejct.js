// Date

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

let date = new Date()
console.log(date)

// console.log(`Today is ${days[date.getDay()]} of ${months[date.getMonth()]}`);

let giveawaySentence = `Giveaway Ends On ${
  days[date.getDay()]
}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

console.log(giveawaySentence)

// For ~ getDay() ~ and ~ getMont() ~ is necessary to have a reference array like the showed above

/* USING , the new Date () with the empty parameter , it is going to return
the actual date BUT ~ IF you put some specific date in the format 'MM/DD/YYYY'
it is going to return values for that date */
