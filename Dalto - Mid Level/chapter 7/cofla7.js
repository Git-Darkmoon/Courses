let width = window.screen.width;
let height = window.screen.height;

let buy = confirm(`The width is: ${width} and the height: ${height}`);

buy ? alert("Compra exitosa.") : alert("Compra cancelada.");

document.write(`El url de la pagina es: ${window.location.href}`);
