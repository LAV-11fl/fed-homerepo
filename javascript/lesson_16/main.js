// 1. Міняємо колір блоку, коли мишка заходить і виходить
let hoverBlock = document.getElementById("hover-block");

hoverBlock.onmouseover = function () {
  hoverBlock.style.backgroundColor = "lightgreen";
};

hoverBlock.onmouseout = function () {
  hoverBlock.style.backgroundColor = "lightblue";
};

// 2. Показуємо своє меню замість стандартного меню браузера
let textBlock = document.getElementById("text-block");
let contextMenu = document.getElementById("context-menu");

textBlock.oncontextmenu = function (event) {
  event.preventDefault();
  contextMenu.style.display = "block";
  contextMenu.style.left = event.pageX + "px";
  contextMenu.style.top = event.pageY + "px";
};

document.getElementById("align-left").onclick = function () {
  textBlock.style.textAlign = "left";
};

document.getElementById("align-center").onclick = function () {
  textBlock.style.textAlign = "center";
};

document.getElementById("align-right").onclick = function () {
  textBlock.style.textAlign = "right";
};

document.getElementById("hide-text").onclick = function () {
  textBlock.style.display = "none";
  contextMenu.style.display = "none";
};

document.onclick = function () {
  contextMenu.style.display = "none";
};

// 3. Зображення трохи збільшується при наведенні
let hoverImage = document.getElementById("hover-image");

hoverImage.onmouseover = function () {
  hoverImage.style.width = "190px";
  hoverImage.style.borderColor = "green";
};

hoverImage.onmouseout = function () {
  hoverImage.style.width = "150px";
  hoverImage.style.borderColor = "transparent";
};

// 4. Рухаємо круг стрілками по полю
let player = document.getElementById("player");
let keyStatus = document.getElementById("key-status");
let playerLeft = 20;
let playerTop = 20;

function movePlayer() {
  player.style.left = playerLeft + "px";
  player.style.top = playerTop + "px";
}

document.onkeydown = function (event) {
  if (event.key === "ArrowRight" && playerLeft < 290) {
    playerLeft += 10;
  }

  if (event.key === "ArrowLeft" && playerLeft > 0) {
    playerLeft -= 10;
  }

  if (event.key === "ArrowDown" && playerTop < 150) {
    playerTop += 10;
  }

  if (event.key === "ArrowUp" && playerTop > 0) {
    playerTop -= 10;
  }

  keyStatus.textContent = "Клавіша натиснута: " + event.key;
  movePlayer();
};

document.onkeyup = function () {
  keyStatus.textContent = "Клавішу відпущено.";
};

// 5. Просте меню, яким керуємо з клавіатури
let keyboardMenu = document.getElementById("keyboard-menu");
let menuItems = keyboardMenu.querySelectorAll("li");
let selectedIndex = 0;

function showSelectedItem() {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("selected-item");
  }

  menuItems[selectedIndex].classList.add("selected-item");
}

document.addEventListener("keydown", function (event) {
  if (event.key === "m" || event.key === "M") {
    keyboardMenu.style.display = "block";
  }

  if (event.key === "c" || event.key === "C") {
    keyboardMenu.style.display = "none";
  }

  if (keyboardMenu.style.display === "block" && event.key === "ArrowDown") {
    selectedIndex++;

    if (selectedIndex >= menuItems.length) {
      selectedIndex = 0;
    }

    showSelectedItem();
  }

  if (keyboardMenu.style.display === "block" && event.key === "ArrowUp") {
    selectedIndex--;

    if (selectedIndex < 0) {
      selectedIndex = menuItems.length - 1;
    }

    showSelectedItem();
  }
});

// 6. Перетягуємо квадрат тільки всередині поля
let dragField = document.getElementById("drag-field");
let dragBox = document.getElementById("drag-box");
let isDragging = false;

dragBox.onmousedown = function () {
  isDragging = true;
};

document.onmouseup = function () {
  isDragging = false;
};

dragField.onmousemove = function (event) {
  if (isDragging === false) {
    return;
  }

  let fieldRect = dragField.getBoundingClientRect();
  let newLeft = event.clientX - fieldRect.left - 22;
  let newTop = event.clientY - fieldRect.top - 22;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newLeft > 275) {
    newLeft = 275;
  }

  if (newTop > 135) {
    newTop = 135;
  }

  dragBox.style.left = newLeft + "px";
  dragBox.style.top = newTop + "px";
};
