console.log("Hello, Prathmesh!");
//adding all the input in a variable 
document.getElementById('notification-container').style.setProperty("display","none");


const taskinput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const listitems = document.getElementById('list-items'); 
// const notipanel = document.getElementsById('notification-container');
// const todohead = document.getElementById("todohead");


// Create a new Date object
const currentDate = new Date();


const d = new Date();

function changeDate(){
    // Get individual components of the date (year, month, day)
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = currentDate.getDate().toString().padStart(2, '0');

// Create a formatted date string in "dd/mm/yyyy" format
    const formattedDate = `${day}/${month}/${year}`;
    document.getElementById('todohead').textContent = `${formattedDate}`;
}
function addTaskInput(){
    if(taskinput.value ===""){
        notiTriggerRed();
        setTimeout(()=>{
            const noti = document.getElementById('notification-container');
            noti.style.display = "none";
        },1000);
    }else{
        let task = document.createElement("li");
        const todoItems = 
        `<li>
        <i class="ri-checkbox-blank-line" style="color: #4f46e5;margin-right:12px" onclick="${changeIcon()}"></i>${taskinput.value}</li>`   ;

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

function deletetask(){
    const element = document.getElementById
    
}

function changeIcon(){
    document.getElementById('a').innerText = <i class="ri-checkbox-fill"></i>;
}

changeDate();



