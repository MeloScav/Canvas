const draw = () => {
  var canevas = document.getElementById("canevas");
  if (canevas.getContext) {
    const context = canevas.getContext("2d");

    const borderCanvas = () => {
      context.lineWidth = "30";
      context.beginPath();
      context.moveTo(0, 160);
      context.lineTo(0, 0);
      context.lineTo(600, 0);
      context.lineTo(600, 160);
      context.stroke();

      context.beginPath();
      context.moveTo(0, 220);
      context.lineTo(0, 400);
      context.lineTo(600, 400);
      context.lineTo(600, 220);
      context.stroke();
    };

    const eyesPacMan = () => {
      context.beginPath();
      context.fillStyle = "black";
      context.arc(25, 173, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
    };

    const pacMan = (x, y, r) => {
      context.beginPath();
      context.fillStyle = "rgb(235, 233, 0)";
      context.moveTo(x, y);
      context.arc(x, y, r, Math.PI / 7, -Math.PI / 7, false);
      context.lineTo(x, y);
      context.fill();
      eyesPacMan();
    };

    const wallTrap = () => {
      context.lineWidth = "15";
      // Obstacle en haut à gauche
      context.beginPath();
      context.moveTo(150, 0);
      context.lineTo(150, 60);
      context.stroke();

      // Obstacle en haut à droite
      context.beginPath();
      context.moveTo(450, 0);
      context.lineTo(450, 60);
      context.stroke();

      // Obstacle en bas à gauche
      context.beginPath();
      context.moveTo(150, 400);
      context.lineTo(150, 340);
      context.stroke();

      // Obstacle en bas à droite
      context.beginPath();
      context.moveTo(450, 400);
      context.lineTo(450, 340);
      context.stroke();

      //Box au centre
      context.beginPath();
      context.moveTo(220, 220);
      context.lineTo(380, 220);
      context.lineTo(380, 160);
      // context.lineTo(350, 160);
      context.moveTo(225, 227);
      context.lineTo(225, 160);
      // context.lineTo(255, 160);
      context.stroke();
    };

    // Obstacle en haut à gauche
    const obstacleTopLeft = () => {
      context.beginPath();
      context.lineWidth = "5";
      context.moveTo(80, 70);
      context.lineTo(80, 120);
      context.stroke();
    };
    // Obstacle en bas à gauche
    const obstacleBottomLeft = () => {
      context.beginPath();
      context.lineWidth = "20";
      context.moveTo(70, 280);
      context.lineTo(130, 280);
      context.lineTo(130, 230);
      context.stroke();
    };
    // Obstacle en haut à droite
    const obstacleTopRight = () => {
      context.beginPath();
      context.lineWidth = "8";
      context.moveTo(520, 70);
      context.lineTo(520, 120);
      context.stroke();
    };

    // Obstacle en haut au centre
    const obstacleTop = () => {
      context.beginPath();
      context.lineWidth = "15";
      context.moveTo(220, 70);
      context.lineTo(380, 70);
      context.stroke();
    };

    // Obstacle en bas au centre
    const obstacleBottom = () => {
      context.beginPath();
      context.lineWidth = "15";
      context.moveTo(220, 300);
      context.lineTo(380, 300);
      context.stroke();
    };

    // Obstacle en bas à droite
    const obstacleTBottomRight = () => {
      context.beginPath();
      context.lineWidth = "6";
      context.moveTo(520, 280);
      context.lineTo(520, 340);
      context.stroke();
    };

    const eyesGhost = (xCercle, yCercle) => {
      // Oeil blanc
      context.beginPath();
      context.fillStyle = "white";
      context.arc(xCercle - 4, yCercle, 3.5, 0, 2 * Math.PI);
      context.arc(xCercle + 5, yCercle, 3.5, 0, 2 * Math.PI);
      context.fill();

      // Pupille noir
      context.beginPath();
      context.fillStyle = "black";
      context.arc(xCercle - 2, yCercle, 1, 0, 2 * Math.PI);
      context.arc(xCercle + 7, yCercle, 1, 0, 2 * Math.PI);
      context.fill();
    };

    const cercleGhost = (x, y, colorGhost) => {
      // Tête cercle
      context.beginPath();
      context.fillStyle = colorGhost;
      context.arc(x, y, 10, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
    };

    const picGhost = (xCercle, yCercle, colorGhost) => {
      // Pic pour faire le bas du fantôme
      context.lineWidth = "3";
      context.beginPath();
      context.fillStyle = colorGhost;
      context.moveTo(xCercle - 10, yCercle + 2);
      context.lineTo(xCercle + 10, yCercle + 2);
      context.lineTo(xCercle + 8, yCercle + 20);
      context.lineTo(xCercle + 8, yCercle + 20);
      context.lineTo(xCercle + 4, yCercle + 15);
      context.lineTo(xCercle, yCercle + 20);
      context.lineTo(xCercle - 4, yCercle + 15);
      context.lineTo(xCercle - 8, yCercle + 20);
      context.lineTo(xCercle - 10, yCercle + 2);
      context.closePath();
      context.fill();
    };

    // Dessiner le fantôme
    const ghostDraw = (x, y, colorGhost) => {
      cercleGhost(x, y, colorGhost);
      picGhost(x, y, colorGhost);
      eyesGhost(x, y);
    };

    // Dessiner le tout
    const draw = () => {
      borderCanvas();
      wallTrap();
      obstacleTopLeft();
      obstacleBottomLeft();
      obstacleTopRight();
      obstacleTop();
      obstacleBottom();
      obstacleTBottomRight();
      ghostDraw(260, 170, "rgb(214, 123, 166)");
      ghostDraw(305, 170, "rgb(189, 0, 14)");
      ghostDraw(350, 170, "rgb(1, 237, 235)");
      pacMan(25, 180, 13);
    };
    draw();

    // for (var i = 0; i < 25; i++) {
    //   context.fillRect(30 + i * 16, 30, 4, 4);
    // }

    // for (i = 0; i < 6; i++) {
    //   context.fillRect(115, 51 + i * 16, 4, 4);
    // }

    // for (i = 0; i < 8; i++) {
    //   context.fillRect(51 + i * 16, 99, 4, 4);
    // }
  }
};
