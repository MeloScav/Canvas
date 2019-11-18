const canvas = document.getElementById("canvas"); // On récupère le canvas
const context = canvas.getContext("2d"); // On récupère le contexte

const width = canvas.getAttribute("width"); // largueur canvas
const height = canvas.getAttribute("height"); // hauteur canvas

const border = () => {
  context.stokeStyle = "green";
  context.strokeRect(0, 0, 500, 500); // Rectangle vide
};

const fullTriangle = () => {
  context.stokeStyle = "red";
  context.beginPath();
  context.moveTo(10, 10);
  context.lineTo(10, 100);
  context.lineTo(100, 10);
  context.closePath();
  context.stroke();
};

const draw = () => {
  border();
  fullTriangle();
};

draw();
