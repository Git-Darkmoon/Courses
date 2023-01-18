let cards = document.querySelector(".cards");

for (let i = 1; i <= 20; i++) {
  let codeNumber = Math.round(Math.random() * 10000);
  let price = Math.round(Math.random() * 10 + 29);

  cards.innerHTML += `   
    <div class="items"> <img src="https://source.unsplash.com/featured/?key" alt="An image for the ${i} card">
    <h2 class="keyTitle">Key ${i}</h2>
    <h2 class="keyCode">Code ${codeNumber}</h2>
    <h2 class="keyPrice">Price <span>$${price}<span/></h4>
    <span class="buyBtn"><a ></a></span></div>`;
}

let buyBtn = document.querySelectorAll(".buyBtn");

buyBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    let keyCode = e.target.parentElement.parentElement.children[2].textContent;
    let keyPrice = e.target.parentElement.parentElement.children[3].textContent;
    let purchase = confirm(`Buy key of ${keyCode}, ${keyPrice} ?`);

    if (purchase) {
      alert("Thanks for your purchase.");
      window.close();
    }
  });
});

let btn = document.querySelector(".custom-btn");

btn.addEventListener("click", () => {
  location.reload();
});
