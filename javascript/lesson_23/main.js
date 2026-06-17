let output = document.getElementById("output");

function clearOutput() {
  output.innerHTML = "";
}

function addText(text) {
  let p = document.createElement("p");
  p.textContent = text;
  output.append(p);
}

function showPlanetCard(planet) {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = "<h3>" + planet.name + "</h3>";
  card.innerHTML += "<p>Клімат: " + planet.climate + "</p>";
  card.innerHTML += "<p>Населення: " + planet.population + "</p>";

  for (let i = 0; i < planet.residents.length; i++) {
    let link = document.createElement("a");
    link.href = planet.residents[i];
    link.textContent = "Resident " + (i + 1);
    link.target = "_blank";
    card.append(link);
    card.append(document.createElement("br"));
  }

  output.append(card);
}

// 1. Отримуємо список користувачів
document.getElementById("load-users").onclick = function () {
  clearOutput();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      for (let i = 0; i < users.length; i++) {
        addText(users[i].name + " - " + users[i].email);
      }
    });
};

// 2. Отримуємо одного користувача
document.getElementById("load-user").onclick = function () {
  clearOutput();

  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (user) {
      addText("Ім'я: " + user.name);
      addText("Нікнейм: " + user.username);
      addText("Email: " + user.email);
    });
};

// 3. Отримуємо пости користувача
document.getElementById("load-posts").onclick = function () {
  clearOutput();

  fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      for (let i = 0; i < posts.length; i++) {
        addText(posts[i].title);
      }
    });
};

// 4. Отримуємо планету зі SWAPI
document.getElementById("load-planet").onclick = function () {
  clearOutput();
  addText("Завантажуємо планету...");

  fetch("https://swapi.dev/api/planets/1/")
    .then(function (response) {
      return response.json();
    })
    .then(function (planet) {
      clearOutput();
      showPlanetCard(planet);
    })
    .catch(function () {
      // Якщо SWAPI тимчасово не відповідає, показуємо приклад таких самих даних
      clearOutput();
      addText("SWAPI зараз не відповідає, тому показано локальний приклад.");

      let localPlanet = {
        name: "Tatooine",
        climate: "arid",
        population: "200000",
        residents: [
          "https://swapi.dev/api/people/1/",
          "https://swapi.dev/api/people/2/"
        ]
      };

      showPlanetCard(localPlanet);
    });
};
