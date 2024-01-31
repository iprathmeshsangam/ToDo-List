console.log("Hello, Prathmesh!");
//adding all the input in a variable 


const taskinput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const listitems = document.getElementById('list-items'); 
// const notipanel = document.getElementsById('notification-container');



function addTaskInput(){
    if(taskinput.value ===""){
        trigger();
    }
    let task = document.createElement("li");
    const todoItems = `<li><i class="ri-task-fill"></i>${taskinput.value}</li>`;

    task.innerHTML = todoItems;
    listitems.appendChild(task);
    taskinput.value = "";
}




