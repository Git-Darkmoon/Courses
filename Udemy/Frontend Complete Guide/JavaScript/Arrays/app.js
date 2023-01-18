/* The type recognized for the arrays 
is take them  as objects */

console.clear();

let mFriends = ["Shawn", "Clara", "Vab", "Kun"];

/* Splice in-built function for the arrays:
~ 1st parameter, tells where to start
~ 2nd parameter, tells how many items to be deleted
~ 3rd, 4th and so on tells what items to be added. */

mFriends.splice(2, 0, "Nick", "Rachel");

console.log(mFriends);

// Delete item at specific position

mFriends.splice(2, 1);
console.log(mFriends);

// Concatenation

let officeFriends = ["George", "Katie", "Aaron", "Zara"];
let allFriends = mFriends.concat(officeFriends);
console.log(allFriends);

// Sorting ascending and descending

allFriends.sort();
console.log(`\n\nSorted array ascending way: ${allFriends}`);

allFriends.reverse();
console.log(`\n\nSorted array descending way: ${allFriends}`);
