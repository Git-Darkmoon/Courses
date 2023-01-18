/* Introduccion a Window:

~ Hereda las propiedades de EventTarget 
~ open() - Abre una ventana de un nuevo navegador o uno que ya existe.
~ close() - Cierra la ventana actual o la ventana en la que se llamo.
~ closed - Indica si la ventana
~ stop() - Detiene la carga de recursos en el contexto de navegacion actual.
~ alert() - Muestra un cuadro emergente de alerta con el contenido especificado y un boton Aceptar.
~ print() - Abre el cuadro de dialogo imprimir para impirmir el documento actual.
~ prompt() - Abre un cuadro de dialogo con un mesaje que solicita al usuario un dato (string).
~ confirm() - Abre un cuadro de dialogo con un mesanje y dos botones: Aceptar y Cancelar. 


~ screenLeft: Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla.
~ screenTop: Devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla.
~ scrollX: Devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente.
~ scrollY: Devuelve el numero de pixeles que el documento se desplaza actualmente verticalmente.
~ scroll(): Desplaza la ventana a un lugar particular en el document. (con options y positions)

*/

let firstButton = document.querySelector("#openProperty");

firstButton.addEventListener("click", (_) => {
  let ventana = window.open("https://youtube.com");
  ventana;
});

let secondButton = document.querySelector("#closeProperty");

secondButton.addEventListener("click", (_) => {
  window.close();
});

let thirdButton = document.querySelector("#confirming");

thirdButton.addEventListener("click", (_) => {
  let confirmation = confirm("Would you like to print the window hooman ?");
  console.log(confirmation);
  confirmation ? print() : alert("Ok the window won't be printed");
});

/* --------- Screen Object ---------  */

let leftDistance = document.querySelector("#screenL");
let topDistance = document.querySelector("#screenT");

/*
leftDistance.innerHTML = `Left Distance: <b>${screenLeft}</b>.`;
topDistance.innerHTML = `Top Distance: <b>${screenTop}</b>.`;
screenLeft == 0 && screenTop == 0
  ? alert("The window is fullscreen size")
  : alert("The window is minimized");*/

let scrollXDistance = document.querySelector("#scrollingX");
let scrollYDistance = document.querySelector("#scrollingY");

scrollXDistance.innerHTML = `Distance scrolled from border left : <b>${scrollX}</b>. `;
scrollYDistance.innerHTML = `Distance scrolled from border top: <b>${scrollY}</b>. `;
