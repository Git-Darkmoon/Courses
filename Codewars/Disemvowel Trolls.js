/* Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!". */

const disemvowel = (str) => str.replace(/[aeiou]/gi, "");

/* I made this solution with regular expresions:

The forwards slashes / / mark the beginning and end of the regular expression.
The part in the square brackets [] is called a character class and it matches any of the characters in the brackets, in our case - any vowel.

For example, [abc] matches the characters a, b and c.

We used the g (global) flag because we want to match all occurrences of a vowel in the string and not just the first one.

The i flag is used to make the search case insensitive. These two regular expressions are the same:

    /[aeiou]/gi
    /[aeiouAEIOU]/g */

let something = "This website is for losers LOL!";

console.log(disemvowel(something));
