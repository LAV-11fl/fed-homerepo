// 1. Функція виводить повідомлення через заданий час
function showMessageLater(message, time) {
  setTimeout(function () {
    console.log(message);
  }, time);
}

let messageButton = document.getElementById("message-button");
let messageInfo = document.getElementById("message-info");
let messageResult = document.getElementById("message-result");

messageButton.onclick = function () {
  console.log("Таймер запущено. Чекаємо 2 секунди.");
  showMessageLater("Минуло 2 секунди", 2000);
  messageInfo.textContent = "Перевір консоль через 2 секунди.";

  // Дублюємо результат на сторінку, щоб його було видно без DevTools
  setTimeout(function () {
    messageResult.textContent = "Минуло 2 секунди";
  }, 2000);
};

// 2. Таймер сам зупиняється на числі 10
let timerButton = document.getElementById("timer-button");
let counterElement = document.getElementById("counter");
let timerId = null;

timerButton.onclick = function () {
  let counter = 0;
  counterElement.textContent = counter;

  clearInterval(timerId);

  timerId = setInterval(function () {
    counter++;
    counterElement.textContent = counter;

    if (counter === 10) {
      clearInterval(timerId);
    }
  }, 1000);
};

// 3. Беремо випадковий колір з CSS змінних
let colorButton = document.getElementById("color-button");
let colors = ["--color-one", "--color-two", "--color-three", "--color-four"];

colorButton.onclick = function () {
  let randomIndex = Math.floor(Math.random() * colors.length);
  let color = getComputedStyle(document.documentElement).getPropertyValue(colors[randomIndex]);
  document.body.style.backgroundColor = color;
};
