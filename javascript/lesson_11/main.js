// 1. Об'єднуємо два масиви через spread
let firstNumbers = [1, 2, 3];
let secondNumbers = [4, 5, 6];
let allNumbers = [...firstNumbers, ...secondNumbers];

console.log("Об'єднаний масив:", allNumbers);

// 2. Перший аргумент окремо, решта аргументів збираються в масив
function showTextAndOtherValues(text, ...otherValues) {
  console.log("Рядок:", text);
  console.log("Інші аргументи:", otherValues);
}

showTextAndOtherValues("Привіт", 10, true, "JS");

// 3. Обчислюємо середнє значення будь-якої кількості чисел
function getAverageValue(...numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum / numbers.length;
}

console.log("Середнє значення:", getAverageValue(10, 20, 30, 40));

// 4. Перевіряємо тип значення через typeof
function showValueType(value) {
  console.log(`Значення "${value}" має тип:`, typeof value);
}

showValueType(25);
showValueType("JavaScript");
showValueType(false);

// 5. Виводимо окреме повідомлення для числа, рядка або іншого типу
let testValue = "Домашня робота";

if (typeof testValue === "number") {
  console.log("Це число");
} else if (typeof testValue === "string") {
  console.log("Це рядок");
} else {
  console.log("Це інший тип");
}
