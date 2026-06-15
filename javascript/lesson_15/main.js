// 1. Змінюємо колір тексту при кліку на кнопку
let changeColorButton = document.getElementById("change-color-button");
let colorText = document.getElementById("color-text");

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

changeColorButton.onclick = function () {
  colorText.style.color = getRandomColor();
};

// 2. Збільшуємо блок у 2 рази після подвійного кліку
let doubleSizeBox = document.getElementById("double-size-box");

doubleSizeBox.ondblclick = function () {
  doubleSizeBox.style.width = "200px";
  doubleSizeBox.style.height = "200px";
};

// 3. Лічильник працює до значення 10, потім обробник вимикається
let counterButton = document.getElementById("counter-button");
let counterValue = document.getElementById("counter-value");
let counter = 0;

function increaseCounter() {
  counter++;
  counterValue.textContent = counter;

  if (counter > 10) {
    counterButton.removeEventListener("click", increaseCounter);
  }
}

counterButton.addEventListener("click", increaseCounter);

// 4. Створюємо 10 div і видаляємо кожен після кліку
let removeContainer = document.getElementById("remove-container");

for (let i = 1; i <= 10; i++) {
  let removeItem = document.createElement("div");
  removeItem.textContent = `Елемент ${i}`;

  removeItem.onclick = function () {
    removeItem.remove();
  };

  removeContainer.append(removeItem);
}

// 5. Через event.target визначаємо, яка кнопка отримала клік
let blockContainer = document.querySelector(".blockContainer");

blockContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    alert(`Клік отримала кнопка з класом: ${event.target.className}`);
  }
});
