/* The rest and spread operator are written same ..., their
name change depending in how the are used. i.e:

in this case we are going to take in count all the
arguments of a function.
*/

/* instead of saying how much arguments
must be passed to the function. */

// const nSum = (num1 , num2) => console.log(num1+num2);

/* We are going to use the rest operator: */

const nSum = (...args) => {
  let sum = 0;

  for (i of [...args]) {
    sum += i;
  }
  console.log(sum);
};

nSum(1, 2, 3, 4, 5, 6, 7);

/* The rest operator MUST ALWAYS BE at the end */
