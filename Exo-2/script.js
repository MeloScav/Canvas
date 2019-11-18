const canvas = document.getElementById("canvas"); // On récupère le canvas

const context = canvas.getContext("2d"); // On récupère le contexte

const width = canvas.getAttribute("width"); // largueur canvas
const height = canvas.getAttribute("height"); // hauteur canvas

const drawRect = () => {
  b = 500;
  a = 1.5 * b;
  context.fillStyle = "red";
  context.fillRect(0, 0, a, b); // Rectangle vide
};
drawRect();
