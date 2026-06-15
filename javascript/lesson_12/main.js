// 1. Вибираємо елементи різними способами
let headerElement = document.getElementById("page-header");
let blocksByClass = document.getElementsByClassName("site-block");
let sectionsByTag = document.getElementsByTagName("section");

console.log("Header by id:", headerElement);
console.log("Elements by class:", blocksByClass);
console.log("Sections by tag:", sectionsByTag);

// 2. Вибираємо конкретні елементи списку через querySelector
let firstListItem = document.querySelector("#simple-list li:first-child");
let lastListItem = document.querySelector("#simple-list li:last-child");
let thirdListItem = document.querySelector("#simple-list li:nth-child(3)");

console.log("Перший елемент:", firstListItem);
console.log("Останній елемент:", lastListItem);
console.log("Третій елемент:", thirdListItem);

// 3. Вибираємо всі li та конвертуємо NodeList у масив
let allListItems = document.querySelectorAll("#simple-list li");
let listItemsArray = Array.from(allListItems);

console.log("Усі li:", allListItems);
console.log("Масив li:", listItemsArray);

// 4. Перевіряємо селектори з умови завдання
let navListItems = document.querySelectorAll("ul.nav > li");
let secondListItems = document.querySelectorAll("li:nth-child(2)");

console.log("Елементи ul.nav > li:", navListItems);
console.log("Другі елементи li:", secondListItems);
