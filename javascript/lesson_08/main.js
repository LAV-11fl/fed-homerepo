// 1. Переписуємо приклади з var на let та const
for (let i = 0; i < 5; i++) {
  console.log(i);
}

const message = "test";

function example() {
  if (true) {
    let message = "Hello, world!";
    console.log(message);
  }

  console.log(message);
}

example();

// 2. Виводимо значення об'єкта через for in
const person = {
  name: "John",
  age: 25,
  occupation: "Developer"
};

for (let key in person) {
  console.log(person[key]);
}

// 3. Виводимо значення з об'єктів у масиві через for of та for in
const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 22, grade: "B" },
  { name: "Charlie", age: 21, grade: "C" }
];

for (let student of students) {
  for (let key in student) {
    console.log(student[key]);
  }
}
