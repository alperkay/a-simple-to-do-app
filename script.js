//const todoItems= ['write user stories', 'break first feature down into steps', 'make first feature', 'make todo app']
let todoItems= []
let todoList = document.getElementById("todo_list");
let itemList = document.getElementById("itemList");

function addUserInput() {
  //declare a function called addUserInput which is called when user clicks the button
    let x = document.getElementById("myTextArea").value;
    //declares a variable x and assign it to the value that's inputted to the textarea
    todoItems.push(x);
    //adds x to the todoItems array
    let listItem = document.createElement("li", {"id": "itemList"});
    //create a list element
    let todoText = document.createTextNode(x);
    //create a text node with the input gotten from user input
    listItem.appendChild(todoText);
    //append the text node to the list item
    todoList.appendChild(listItem);
    //append the list item to the list
    document.getElementById("myTextArea").value = "";
    listItem.addEventListener('click', removeOnClick);
}

function removeOnClick() {
  const removedIndex = todoItems.findIndex(removed => removed === this.innerHTML);
  delete todoItems[removedIndex];
  this.style.textDecoration= "line-through";
  console.log(todoItems);
}

function DeleteAll() {
  todoItems= [];
}
