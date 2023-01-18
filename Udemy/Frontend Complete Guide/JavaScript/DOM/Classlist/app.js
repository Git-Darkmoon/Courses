let burger = document.getElementById("burger");
let sideBar = document.querySelector("aside");

burger.addEventListener("click", () => {
  sideBar.classList.toggle("show");
});
