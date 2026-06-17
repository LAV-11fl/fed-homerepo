let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// 1-3. Малюємо прямокутники, градієнт і лінію на canvas
function fillCanvasGradient(firstColor, secondColor) {
  let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, firstColor);
  gradient.addColorStop(1, secondColor);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.stroke();
}

document.getElementById("draw-button").onclick = function () {
  fillCanvasGradient("lightblue", "lightyellow");

  ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
  ctx.fillRect(40, 40, 120, 80);

  ctx.fillStyle = "rgba(0, 128, 0, 0.5)";
  ctx.fillRect(100, 70, 120, 80);

  ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
  ctx.fillRect(160, 100, 120, 80);

  drawLine(20, 210, 400, 20);
};

// 4-5. Створюємо SVG лінію і прямокутник через JavaScript
let svgContainer = document.getElementById("svg-container");

function createSvgLine(x1, y1, x2, y2, color, width) {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", width);
  return line;
}

function createSvgRect(width, height, fillColor, strokeColor, strokeWidth) {
  let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 80);
  rect.setAttribute("y", 50);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("fill", fillColor);
  rect.setAttribute("stroke", strokeColor);
  rect.setAttribute("stroke-width", strokeWidth);
  return rect;
}

document.getElementById("svg-button").onclick = function () {
  svgContainer.innerHTML = "";

  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", 420);
  svg.setAttribute("height", 180);

  svg.append(createSvgLine(20, 20, 380, 150, "red", 5));
  svg.append(createSvgRect(180, 80, "lightgreen", "darkgreen", 4));

  svgContainer.append(svg);
};
