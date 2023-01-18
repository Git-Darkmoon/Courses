/* Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
i.e.
friend("Ryan", "Kieran", "Mark") `shouldBe` ["Ryan", "Mark"]
*/

let humans = ["Ryan", "Kieran", "Jason", "Yous"];

const friend = (arrayOfFriends) => {
  let filteredFriends = arrayOfFriends.filter((n) => n.length === 4);
  return filteredFriends;
};

console.log(friend(humans));
