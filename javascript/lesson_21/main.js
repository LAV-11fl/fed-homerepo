// 1. Зберігаємо текст тільки на час поточної сесії браузера
let sessionInput = document.getElementById("session-input");
let saveSessionButton = document.getElementById("save-session");
let showSessionButton = document.getElementById("show-session");
let sessionResult = document.getElementById("session-result");

saveSessionButton.onclick = function () {
  sessionStorage.setItem("studentText", sessionInput.value);
};

showSessionButton.onclick = function () {
  sessionResult.textContent = sessionStorage.getItem("studentText") || "Даних ще немає.";
};

// 2. Налаштування фону зберігається в localStorage
let darkMode = document.getElementById("dark-mode");

function applyTheme() {
  let savedTheme = localStorage.getItem("darkMode");

  if (savedTheme === "yes") {
    document.body.classList.add("dark");
    darkMode.checked = true;
  } else {
    document.body.classList.remove("dark");
    darkMode.checked = false;
  }
}

darkMode.onchange = function () {
  if (darkMode.checked) {
    localStorage.setItem("darkMode", "yes");
  } else {
    localStorage.setItem("darkMode", "no");
  }

  applyTheme();
};

applyTheme();

// 3. Простий список справ з localStorage
let taskInput = document.getElementById("task-input");
let addTaskButton = document.getElementById("add-task");
let taskList = document.getElementById("task-list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTasks() {
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    li.textContent = tasks[i] + " ";
    deleteButton.textContent = "Видалити";

    deleteButton.onclick = function () {
      tasks.splice(i, 1);
      saveTasks();
      showTasks();
    };

    li.append(deleteButton);
    taskList.append(li);
  }
}

addTaskButton.onclick = function () {
  if (taskInput.value === "") {
    return;
  }

  tasks.push(taskInput.value);
  taskInput.value = "";
  saveTasks();
  showTasks();
};

showTasks();

// 4. Об'єкт перетворюємо в JSON рядок
let student = {
  name: "Oleksandr",
  age: 30,
  skills: ["HTML", "CSS", "JavaScript"],
  course: {
    name: "JavaScript UA 2025",
    part: 2
  }
};

document.getElementById("json-output").textContent = JSON.stringify(student, null, 2);
