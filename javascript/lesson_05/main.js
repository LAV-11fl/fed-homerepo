// 1. Визначаємо тип геометричної фігури через switch
let figureName = prompt("Введіть фігуру: коло, квадрат або трикутник");

switch (figureName) {
  case "коло":
    console.log("Коло має 0 сторін");
    break;
  case "квадрат":
    console.log("Квадрат має 4 сторони");
    break;
  case "трикутник":
    console.log("Трикутник має 3 сторони");
    break;
  default:
    console.log("Такої фігури немає у списку");
}

// 2. Знаходимо суму парних чисел від 1 до 20 через while
let currentNumber = 1;
let evenSum = 0;

while (currentNumber <= 20) {
  if (currentNumber % 2 === 0) {
    evenSum += currentNumber;
  }

  currentNumber++;
}

console.log("Сума парних чисел від 1 до 20:", evenSum);

// 3. Виводимо таблицю множення для числа 5
let multiplicationNumber = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${multiplicationNumber} * ${i} = ${multiplicationNumber * i}`);
}

// 4. Виводимо числа від 10 до 1 у зворотному порядку
for (let i = 10; i >= 1; i--) {
  console.log("Зворотний лічильник:", i);
}

// 5. Перевіряємо, чи введене число парне або непарне
let userNumber = Number(prompt("Введіть число для перевірки парності:"));

for (let i = 0; i < 1; i++) {
  if (userNumber % 2 === 0) {
    console.log("Число парне");
  } else {
    console.log("Число непарне");
  }
}

// 6. Знаходимо перше парне число від 1 до 10 і зупиняємо цикл
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Перше парне число:", i);
    break;
  }
}

// 7. Виводимо тільки парні числа від 1 до 10, пропускаючи непарні
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log("Парне число:", i);
}
