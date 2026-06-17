import { add, subtract, multiply, divide } from "./mathOperations.js";
import { makeUpperCase, reverseText } from "./stringUtilities.js";

let output = document.getElementById("output");

function addLine(text) {
  output.textContent += text + "\n";
}

// 1-3. Дані завантажуються через async/await
async function loadUser(userId) {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
  return response.json();
}

async function loadFilm(filmId) {
  let response = await fetch("https://swapi.dev/api/films/" + filmId + "/");
  return response.json();
}

async function loadPlanet(planetId) {
  let response = await fetch("https://swapi.dev/api/planets/" + planetId + "/");
  return response.json();
}

document.getElementById("load-data").onclick = async function () {
  output.textContent = "";

  try {
    let user = await loadUser(1);
    addLine("Користувач: " + user.name + ", " + user.email);

    let film = await loadFilm(1);
    addLine("Фільм: " + film.title + ", дата виходу: " + film.release_date);

    let planet = await loadPlanet(1);
    addLine("Планета: " + planet.name + ", клімат: " + planet.climate);
  } catch (error) {
    addLine("Помилка завантаження даних");
  }
};

// 4-5. Перевіряємо імпортовані функції
document.getElementById("run-modules").onclick = function () {
  output.textContent = "";
  addLine("5 + 3 = " + add(5, 3));
  addLine("5 - 3 = " + subtract(5, 3));
  addLine("5 * 3 = " + multiply(5, 3));
  addLine("6 / 3 = " + divide(6, 3));
  addLine(makeUpperCase("hello modules"));
  addLine(reverseText("JavaScript"));
};
