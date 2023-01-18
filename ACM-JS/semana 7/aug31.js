// promesas

let miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Nicolas",
      lastName: "Mayorga",
    });
  }, 3000);

  setTimeout(() => {
    reject(new Error("Error mio"));
  });
});

miPromesa
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });

console.log(miPromesa);
