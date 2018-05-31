const todoItems= ['write user stories', 'break first feature down into steps', 'make first feature', 'make todo app']

var todoList = document.getElementById("todo_list")

todoItems.forEach(function(item, index) {
  var listItem = document.createElement("li");
  var todoText = document.createTextNode(item);
  listItem.appendChild(todoText);
  todoList.appendChild(listItem);
})
console.log(todoList)
