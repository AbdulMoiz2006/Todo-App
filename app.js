



var idcount = 1


function addTodo(){

var todos = document.getElementById("todos");
var inputvalue = document.getElementById("inp");

if(inputvalue.value.trim() === "" ){

    alert("please enter a task")
    return;

}

var element = document.createElement('div');
element.setAttribute('id',idcount);
element.setAttribute('class',"todo");

element.innerHTML =`<p>${inputvalue.value} </p>   <button onclick="deleteTodo(${idcount})">Delete</button> 
<button onclick="updateTodo(${idcount})">update</button>`

todos.appendChild(element);

idcount++;

inputvalue.value = "";


}

function deleteTodo(id){

var deleteitom = document.getElementById(id);

var parentElement = deleteitom.parentNode;

parentElement.removeChild(deleteitom)

}


function updateTodo(id){

var inputvalue = document.getElementById('inp');
var todoitem = document.getElementById(id);
 
todoitem.innerHTML = `<p>${inputvalue.value}</p> <button onclick="deleteTodo(${id})">Delete</button>
<button onclick="updateTodo(${id})">update</button>`

}