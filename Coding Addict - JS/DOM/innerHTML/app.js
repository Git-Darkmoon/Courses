// innerHTML
// textContent

let list = document.querySelector("#first");
let div = document.querySelector("#second");
let item = document.querySelector(".item");

console.log(list.textContent); // IT is going to show the text of div
console.log(list.innerHTML); // It is going to show the WHOLE HTML Structure, not only the text

let ul = document.createElement("ul");
ul.innerHTML = `<li class="item">list item</li>
      <li>list item</li>`;
document.body.appendChild(ul);
