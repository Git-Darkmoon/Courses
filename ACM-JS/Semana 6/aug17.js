// CLOSURES :

const miFuncion = () => {
  return "Hola soy una funcion";
};
// console.log(miFuncion);

/*const moneyBox = (coins) => {
  let savedCoins = 0;
  savedCoins += coins;
  console.log(`Money box $ ${savedCoins}`);
};
*/

const moneyBox = () => {
  let savedCoins = 0;

  const countCoins = (coins) => {
    savedCoins += coins;
    console.log(`Money box $ ${savedCoins}`);
  };

  return countCoins;
};

// Guardar la funcion en una variable
//  permite guardar el return

let myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(13);

// SIMULAR ATRIBUTOS PRIVADOS:

const person = () => {
  let name = "name";
  return {
    getName: () => {
      return name;
    },
    setName: (n) => {
      name = n;
    },
  };
};

let somePerson = person();
// console.log(somePerson.getName());

somePerson.setName("juan");
// console.log(somePerson.getName());

// Una funcion que reciba monedas y que las cuente:

const piggy = () => {
  let coins = 0;

  return {
    existentCoins: () => {
      return coins;
    },
    insertCoin: (c) => {
      coins += c;
    },
  };
};

let dollars = piggy();

dollars.insertCoin(10);
console.log(dollars.existentCoins());
dollars.insertCoin(7);
dollars.insertCoin(1);
console.log(dollars.existentCoins());
