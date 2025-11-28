const input = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const ul = document.querySelector("ul");
const text = document.querySelector(".text");

addBtn.addEventListener("click", function () {
  if (input.value === "") {
    text.textContent = "Please enter a task";
  } else {
    text.textContent = ''
    const li = document.createElement("li");
    li.textContent = input.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(deleteBtn);
    ul.appendChild(li);
    input.value = "";
  
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
}
});
