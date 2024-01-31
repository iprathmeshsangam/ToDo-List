console.log("Hello, Prathmesh!");
//adding all the input in a variable 
document.getElementById('notification-container').style.setProperty("display","none");


const taskinput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const listitems = document.getElementById('list-items'); 
const notipanel = document.getElementsById('notification-container');



function addTaskInput(){
    if(taskinput.value ===""){
        notiTriggerRed();
    }else{
        let task = document.createElement("li");
        const todoItems = `<li><i class="ri-task-fill"></i>${taskinput.value}</li>`;

        task.innerHTML = todoItems;
        listitems.appendChild(task);
        taskinput.value = "";
        notiTriggerGreen();
        setTimeout(()=>{
            const noti = document.getElementById('notification-container');
            noti.style.display = "none";
        },1000);
       
    }   
}

function notiTriggerRed(){
    document.getElementById('notification-container').style.setProperty("display","block"); 
    document.getElementById('notification-container').style.setProperty("background-color","red"); 
    document.getElementById('notification-container').textContent = `Please add your task!!`;
}

function notiTriggerGreen(){
    document.getElementById('notification-container').style.setProperty("display","block"); 
    document.getElementById('notification-container').style.setProperty("background-color","Green"); 
    document.getElementById('notification-container').textContent = `Your task was added successfully!`;
}




