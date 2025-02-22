let input = "";
let count = 0;
let completedTask = 0;

const totalTask = document.querySelector(" #totalTasks ");

const emptyList = document.querySelector(" .empty-list ");

const inputField = document.querySelector(" #taskInput ");

const taskList = document.querySelector("#taskList")

const cTAsk = document.querySelector(" #completedTasks ");

inputField.addEventListener("input", (e) => {
    input = e.target.value;
});

const appendTask = document.querySelector("#addButton");
appendTask.addEventListener("click", () => {
    if (input === "") {
        alert("Task cannot be empty");
    } else {
        count++;
        addTask(input);
        countInc(count);
        inputField.value = "";
        input = "";
    }
});

function countInc(count) {
    console.log(count);
    totalTask.innerText = `Total tasks: ${count}`;
}
function addTask(inputVal) {
    if (count > 0) {
        emptyList.remove();
    }

    let newTask = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("task-checkbox")

    newTask.appendChild(checkbox);

    newTask.appendChild(document.createTextNode(inputVal));
    newTask.style.backgroundColor = "white";

    newTask.style.paddingBlock = "10px";
    newTask.style.marginBlock = "10px";
    taskList.appendChild(newTask);
    checkbox.addEventListener("change", checkList)
}

function checkList(event) {
    let taskItem = event.target.parentElement;
    if (event.target.checked) {
        completedTask++;
        taskItem.style.textDecoration = "line-through"; // Add strikethrough
        taskItem.style.color = "gray";
    } else {
        completedTask--;
        taskItem.style.textDecoration = "none"; // Add strikethrough
        taskItem.style.color = "black";
    }


    cTAsk.innerText = `Completed: ${completedTask}`
};

