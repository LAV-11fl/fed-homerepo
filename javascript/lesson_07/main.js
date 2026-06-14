// push: додаємо елементи в кінець масиву
let pushArray = [];
pushArray.push("HTML");
pushArray.push("CSS");
pushArray.push("JavaScript");
console.log("pushArray:", pushArray);

function addElementToEnd(array, element) {
  array.push(element);
  return array;
}

console.log("addElementToEnd:", addElementToEnd(pushArray, "React"));

// pop: видаляємо останній елемент масиву
let popArray = ["понеділок", "вівторок", "середа"];
let removedLastDay = popArray.pop();
console.log("Після pop:", popArray);
console.log("Видалений елемент:", removedLastDay);

function removeLastElement(array) {
  array.pop();
  return array;
}

console.log("removeLastElement:", removeLastElement(["один", "два", "три"]));

// unshift: додаємо елементи на початок масиву
let unshiftArray = ["другий", "третій"];
unshiftArray.unshift("перший");
console.log("Після unshift:", unshiftArray);

function addElementToStart(array, element) {
  array.unshift(element);
  return array;
}

console.log("addElementToStart:", addElementToStart(["B", "C"], "A"));

// shift: видаляємо перший елемент масиву
let shiftArray = ["перший", "другий", "третій"];
let removedFirstItem = shiftArray.shift();
console.log("Після shift:", shiftArray);
console.log("Видалений перший елемент:", removedFirstItem);

function removeFirstElement(array) {
  array.shift();
  return array;
}

console.log("removeFirstElement:", removeFirstElement([10, 20, 30]));

// fill: заповнюємо масив одним значенням
let fillArray = new Array(5);
fillArray.fill("JS");
console.log("Після fill:", fillArray);

function fillPartOfArray(array, value, startIndex, endIndex) {
  array.fill(value, startIndex, endIndex);
  return array;
}

console.log("fillPartOfArray:", fillPartOfArray([1, 2, 3, 4, 5], 0, 1, 4));

// splice: видаляємо елементи із середини масиву
let spliceArray = ["a", "b", "c", "d", "e"];
spliceArray.splice(1, 2);
console.log("Після splice:", spliceArray);

function removeElements(array, index, count) {
  array.splice(index, count);
  return array;
}

console.log("removeElements:", removeElements(["red", "green", "blue", "white"], 1, 2));

// reverse: змінюємо порядок елементів на зворотний
let reverseArray = [1, 2, 3, 4, 5];
reverseArray.reverse();
console.log("Після reverse:", reverseArray);

function reverseElements(array) {
  array.reverse();
  return array;
}

console.log("reverseElements:", reverseElements(["first", "second", "third"]));

// concat: об'єднуємо два масиви в новий
let firstConcatArray = ["HTML", "CSS"];
let secondConcatArray = ["JavaScript", "React"];
let allTechnologies = firstConcatArray.concat(secondConcatArray);
console.log("Після concat:", allTechnologies);

function connectArrays(firstArray, secondArray) {
  return firstArray.concat(secondArray);
}

console.log("connectArrays:", connectArrays([1, 2], [3, 4]));

// includes: перевіряємо, чи є елемент у масиві
let includesArray = ["apple", "banana", "orange"];
let hasBanana = includesArray.includes("banana");
console.log("Масив містить banana:", hasBanana);

function hasElement(array, element) {
  return array.includes(element);
}

console.log("hasElement:", hasElement(["Kyiv", "Lviv", "Odesa"], "Lviv"));

// filter: створюємо новий масив тільки з парними числами
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = numberArray.filter(function (number) {
  return number % 2 === 0;
});
console.log("Парні числа:", evenNumbers);

function filterArray(array, condition) {
  return array.filter(condition);
}

let bigNumbers = filterArray([5, 12, 8, 20, 3], function (number) {
  return number > 10;
});
console.log("Числа більше 10:", bigNumbers);

// map: створюємо новий масив зі зміненими значеннями
let mapNumbers = [1, 2, 3, 4];
let squareNumbers = mapNumbers.map(function (number) {
  return number * number;
});
console.log("Квадрати чисел:", squareNumbers);

function transformArray(array, transformer) {
  return array.map(transformer);
}

let stringValues = transformArray([10, 20, 30], function (number) {
  return `Значення: ${number}`;
});
console.log("Рядки зі значеннями:", stringValues);
