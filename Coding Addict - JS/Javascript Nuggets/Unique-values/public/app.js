// Unique Values

let menu = [
  {
    name: "Pancakes",
    category: "Breakfast",
  },

  {
    name: "Burger",
    category: "Lunch",
  },

  {
    name: "Steak",
    category: "Dinner",
  },

  {
    name: "Bacon",
    category: "Breakfast",
  },

  {
    name: "Eggs",
    category: "Breakfast",
  },

  {
    name: "Pasta",
    category: "Dinner",
  },
];

/*let categories = menu.map((item) => item.category);
console.log(categories); */

// With the "Set" property you can get the unique values, but it is going to be returned as an object

let categories = new Set(menu.map((item) => item.category));
console.log(categories);

let numbers = [1, 2, 3, 4];

/* El spread operator permite a un elemento
iterable tal como un array o un string ser expandido
en lugares donde cero o mas argumentos son esperados */

/* se puede usar de la forma mostrada a continuacion ...objetoIterable */

const summy = (a, b, c, d) => a + b + c + d;
console.log(summy(...numbers));

/* Pero asimismo sirve para poder pasar x datos como array
como por ejemplo, se hara a continuacion: */

let categories2 = ["all", ...new Set(menu.map((item) => item.category))];
console.log(categories2);

/* Aqui se convirtio de un objeto a un array */

let result = document.querySelector(".result");
result.innerHTML = categories2
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join("");
