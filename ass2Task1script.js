const svg = document.getElementById("drawArea");

let isDrawing = false;
let currentLine = null;

svg.addEventListener("mousedown", function (e) {
  isDrawing = true;

  currentLine = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline"
  );

  currentLine.setAttribute("fill", "none");
  currentLine.setAttribute("stroke", "black");
  currentLine.setAttribute("stroke-width", "2");
  currentLine.setAttribute("points", "");

  svg.appendChild(currentLine);
});

svg.addEventListener("mousemove", function (e) {
  if (!isDrawing) return;

  const rect = svg.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  let points = currentLine.getAttribute("points");
  points += `${x},${y} `;
  currentLine.setAttribute("points", points);
});

svg.addEventListener("mouseup", function () {
  isDrawing = false;
  currentLine = null;
});

svg.addEventListener("mouseleave", function () {
  isDrawing = false;
  currentLine = null;
});

