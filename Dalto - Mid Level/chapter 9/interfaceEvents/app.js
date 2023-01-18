// minuto 2:26:00

/* Interface Events:
    ~ error: Ocurre cuando sucede un error durante la carga de un archivo multimedia.
    ~ load: Ocurre cuando un elemento se ha cargado.
    ~ beforeunload: Ocurre antes de que el documente este a punto de descargarse.
    ~ unload: Ocurre una vez que se ha descargado una pagina.
    ~ resize: Ocurre cuando se cambia el tamaño de la vista del documento.
    ~ scroll: Ocurre cuando se desplaza la barra de dezplazamiento de un elemento.
    ~ select: Ocurre despues de que el usario selecciona algun texto de <input> o <textarea>.
*/

let input1 = document.querySelector(".input1");

input1.addEventListener("select", (e) => {
  let originalString = e.target.value;
  let stringStart = e.target.selectionStart;
  let stringEnd = e.target.selectionEnd;

  confirm(
    `Did you select "${originalString.slice(
      stringStart,
      stringEnd
    )}" in the input ? `
  );
});

let input2 = document.querySelector(".input2");
let lastKey = document.querySelector("#lastkey");

input2.addEventListener("keypress", (e) => {
  let key = e.key;
  let content = `The last key pressed was: <b>${key}</b>.`;
  lastKey.innerHTML = content;
});
