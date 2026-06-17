// 1. Змінюємо фон сторінки після вибору radio button
let colorRadios = document.querySelectorAll("input[name='page-color']");

for (let i = 0; i < colorRadios.length; i++) {
  colorRadios[i].onchange = function () {
    document.body.style.backgroundColor = colorRadios[i].value;
  };
}

// 2. Показуємо всі вибрані хобі
let hobbyCheckboxes = document.querySelectorAll(".hobby");
let hobbyResult = document.getElementById("hobby-result");

function showHobbies() {
  let selectedHobbies = [];

  for (let i = 0; i < hobbyCheckboxes.length; i++) {
    if (hobbyCheckboxes[i].checked) {
      selectedHobbies.push(hobbyCheckboxes[i].value);
    }
  }

  if (selectedHobbies.length === 0) {
    hobbyResult.textContent = "Обрані хобі: немає";
  } else {
    hobbyResult.textContent = "Обрані хобі: " + selectedHobbies.join(", ");
  }
}

for (let i = 0; i < hobbyCheckboxes.length; i++) {
  hobbyCheckboxes[i].onchange = showHobbies;
}

// 3. Виводимо коротку інформацію про країну
let countrySelect = document.getElementById("country-select");
let countryInfo = document.getElementById("country-info");

countrySelect.onchange = function () {
  if (countrySelect.value === "ukraine") {
    countryInfo.textContent = "Україна: столиця Київ, населення приблизно 37 млн.";
  } else if (countrySelect.value === "poland") {
    countryInfo.textContent = "Польща: столиця Варшава, населення приблизно 38 млн.";
  } else if (countrySelect.value === "germany") {
    countryInfo.textContent = "Німеччина: столиця Берлін, населення приблизно 84 млн.";
  } else {
    countryInfo.textContent = "Інформація з'явиться тут.";
  }
};

// 4. Дякуємо користувачу за оцінку
let ratingRadios = document.querySelectorAll("input[name='rating']");
let ratingMessage = document.getElementById("rating-message");

for (let i = 0; i < ratingRadios.length; i++) {
  ratingRadios[i].onchange = function () {
    ratingMessage.textContent = "Дякуємо за вашу оцінку: " + ratingRadios[i].value;
  };
}

// 5. Рахуємо вартість піци за розміром і додатками
let pizzaName = document.getElementById("pizza-name");
let pizzaSizes = document.querySelectorAll("input[name='pizza-size']");
let toppings = document.querySelectorAll(".topping");
let pizzaResult = document.getElementById("pizza-result");

function countPizzaPrice() {
  if (pizzaName.value === "") {
    pizzaResult.textContent = "Оберіть піцу";
    return;
  }

  let price = 100;

  for (let i = 0; i < pizzaSizes.length; i++) {
    if (pizzaSizes[i].checked && pizzaSizes[i].value === "middle") {
      price += 50;
    }

    if (pizzaSizes[i].checked && pizzaSizes[i].value === "big") {
      price += 100;
    }
  }

  for (let i = 0; i < toppings.length; i++) {
    if (toppings[i].checked) {
      price += 25;
    }
  }

  pizzaResult.textContent = "Піца: " + pizzaName.value + ". Ціна: " + price + " грн";
}

pizzaName.onchange = countPizzaPrice;

for (let i = 0; i < pizzaSizes.length; i++) {
  pizzaSizes[i].onchange = countPizzaPrice;
}

for (let i = 0; i < toppings.length; i++) {
  toppings[i].onchange = countPizzaPrice;
}
