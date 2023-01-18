const input = document.querySelector("input"),
  addBtn = document.querySelector(".btn-add"),
  ul = document.querySelector("ul"),
  taskItems = ul.children,
  empty = document.querySelector(".empty"),
  clearBtn = document.getElementById("clear-btn");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  } else {
    alert("Invalid input.");
  }
});

const addDeleteBtn = () => {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "x";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
};

clearBtn.addEventListener("click", () => {
  input.value = "";

  if (taskItems.length !== 0) {
    [...taskItems].forEach((element) => {
      element.remove();
    });
  } else {
    alert("There's no tasks to clear.");
  }
  taskItems.length === 0
    ? (empty.style.display = "block")
    : (empty.style.display = "");
});
