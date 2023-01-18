class Pelicula {
  constructor(nombre, duracion, personajes) {
    (this.nombre = nombre),
      (this.duracion = duracion),
      (this.personajes = personajes);
  }

  reproducir() {
    console.log(`Se esta reproduciendo ${this.nombre}`);
  }
}

let titanic = new Pelicula("Titanic", 180, ["Jack", "Rose"]);
// console.log(titanic);

// Crear una clase que crea carros, marca, modelo, año. Methodo que prenda el carro

class Carro {
  constructor(marca, modelo, año) {
    this.a_marca = marca;
    this.b_modelo = modelo;
    this.c_año = año;
  }

  start() {
    console.log(
      `El ${this.a_marca}-${this.b_modelo}-año-${this.c_año} se ha encendido`
    );
  }
}

let cars = [
  new Carro("Mazda", "X6", 2007),
  new Carro("Lamborghini", "Urus", 2021),
  new Carro("Ferrari", "Enzo", 1941),
  new Carro("McLaren", "Huarya", 2022),
  new Carro("Audi", "R8", 2020),
];

let kia = new Carro("Kia", "Cerato", 2009);
kia.start();
console.log(cars);

class Camioneta extends Carro {
  constructor(marca, modelo, año, transmission) {
    super(marca, modelo, año);
    this.transmission = transmission;
  }
}

let toyota = new Camioneta("toyota", "TX", 2021, "4x4");
console.log(toyota);

// export default Carro;
