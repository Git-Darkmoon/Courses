let user = document.getElementById("user");
let password = document.getElementById("password");

/* Form events:
  - Focus
  - Blur
  - Change
  - Input

/* The "change" event, seems to act similar to the blur event,
    when the input loses focus the code is executed */

user.addEventListener("change", (e) => {
  console.log(e.target);
});

/* By other hand the "input" event executes the code each
time a value is entered/change in the input field */

password.addEventListener("input", (e) => {
  if (e.target.value != parseInt(e.target.value)) {
    alert("The password must be numeric");
    e.target.value = "";
  }
  console.log(e.target.value);
});

password.addEventListener("change", (e) => {
  console.log(`The password entered was:${e.target.value}`);
  if (e.target.value.length > 6) {
    alert("The password must be 6 digits maximum");
    e.target.value = "";
  }
});
