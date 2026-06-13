// 1. Запитуємо три числа і знаходимо найбільше
let firstNumber = Number(prompt("Введіть перше число:"));
let secondNumber = Number(prompt("Введіть друге число:"));
let thirdNumber = Number(prompt("Введіть третє число:"));
let maxNumber = firstNumber;

if (secondNumber > maxNumber) {
  maxNumber = secondNumber;
}

if (thirdNumber > maxNumber) {
  maxNumber = thirdNumber;
}

console.log("Найбільше число:", maxNumber);

// 2. Визначаємо сезон за номером місяця
let monthNumber = Number(prompt("Введіть номер місяця від 1 до 12:"));
let season;

if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
  season = "зима";
} else if (monthNumber >= 3 && monthNumber <= 5) {
  season = "весна";
} else if (monthNumber >= 6 && monthNumber <= 8) {
  season = "літо";
} else if (monthNumber >= 9 && monthNumber <= 11) {
  season = "осінь";
} else {
  season = "невірний номер місяця";
}

console.log("Сезон:", season);

// 3. Перевіряємо, чи число додатнє, від'ємне або нуль
let userNumber = Number(prompt("Введіть число:"));

if (userNumber > 0) {
  console.log("Число додатнє");
} else if (userNumber < 0) {
  console.log("Число від'ємне");
} else {
  console.log("Число дорівнює нулю");
}

// 4. Визначаємо тип кута за допомогою тернарного оператора
let angleValue = Number(prompt("Введіть величину кута в градусах:"));
let angleType = angleValue < 90 ? "гострий" : "тупий";

console.log("Кут є:", angleType);

// 5. Визначаємо оцінку студента і використовуємо постфіксний інкремент
let studentScore = Number(prompt("Введіть оцінку за тест від 0 до 100:"));
let scoreBeforeIncrement = studentScore;
let grade;

if (studentScore >= 90) {
  grade = "A";
} else if (studentScore >= 80) {
  grade = "B";
} else if (studentScore >= 70) {
  grade = "C";
} else if (studentScore >= 60) {
  grade = "D";
} else {
  grade = "F";
}

studentScore++;
let isPassed = studentScore >= 60 ? "зарахований" : "не зарахований";

console.log("Оцінка до інкремента:", scoreBeforeIncrement);
console.log("Оцінка після інкремента:", studentScore);
console.log("Літерна оцінка:", grade);
console.log("Результат:", isPassed);
