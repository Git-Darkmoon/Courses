let searchBar = document.getElementById("searchBar");
let cardsTitle = document.querySelectorAll(".card p");

searchBar.addEventListener("input", (i) => {
  let value = i.target.value.toLowerCase();
  cardsTitle.forEach((e) => {
    const isVisible = e.textContent.toLowerCase().includes(value);
    e.parentElement.classList.toggle("hide", !isVisible);
  });
});

cardsTitle.forEach((k) => {
  k.parentElement.addEventListener("click", (j) => {
    alert(`You clicked the ${k.textContent} card 👀.`);
  });
});
