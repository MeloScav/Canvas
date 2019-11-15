const canvas = document.getElementById("canvas"); // On récupère le canvas
const context = canvas.getContext("2d"); // On récupère le contexte

const drawImg = () => {
  const width = canvas.getAttribute("width"); // largueur canvas
  const height = canvas.getAttribute("height"); // hauteur canvas
  const img = new Image(); // création image
  img.src = "chaton.jpg"; // chemin image
  img.onload = () => {
    // chargement
    context.drawImage(
      // on dessine
      img, // image
      200, // découpage image
      10,
      400, //largueur image
      400, //hauteur image
      width / 2 - 100, // pour mettre au centre : (taille canvas /2) - (taille image /2)
      height / 2 - 100,
      200, // taille image
      200
    );
  };
};

const drawBorder = () => {
  context.stokeStyle = "green";
  context.strokeRect(0, 0, 500, 500); // Rectangle vide
};

const drawRect = () => {
  context.font = "20px serif";
  context.fillText("Exercice 1", 10, 20); // texte plein

  context.fillStyle = "red";
  context.fillRect(5, 70, 50, 50); // Rectangle plein

  context.fillStyle = "blue";
  context.fillRect(80, 70, 50, 50);

  context.fillStyle = "green";
  context.fillRect(150, 70, 50, 50);

  context.fillStyle = "yellow";
  context.fillRect(220, 70, 50, 50);
};

const draw = () => {
  drawRect();
  drawImg();
  drawBorder();
};

draw();
