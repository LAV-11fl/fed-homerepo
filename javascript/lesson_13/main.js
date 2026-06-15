// 1. Рахуємо елементи першого і другого рівня вкладення
let tree = document.getElementById("tree");
let firstLevelItems = tree.querySelectorAll(":scope > li");
let secondLevelItems = tree.querySelectorAll(":scope > li > ul > li");

console.log("Кількість елементів першого рівня:", firstLevelItems.length);
console.log("Кількість елементів другого рівня:", secondLevelItems.length);

// 2. Заповнюємо таблицю книгами з масиву
const booksArray = [
  {
    title: "Пригоди Аліси в Країні Див",
    year: 1865,
    rating: 4.5
  },
  {
    title: "1984",
    year: 1949,
    rating: 4.8
  },
  {
    title: "Гаррі Поттер і філософський камінь",
    year: 1997,
    rating: 4.7
  }
];

let booksTableBody = document.getElementById("books-table-body");

for (let book of booksArray) {
  let row = document.createElement("tr");

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.year}</td>
    <td>${book.rating}</td>
  `;

  booksTableBody.append(row);
}

// 3. Створюємо елементи за описом з масиву
const elementsArray = [
  { tag: "p", text: "Елемент 1" },
  { tag: "div", text: "Елемент 2" },
  { tag: "span", text: "Елемент 3" }
];

let elementsContainer = document.getElementById("elements-container");

function createElementFromObject(elementData) {
  let newElement = document.createElement(elementData.tag);
  newElement.textContent = elementData.text;

  return newElement;
}

for (let elementData of elementsArray) {
  elementsContainer.append(createElementFromObject(elementData));
}

// 4. Додаємо p перед контейнером або після нього
const prependAppendArray = [
  { text: "Елемент 1", usePrepend: true },
  { text: "Елемент 2", usePrepend: false },
  { text: "Елемент 3", usePrepend: true }
];

let prependAppendContainer = document.getElementById("prepend-append-container");

for (let item of prependAppendArray) {
  let paragraph = document.createElement("p");
  paragraph.textContent = item.text;

  if (item.usePrepend) {
    prependAppendContainer.before(paragraph);
  } else {
    prependAppendContainer.after(paragraph);
  }
}
