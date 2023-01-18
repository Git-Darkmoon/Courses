let btns = document.querySelectorAll(".btn");

// btn.onclick - this type of syntax is not reccomended
// and it is no longer considered as a good practice

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(e.target.textContent);
  });
});

let txt = document.querySelector("input");

txt.addEventListener("keydown", (e) => {
  console.log(e.target.value);
});

txt.addEventListener("contextmenu", () => {
  confirm("Just a context menu");
});
