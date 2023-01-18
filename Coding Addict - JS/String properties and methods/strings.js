let text = "RANDOM text...";

let textLenght = text.length;

console.log(`The length of the entered text is: ${textLenght}`);
console.log(`Your all text in lowercase is: ${text.toLocaleLowerCase()}`);
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("t"));

// Trim, removes the whitespace at left or right of your string
console.log(text.trim());

console.log(text.startsWith("RANDOM"));

//This method is going to return a boolean value if the character(s) are in your string
console.log(text.includes("..."));

//Literally slices from your index parameters. If you put negative values it is gonna return from the last of the word
console.log(text.slice(0, 6));
