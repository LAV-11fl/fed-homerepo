// 1. Гра "Камінь, ножиці, папір"
let userChoice = prompt("Оберіть: камінь, ножиці або папір");
let computerVariants = ["камінь", "ножиці", "папір"];
let computerChoice = computerVariants[Math.floor(Math.random() * computerVariants.length)];

if (userChoice === computerChoice) {
  alert(`Нічия! Комп'ютер теж обрав: ${computerChoice}`);
} else if (
  (userChoice === "камінь" && computerChoice === "ножиці") ||
  (userChoice === "ножиці" && computerChoice === "папір") ||
  (userChoice === "папір" && computerChoice === "камінь")
) {
  alert(`Ви перемогли! Комп'ютер обрав: ${computerChoice}`);
} else {
  alert(`Ви програли. Комп'ютер обрав: ${computerChoice}`);
}

// 2. Math.min та Math.max
function getMinValue(a, b) {
  return Math.min(a, b);
}

function getMaxValue(a, b) {
  return Math.max(a, b);
}

console.log("Менше число:", getMinValue(8, 15));
console.log("Більше число:", getMaxValue(8, 15));

// 3. Math.pow підносить число до ступеня
function getPowerValue(number, power) {
  return Math.pow(number, power);
}

console.log("2 у 5 ступені:", getPowerValue(2, 5));

// 4. Math.floor та Math.ceil округлюють дробове число
function roundDown(number) {
  return Math.floor(number);
}

function roundUp(number) {
  return Math.ceil(number);
}

let randomFraction = Math.random() * 10;
console.log("Випадкове дробове число:", randomFraction);
console.log("Округлення вниз:", roundDown(randomFraction));
console.log("Округлення вгору:", roundUp(randomFraction));

// 5. Повертаємо рік народження за віком користувача
function getBirthYear(age) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return currentYear - age;
}

let userAge = Number(prompt("Введіть свій вік:"));
console.log("Орієнтовний рік народження:", getBirthYear(userAge));

// 6. Форматуємо поточну дату і час через toLocaleString
let currentDateTime = new Date();
let localeDateTime = currentDateTime.toLocaleString();
console.log("Поточна дата і час:", localeDateTime);

// 7. Розбиваємо рядок на слова і переводимо слова у верхній регістр
let wordsString = "javascript html css react";
let wordsArray = wordsString.split(" ");
let upperCaseWords = wordsArray.map(function (word) {
  return word.toUpperCase();
});

console.log("Слова у верхньому регістрі:", upperCaseWords);
