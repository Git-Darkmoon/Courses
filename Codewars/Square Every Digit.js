const squareDigits = (num) => {
  let digits = num.toString().split("");
  let newDigits = digits.map((number) => number ** 2);
  return parseInt(newDigits.join(""));
};

console.log(squareDigits(2112));
