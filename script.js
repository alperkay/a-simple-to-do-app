//const todoItems= ['write user stories', 'break first feature down into steps', 'make first feature', 'make todo app']
const todoItems= []
let todoList = document.getElementById("todo_list")

/*
todoItems.forEach(function(item, index) {
  var listItem = document.createElement("li");
  var todoText = document.createTextNode(item);
  listItem.appendChild(todoText);
  todoList.appendChild(listItem);
})
console.log(todoList)
*/

function addUserInput() {
  //declare a function called addUserInput which is called when user clicks the button
    let x = document.getElementById("myTextArea").value;
    //declares a variable x and assign it to the value that's inputted to the textarea
    todoItems.push(x);
    //adds x to the todoItems array
    let listItem = document.createElement("li");
    //create a list element
    let todoText = document.createTextNode(x);
    //create a text node with the input gotten from user input
    listItem.appendChild(todoText);
    //append the text node to the list item
    todoList.appendChild(listItem);
    //append the list item to the list
    document.getElementById("myTextArea").value = "";
    //clears the text area
    console.log(todoItems)
    //console log to check ourselves
}

function DeleteUserInput() {
  let deleteItem = window.prompt("which to do item would you like to delete?");
  //asks user which item to delete from the list
  if (deleteItem !== null && isNaN(deleteItem)== false && deleteItem<=todoItems.length)  {
    //if statement to check if the user made an input which is a number and within the range of the array's length
    let removedItem = todoItems.splice(deleteItem-1,1);
    //remove the item from the array
    todoList.removeChild(document.getElementsByTagName("li")[deleteItem-1]);
    //remove the item from the page
  } else { window.alert("hey, please input a valid number")}
  //pops up an alert if the input is invalid
  console.log(todoItems);
  //console log to check ourselves
}
