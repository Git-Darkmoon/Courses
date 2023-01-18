//Solucion al primer ejercicio:

const familiarsOlder = (objectPersons) => {
  let newArray = [];
  for (i in objectPersons) {
    newArray.push(objectPersons[i].edad);
  }
  let older = Math.max.apply(null, newArray);
  for (x in objectPersons) {
    if (objectPersons[x].edad == older) {
      let elderPerson = objectPersons[x];
      let familiars = elderPerson.familia;
      console.log(
        `La persona mas vieja es ${elderPerson.nombre} con ${older} años `
      );
      for (family in familiars) {
        console.log(
          `Nombre de un familiar de ${elderPerson.nombre}: ${
            objectPersons[familiars[family]].nombre
          }`
        );
      }
    }
  }
};

// Solucion al segundo ejercicio:

const familyGuySkills = (persons) => {
  let familyObject = {};
  for (iterations in persons) {
    let humanBool =
      familyObject.familia &&
      familyObject.familia.length > persons[iterations].familia.length;
    familyObject = humanBool ? familyObject : persons[iterations];
  }

  console.log(
    `La persona con mas familiares es ${familyObject.nombre} y sus habilidades son ${familyObject.habilidades}`
  );
};

// Solucion al tercer ejercicio:

class Humano {
  constructor(nombre, edad, habilidades, familia) {
    this.nombre = nombre;
    this.edad = edad;
    this.habilidades = habilidades;
    this.familia = familia;
  }
}

let test1 = new Humano(
  "Sasha",
  "16",
  ["Programar", "Hackear"],
  ["Eleonor", "Wilfred", "Filmore"]
);
let test2 = new Humano(
  "Pedro",
  "69",
  ["Correr rapido", "Punteria perfecta"],
  "No tiene"
);
let test3 = new Humano(
  "Riley",
  "21",
  ["Flexible", "Resistencia Cardiovascular"],
  [
    { nombre: "Nick", edad: 51, profesion: "Chef" },
    { nombre: "Mary", edad: 47, profesion: "Diseñador UX" },
  ]
);
