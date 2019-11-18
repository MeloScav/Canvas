const canvas = document.getElementById("canvas"); // On récupère le canvas
const context = canvas.getContext("2d"); // On récupère le contexte

const width = canvas.getAttribute("width"); // largueur canvas
const height = canvas.getAttribute("height"); // hauteur canvas

const border = () => {
  context.stokeStyle = "green";
  context.strokeRect(0, 0, 500, 500); // Rectangle vide
};

const emptyTriangle = () => {
  context.lineWidth = "3"; // épaisseur ligne
  context.strokeStyle = "red"; // couleur ligne
  context.beginPath(); // début dessin
  context.moveTo(10, 10);
  context.lineTo(10, 100);
  context.lineTo(100, 10);
  context.closePath(); // fin dessin
  context.stroke(); // On dessine
};

const fullTriangle = () => {
  let lineargradient = context.createLinearGradient(100, 200, 150, 100); //dégradé
  lineargradient.addColorStop(0, "blue");
  lineargradient.addColorStop(1, "purple");

  context.fillStyle = lineargradient;
  context.beginPath();
  context.moveTo(100, 200);
  context.lineTo(200, 200);
  context.lineTo(150, 80);
  context.fill();
};

const emptyTriangle2 = () => {
  context.lineWidth = "5";
  context.strokeStyle = "green";
  context.lineJoin = "round"; // arrondi
  context.beginPath();
  context.moveTo(200, 300);
  context.lineTo(400, 300);
  context.lineTo(350, 200);
  context.closePath();
  context.stroke();
};

const draw = () => {
  border();
  emptyTriangle();
  fullTriangle();
  emptyTriangle2();
};

draw();
