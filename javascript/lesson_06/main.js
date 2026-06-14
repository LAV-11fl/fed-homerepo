// 1. Калькулятор з окремими функціями для математичних операцій
function addValues(a, b) {
  return a + b;
}

function subtractValues(a, b) {
  return a - b;
}

function divideValues(a, b) {
  return a / b;
}

function multiplyValues(a, b) {
  return a * b;
}

let firstValue = Number(prompt("Введіть перше число:"));
let secondValue = Number(prompt("Введіть друге число:"));
let operationSign = prompt("Введіть знак операції: +, -, / або *");
let calculatorResult;

switch (operationSign) {
  case "+":
    calculatorResult = addValues(firstValue, secondValue);
    break;
  case "-":
    calculatorResult = subtractValues(firstValue, secondValue);
    break;
  case "/":
    calculatorResult = divideValues(firstValue, secondValue);
    break;
  case "*":
    calculatorResult = multiplyValues(firstValue, secondValue);
    break;
  default:
    calculatorResult = "Невідома операція";
}

console.log("Результат калькулятора:", calculatorResult);

// 2. Передаємо callback у функцію і вітаємо кожного користувача
let userNames = ["Оля", "Андрій", "Марія"];

function hiUser(user) {
  console.log(`Вітаю ${user}`);
}

function wellcomUser(users, callback) {
  for (let i = 0; i < users.length; i++) {
    callback(users[i]);
  }
}

wellcomUser(userNames, hiUser);

// 3. Та сама логіка, але через стрілкову функцію
const wellcomUserArrow = (users, callback) => {
  for (let i = 0; i < users.length; i++) {
    callback(users[i]);
  }
};

wellcomUserArrow(userNames, hiUser);

// 4. Функція з параметром за замовчуванням
function showMessage(message = "Повідомлення за замовчуванням") {
  console.log(message);
}

showMessage();
showMessage("Передане повідомлення");

// 5. Функція приймає string і callback, а потім викликає callback
function useStringValue(textValue, callback) {
  callback(textValue);
}

function showStringValue(value) {
  console.log("Отриманий рядок:", value);
}

useStringValue("JavaScript callback", showStringValue);

// 6. Переписуємо стрілкову функцію multiplyValues у звичайну
function multiplyThreeValues(a, b, c) {
  return a * b * c;
}

console.log("Множення трьох чисел:", multiplyThreeValues(2, 3, 4));
