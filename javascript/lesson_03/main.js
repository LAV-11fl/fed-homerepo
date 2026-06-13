// 1. Порівнюємо два числа і показуємо результат через alert
let number1 = 10;
let number2 = 15;
let areNumbersEqual = number1 === number2;

alert("Числа number1 і number2 рівні: " + areNumbersEqual);

// 2. Запитуємо число і перевіряємо, чи воно парне
let userNumber = prompt("Введіть число:");
let isEvenNumber = Number(userNumber) % 2 === 0;

console.log("Введене число парне:", isEvenNumber);

// 3. Запитуємо вік і перевіряємо доступ до ресурсу
let userAge = prompt("Введіть ваш вік:");
let isUnderAge = Number(userAge) < 18;

console.log("Користувач молодший за 18 років:", isUnderAge);

// 4. Рахуємо загальну вартість товару
let productPrice = prompt("Введіть ціну товару:");
let productQuantity = prompt("Введіть кількість товару:");
let totalPrice = Number(productPrice) * Number(productQuantity);

console.log("Загальна вартість товару:", totalPrice);

// 5. Рахуємо знижку 50% від вартості товару
let productCost = prompt("Введіть вартість товару для розрахунку знижки:");
let discountValue = Number(productCost) * 0.5;

alert("Знижка 50% становить: " + discountValue);
