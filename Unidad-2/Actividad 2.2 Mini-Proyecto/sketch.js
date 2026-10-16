
let flores = [];
let robotX;
let robotY;
let giro = 0;
let sirenaActiva = true;


function setup() {
  createCanvas(windowWidth, windowHeight);

  robotX = width / 2;
  robotY = height * 0.84;

  for (let i = 0; i < 45; i++) {
    flores.push({
      x: random(width),
      y: random(height * 0.5),
      tam: random(2, 4)
    });
  }
}

function draw() {
  background(30, 15, 55);

  dibujarEstrellas();
  dibujarAltar();
  dibujarFlores();

  // veladoras animadas con movimiento 
  dibujarVela(width * 0.25, height * 0.58);
  dibujarVela(width * 0.75, height * 0.58);

  // aqui las calaveritas 
  dibujarCalavera(width * 0.34, height * 0.70, 0.8);
  dibujarCalavera(width * 0.66, height * 0.70, 0.8);

  // pan 
  dibujarPan(width * 0.5, height * 0.76);



  // aqui en carrito sigue lo que es el mouse 
  let limiteXMin = min(45, width / 2);
  let limiteXMax = max(width - 45, width / 2);

  let limiteYMin = min(height * 0.78, height / 2);
  let limiteYMax = max(height * 0.92, height / 2);

  robotX = lerp(
    robotX,
    constrain(mouseX, limiteXMin, limiteXMax),
    0.06
  );

  robotY = lerp(
    robotY,
    constrain(mouseY, limiteYMin, limiteYMax),
    0.04
  );

  push();
  translate(robotX, robotY);

  let escala = constrain(width / 900, 0.55, 1.1);
  escala *= 1 + sin(frameCount * 0.04) * 0.025;
  scale(escala);

  dibujarRobot();
  pop();

  giro += 0.04;
}

// =====================================
// aqui es donde esta el fondo y las estrellas 
// =====================================

function dibujarEstrellas() {
  noStroke();

  for (let i = 0; i < flores.length; i++) {
    let estrella = flores[i];
    let brillo = 150 + 100 * sin(frameCount * 0.04 + i);

    fill(255, 230, 160, brillo);
    circle(
      estrella.x,
      estrella.y,
      estrella.tam * 1.5
    );
  }
}

// =====================================
// la estructura del de lo que es el altar 
// =====================================

function dibujarAltar() {
  rectMode(CENTER);
  noStroke();

  fill(105, 45, 80);
  rect(
    width / 2,
    height * 0.84,
    width * 0.72,
    height * 0.12
  );

  fill(160, 65, 90);
  rect(
    width / 2,
    height * 0.73,
    width * 0.62,
    height * 0.12
  );

  fill(225, 135, 65);
  rect(
    width / 2,
    height * 0.62,
    width * 0.52,
    height * 0.10
  );

  // el mantel 
  fill(255, 195, 100);
  rect(
    width / 2,
    height * 0.88,
    width * 0.74,
    8
  );
}

// =====================================
// las flores de muerto
// =====================================

function dibujarFlores() {
  let escala = constrain(width / 900, 0.55, 1.1);

  for (let i = 0; i < 18; i++) {
    let lado = i % 2 === 0 ? -1 : 1;
    let x = width / 2 +
      lado * (width * 0.20 + (i % 3) * 12);

    let y = height * 0.60 + (i % 4) * 13;

    push();
    translate(x, y);
    scale(escala);

    dibujarFlor();

    pop();
  }
}

function dibujarFlor() {
  noStroke();

  // aqui es como el petalo que gira al rededor 
  for (let i = 0; i < 12; i++) {
    push();

    rotate(TWO_PI * i / 12);

    fill(
      i % 2 === 0
        ? color(255, 145, 20)
        : color(255, 190, 25)
    );

    ellipse(0, -9, 9, 17);

    pop();
  }

  fill(120, 65, 20);
  circle(0, 0, 10);
}

// =====================================
// aqui es donde las velas con la llama animadas
// =====================================

function dibujarVela(x, y) {
  push();
  translate(x, y);

  rectMode(CENTER);
  noStroke();

  fill(255, 225, 170);
  rect(0, 0, 19, 65, 4);

  fill(255, 190, 60);
  rect(0, 20, 23, 7, 2);

  // la llama de la vela cambia como que de tamaño
  let parpadeo = sin(frameCount * 0.15 + x) * 3;

  push();
  translate(0, -39);

  fill(255, 150, 20);
  ellipse(0, parpadeo, 13, 22);

  fill(255, 235, 120);
  ellipse(0, parpadeo + 3, 6, 13);

  pop();
  pop();
}

// =====================================
// aqui las calaveritas del altar 
// =====================================

function dibujarCalavera(x, y, tam) {
  push();
  translate(x, y);
  scale(tam);

  noStroke();

  fill(255, 240, 210);
  ellipse(0, 0, 42, 40);

  rectMode(CENTER);
  rect(0, 15, 24, 12, 4);

  // ojos
  fill(100, 35, 100);
  circle(-10, -3, 12);
  circle(10, -3, 12);

  // nariz
  fill(45);
  triangle(-3, 5, 3, 5, 0, 10);

  // decoración frontal
  fill(230, 55, 100);
  circle(0, -15, 7);

  fill(45);
  for (let i = -7; i <= 7; i += 7) {
    rect(i, 17, 2, 6);
  }

  pop();
}

// =====================================
// pan 
// =====================================

function dibujarPan(x, y) {
  push();
  translate(x, y);

  noStroke();

  fill(190, 105, 45);
  ellipse(0, 0, 62, 30);

  fill(230, 165, 90);
  ellipse(0, -3, 54, 24);

  fill(245, 205, 140);
  ellipse(0, -5, 13, 13);
  ellipse(-9, -7, 9, 16);
  ellipse(9, -7, 9, 16);

  pop();
}


// =====================================
// el carrito 
// =====================================

function dibujarRobot() {
  rectMode(CENTER);
  noStroke();

  // sombra
  fill(30, 15, 25, 100);
  ellipse(0, 25, 100, 14);

  // carrocería
  fill(235);
  rect(0, 0, 86, 27, 7);

  // ralla azul 
  fill(35, 80, 190);
  rect(0, 4, 80, 8);

  // ventanas
  fill(40, 80, 100);

  quad(-27, -11, -16, -22, 0, -22, 0, -11);
  quad(3, -22, 18, -22, 29, -11, 3, -11);

  // focos delanteros 
  noStroke();
  fill(255, 230, 70);
  circle(33, 0, 7);

  fill(255, 40, 40);
  circle(-33, 0, 7);

  // ruedas dentro del carro
  dibujarRuedaRobot(-24, 15);
  dibujarRuedaRobot(24, 15);

  
  if (sirenaActiva) {
    let alternar = frameCount % 30 < 15;

    fill(alternar ? color(255, 40, 40) :
                    color(50, 100, 255));
    ellipse(-7, -19, 8, 6);

    fill(alternar ? color(50, 100, 255) :
                    color(255, 40, 40));
    ellipse(7, -19, 8, 6);
  } else {
    fill(130);
    ellipse(-7, -19, 8, 6);
    ellipse(7, -19, 8, 6);
  }
}

// =====================================
// aqui es donde las ruedas giran al mismo centro 
// =====================================

function dibujarRuedaRobot(x, y) {
  push();

  // mueve el origen al centro de la rueda
  translate(x, y);

  // Gira alrededor 
  rotate(giro);

  noStroke();
  fill(30);
  circle(0, 0, 21);

  fill(180);
  circle(0, 0, 10);

  // rayos anidados
  stroke(70);
  strokeWeight(2);

  for (let i = 0; i < 4; i++) {
    push();

    rotate(i * HALF_PI);
    line(-4, 0, 4, 0);

    pop();
  }

  pop();
}

// =====================================
// la interactividad del mouse 
// =====================================

function mousePressed() {
  sirenaActiva = !sirenaActiva;
}

// =====================================
// cambia de tamaño
// =====================================

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  robotX = constrain(
    robotX,
    min(45, width / 2),
    max(width - 45, width / 2)
  );

  robotY = constrain(
    robotY,
    min(height * 0.78, height / 2),
    max(height * 0.92, height / 2)
  );
}
