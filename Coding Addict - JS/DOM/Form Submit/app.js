// Submit event listener

let form = document.querySelector("#form");
let name = document.querySelector("#name");
let password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
  console.log(name.value);
  console.log(password.value);
  if (name.value == password.value) {
    alert("CAN NOT HAVE THE SAME USERNAME AND PASSWORD");
  }
});
