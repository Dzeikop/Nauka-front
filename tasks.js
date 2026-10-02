const inputElement = document.querySelector("#task-input");
const addButton = document.querySelector("#add-task");
const clearButton = document.querySelector("#clear-tasks");
const listElement = document.querySelector("#task-list");

const saved = localStorage.getItem("tasks");
let tasks;
if (saved !== null) {
  tasks = JSON.parse(saved);
} else {
  tasks = [];
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTasks() {
  listElement.textContent = "";
  for (let i = 0; i < tasks.length; i = i + 1) {
    const item = document.createElement("li");
    item.textContent = tasks[i].text;
    console.log(tasks[i]);

    if (tasks[i].done) {
      item.classList.add("done");
    }

    const doneButton = document.createElement("button");
    doneButton.textContent = "Zrobione";
    doneButton.addEventListener("click", function () {
      tasks[i].done = !tasks[i].done;
      saveTasks();
      showTasks();
    });
    item.appendChild(doneButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Usuń";
    deleteButton.addEventListener("click", function () {
      tasks.splice(i, 1);
      saveTasks();
      showTasks();
    });
    item.appendChild(deleteButton);

    listElement.appendChild(item);
  }
}

showTasks();

addButton.addEventListener("click", function () {
  const newTask = inputElement.value;
  if (newTask !== "") {
    tasks.push({
      text: newTask,
      done: false
    });
    saveTasks();
    showTasks();
    inputElement.value = "";
  }
});

clearButton.addEventListener("click", function () {
  tasks = [];
  saveTasks();
  showTasks();
});
