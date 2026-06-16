// 1. Простий конвертер: сума множиться на курс
let amountInput = document.getElementById("money-amount");
let rateInput = document.getElementById("money-rate");
let convertButton = document.getElementById("convert-button");
let convertResult = document.getElementById("convert-result");

convertButton.onclick = function () {
  let amount = Number(amountInput.value);
  let rate = Number(rateInput.value);
  let result = amount * rate;

  convertResult.textContent = "Результат: " + result;
};

// 2. Додаємо нові справи у список і даємо кнопку для видалення
let taskInput = document.getElementById("task-input");
let addTaskButton = document.getElementById("add-task-button");
let taskList = document.getElementById("task-list");

addTaskButton.onclick = function () {
  let taskText = taskInput.value;

  if (taskText === "") {
    return;
  }

  let listItem = document.createElement("li");
  let deleteButton = document.createElement("button");

  listItem.textContent = taskText + " ";
  deleteButton.textContent = "Видалити";

  deleteButton.onclick = function () {
    listItem.remove();
  };

  listItem.append(deleteButton);
  taskList.append(listItem);
  taskInput.value = "";
};
