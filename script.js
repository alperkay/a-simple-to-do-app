let todoItems= []
let todoList = document.getElementById("todo_list");

function addUserInput() {
  let x = document.getElementById("myTextArea").value;
  todoItems.push(x);
  let listItem = document.createElement("li");
  let todoText = document.createTextNode(x);
  listItem.appendChild(todoText);
  todoList.appendChild(listItem);
  document.getElementById("myTextArea").value = "";
  listItem.addEventListener('click', removeOnClick);
}

function removeOnClick() {
  const removedIndex = todoItems.findIndex(removed => removed === this.innerHTML);
  delete todoItems[removedIndex];
  this.style.textDecoration= "line-through";
}

function DeleteAll() {
  todoItems= [];
  document.getElementById("todo_list").innerHTML = ""
}
