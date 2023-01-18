// prepend
//  innerText

/* let heading = document.createElement("h2");
heading.innerText = ` I am a dynamic heading`;
document.body.prepend(heading); */

//remove
// removeChild

let result = document.querySelector(".result");
//~~ result.remove();

let heading = result.querySelector("h1");
result.removeChild(heading);
