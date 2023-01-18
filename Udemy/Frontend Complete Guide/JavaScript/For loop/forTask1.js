/* Q1: Write a JavaScript program to encode a message in the
language which hackers use to communicate */

let stringToConvert =
  "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. ";

const stringEncoder = (msg) => {
  let result = "";
  console.clear();
  for (i of msg) {
    switch (i.toLowerCase()) {
      case "a":
        i = "4";
        break;
      case "e":
        i = "3";
        break;
      case "i":
        i = "1";
        break;
      case "o":
        i = "0";
        break;
      case "s":
        i = "5";
        break;
      default:
        i = i;
    }
    result += i;
  }
  return result;
};

// console.log(stringEncoder(stringToConvert));

/* Q2: Write a JavaScript program to find how many vowels are
the in the sentence */

const vowelCounter = (txt) => {
  console.clear();
  let numVowels = 0;
  let numConsonants = 0;
  for (i of txt) {
    switch (i.toLowerCase()) {
      case "a":
        numVowels++;
        break;
      case "e":
        numVowels++;
        break;
      case "i":
        numVowels++;
        break;
      case "o":
        numVowels++;
        break;
      case "u":
        numVowels++;
        break;
      default:
        numConsonants++;
    }
  }
  return `Number of vowels = ${numVowels}\nNumber of consonants = ${numConsonants}`;
};

var sampleText =
  "Good, better, best. Never let it rest. 'Til your good is better and your better is best.";

// console.log(vowelCounter(sampleText));

/* Q3: Write a JavaScript program which accepts a string 
as input and swap the case of each character */

const caseSwapper = (msg) => {
  console.clear();
  let swappedTxt = "";
  for (i of msg) {
    i == i.toLowerCase()
      ? (swappedTxt += i.toUpperCase())
      : (swappedTxt += i.toLowerCase());
  }
  return swappedTxt;
};

var sampleInput = "THerE IS a liTTle Quick Brown Fox";
// console.log(caseSwapper(sampleInput));

/* Q4: Write a JavaScript for loop that will iterate from 0 to 10. For each 
iteration, it will check if the current number is odd or even,
and display a message to the screen. */

for (let i = 0; i <= 10; i++) {
  i % 2 == 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
}
