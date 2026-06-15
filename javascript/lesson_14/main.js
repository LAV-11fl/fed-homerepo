// 1-2. Створюємо header і задаємо йому стилі через JS
let header = document.createElement("header");
header.style.padding = "50px";
header.style.backgroundColor = "yellow";
header.style.textAlign = "center";

document.body.prepend(header);

// 3-4. Створюємо меню з масиву і додаємо target="_blank"
const menuData = [
  { name: "Головна", url: "/" },
  { name: "Про нас", url: "/about" },
  { name: "Послуги", url: "/services" },
  { name: "Контакти", url: "/contacts" }
];

for (let menuItem of menuData) {
  let link = document.createElement("a");
  link.textContent = menuItem.name;
  link.href = menuItem.url;
  link.target = "_blank";
  link.style.margin = "0 15px";

  header.append(link);
}

// 5-6. Створюємо flex-контейнер і 50 круглих div
let circlesContainer = document.createElement("div");
circlesContainer.style.display = "flex";
circlesContainer.style.flexWrap = "wrap";
circlesContainer.style.gap = "10px";
circlesContainer.style.marginTop = "30px";

document.body.append(circlesContainer);

for (let i = 1; i <= 50; i++) {
  let circle = document.createElement("div");
  circle.classList.add("circle-elemt");
  circle.style.borderRadius = "50%";
  circle.style.width = "50px";
  circle.style.height = "50px";

  // Додаткове завдання: для кожного кола робимо інший колір
  circle.style.backgroundColor = `hsl(${i * 7}, 80%, 60%)`;

  circlesContainer.append(circle);
}
