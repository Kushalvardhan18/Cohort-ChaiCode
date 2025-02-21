let input = ""

document.querySelector('#taskInput').addEventListener('input', (e) => {
    input = e.target.value
 
})

document.querySelector('#addButton').addEventListener('click', () => {
    addTask(input) 
})


function addTask(inputVal) {
    let ul = document.querySelector('#taskList')

    let newTask = document.createElement('li')

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type","checkbox")

    newTask.appendChild(checkbox)
    newTask.appendChild(document.createTextNode(inputVal))
    ul.appendChild(newTask)
    console.log(newTask);
}