const draw = () => {
  var canevas = document.getElementById("canevas");
  if (canevas.getContext) {
    const context = canevas.getContext("2d");

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

    const pacMan = (x, y, r) => {
      context.beginPath();
      context.moveTo(x, y);
      context.arc(x, y, r, Math.PI / 7, -Math.PI / 7, false);
      context.lineTo(x, y);
      context.fill();
    };
    pacMan(25, 180, 13);

    const wallTrap = () => {
      context.lineWidth = "15";
      context.beginPath();
      context.moveTo(150, 0);
      context.lineTo(150, 60);
      context.stroke();

      context.beginPath();
      context.moveTo(450, 0);
      context.lineTo(450, 60);
      context.stroke();

      context.beginPath();
      context.moveTo(150, 400);
      context.lineTo(150, 340);
      context.stroke();

      context.beginPath();
      context.moveTo(450, 400);
      context.lineTo(450, 340);
      context.stroke();
    };
    wallTrap();

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
