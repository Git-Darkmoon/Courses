/*Crear una funcion que reciba un arreglo de numeros por parametro,
 eleve cada uno al cuadrado, filtre el arreglo para que queden solo numeros pares,
 divida cada elemento de ese arreglo en 2 y retorne un true si el ultimo arreglo contiene algun 
 numero multiplo de 3, de lo contraio false*/

//Array declaration:

let some = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

//Function declaration:

const proArray = (numbers) => {
  let arrayTrans = numbers
    .map((i) => Math.pow(i, 2))
    .filter((i) => i % 2 === 0)
    .map((i) => i / 2);
  let booleanArray = arrayTrans.some((i) => i % 3 === 0);
  return `El array resultante es: ${arrayTrans} \nExiste un multiplo de 3 en el array resultante ? ${booleanArray}`;
};

console.log(proArray(some));
