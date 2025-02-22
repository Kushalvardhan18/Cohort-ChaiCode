let input = ""
let count = 0
let completedTask = 0
const totalTask = document.querySelector('#totalTasks')
const emptyList = document.querySelector(".empty-list")
const inputField = document.querySelector('#taskInput')
const selectedTask = document.querySelector('.tasks') 
inputField.addEventListener('input', (e) => {
    input = e.target.value

})

const appendTask = document.querySelector('#addButton')
appendTask.addEventListener('click', () => {
    if (input === "") {
        alert("Task cannot be empty")

    }
    else {
        count++;
        addTask(input)
        countInc(count)
        inputField.value = ""
        input = ""
    }

})


function countInc(count) {
    console.log(count);
    totalTask.innerText = `Total tasks: ${count}`
}
function addTask(inputVal) {
    if (count > 0) {
        emptyList.remove()
    }
    let ul = document.querySelector('#taskList')
    let newTask = document.createElement('li')
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("class", "tasks")

    newTask.appendChild(checkbox)

    newTask.appendChild(document.createTextNode(inputVal))
    newTask.style.backgroundColor = "white"
    // newTask.style.color ="white"
    newTask.style.paddingBlock = "10px"
    newTask.style.marginBlock = "10px"
    ul.appendChild(newTask)
}
// selectedTask
    if(selectedTask.checked == true) {
        completedTask++;
        console.log(kv);  
    }
// }