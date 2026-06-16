let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let operation = "5 плюс 7 = 3";

// 1. Шукаємо всі великі англійські літери
let capitalLetters = textStr.match(/[A-Z]/g);

// 2. Шукаємо всі числа у рядку
let numbers = operation.match(/\d+/g);

// 3. Шукаємо слова, у яких рівно 5 літер
let fiveLetterWords = textStr.match(/\b[a-zA-Z]{5}\b/g);

document.getElementById("source-text").textContent = textStr;
document.getElementById("operation-text").textContent = operation;
document.getElementById("capital-result").textContent = capitalLetters.join(", ");
document.getElementById("number-result").textContent = numbers.join(", ");
document.getElementById("word-result").textContent = fiveLetterWords.join(", ");

console.log("Великі літери:", capitalLetters);
console.log("Числа:", numbers);
console.log("Слова з 5 літер:", fiveLetterWords);
