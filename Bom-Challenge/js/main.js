// BOM Challenge

let textInput = document.querySelector(".input"),
    addTask = document.querySelector(".add"),
    tasksDiv = document.querySelector(".tasks");

let tasksList = [];

function showTasks(element, list) {
    list.forEach((el) => {
        // Creating Task box, text and delete button
        let taskTitle = document.createTextNode(`${el}`),
            taskBox = document.createElement("div"),
            deleteBtn = document.createElement("button");

        taskBox.appendChild(taskTitle);
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";

        deleteBtn.setAttribute("data", `${el}`);
        taskBox.appendChild(deleteBtn);

        // adding the task to the container of all the tasks
        element.appendChild(taskBox);
    });
    let deleteBtns = document.querySelectorAll(".delete");
    for (const btn of deleteBtns) {
        btn.addEventListener("click", (e) => {
            console.log(e.currentTarget.getAttribute("data"));
            console.log(
                `Delete button with data : ${btn.getAttribute("data")}`
            );
            let taskName = e.currentTarget.getAttribute("data");
            console.log(tasksList);
            tasksList.forEach(function (element) {
                if (element === taskName) {
                    tasksList = tasksList
                        .slice(0, tasksList.indexOf(element))
                        .concat(
                            tasksList.slice(tasksList.indexOf(element) + 1)
                        );
                }
            });
            deleteTasks(tasksDiv);
            // Add the new tasks
            showTasks(tasksDiv, tasksList);
            window.localStorage.removeItem("tasks");
            window.localStorage.setItem("tasks", tasksList);
        });
    }
}

function deleteTasks(element) {
    if (element.children.length !== 0) {
        document.querySelectorAll(".tasks div").forEach((el) => {
            el.remove();
        });
    }
}

if (window.localStorage.getItem("tasks")) {
    showTasks(tasksDiv, window.localStorage.getItem("tasks").split(","));
    tasksList = window.localStorage.getItem("tasks").split(",");
}

addTask.addEventListener("click", function () {
    if (textInput.value !== "") {
        // Add the value of the input to tasks list
        tasksList.push(textInput.value);
        // clear the input
        textInput.value = "";
        // Add the list to the local storage
        window.localStorage.setItem("tasks", tasksList);
        // Remove all the tasks
        deleteTasks(tasksDiv);
        // Add the new tasks
        showTasks(tasksDiv, tasksList);
        console.log(tasksList);
    }
});
