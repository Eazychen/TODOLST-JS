// 程式碼寫這裡
const addBtn = document.querySelector("#addBtn")
const taskInput = document.querySelector("#taskInput")
const todoList = document.querySelector(".todo-list")

const newTodoList = () => {
  const task = taskInput.value
  const listItem = `<li class="todo-item">
    <span class="item">${task}</span>
    <button class="closeBtn">X</button>
  </li>`
  todoList.insertAdjacentHTML("afterbegin", listItem)
  taskInput.value = " "
  taskInput.focus()
}

addBtn.addEventListener("click", () => {
  newTodoList()
})

todoList.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    e.target.parentNode.remove()
  }
})

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    newTodoList()
  }
})
