let input = ""
let count = 0

const totalTask = document.querySelector('#totalTasks')
const inputField =document.querySelector('#taskInput')
inputField.addEventListener('input', (e) => {
    input = e.target.value
 
})

const appendTask =document.querySelector('#addButton')
appendTask.addEventListener('click', () => {
    if(input === ""){
        // appendTask.disabled = true;
        alert("Task cannot be empty")

    }
    else{
        count++;
        addTask(input) 
        countInc(count)
        inputField.value =""
        input =""
    }
    
})


function countInc(count){
    console.log(count);
    totalTask.innerText = `Total tasks: ${count}`
}
function addTask(inputVal) {
    let ul = document.querySelector('#taskList')
    let newTask = document.createElement('li')
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type","checkbox")
    newTask.appendChild(checkbox)
    newTask.appendChild(document.createTextNode(inputVal))
    ul.appendChild(newTask)
}