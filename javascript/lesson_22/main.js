let result = document.getElementById("result");
let runButton = document.getElementById("run-button");

function addLine(text) {
  result.textContent += text + "\n";
}

// 1. Ланцюжок promise з трьома then
function runNumberPromise(startNumber) {
  Promise.resolve(startNumber)
    .then(function (number) {
      return number + 5;
    })
    .then(function (number) {
      return number * 3;
    })
    .then(function (number) {
      return number - 10;
    })
    .then(function (number) {
      addLine("Результат ланцюжка: " + number);
    })
    .catch(function (error) {
      addLine("Помилка: " + error);
    });
}

// 2. Promise перетворює текст у верхній регістр через 2 секунди
function upperTextLater(text) {
  return new Promise(function (resolve, reject) {
    if (text === "") {
      reject("Порожній рядок");
    }

    setTimeout(function () {
      resolve(text.toUpperCase());
    }, 2000);
  });
}

// 3. Promise порівнює два числа
function compareNumbers(firstNumber, secondNumber) {
  return new Promise(function (resolve, reject) {
    if (firstNumber === secondNumber) {
      reject("Числа рівні");
    } else if (firstNumber > secondNumber) {
      resolve("Перше число більше");
    } else {
      resolve("Друге число більше");
    }
  });
}

runButton.onclick = function () {
  result.textContent = "";

  addLine("1. Початкове число: 10");
  runNumberPromise(10);

  addLine("2. Текст для зміни регістру: promise text");
  upperTextLater("promise text")
    .then(function (text) {
      addLine("Верхній регістр: " + text);
    })
    .catch(function (error) {
      addLine("Помилка: " + error);
    });

  addLine("3. Порівнюємо числа: 8 і 12");
  compareNumbers(8, 12)
    .then(function (message) {
      addLine("Порівняння: " + message);
    })
    .catch(function (error) {
      addLine("Помилка: " + error);
    });
};
