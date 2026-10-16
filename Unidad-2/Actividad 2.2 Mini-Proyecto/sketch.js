
let flores = [];
let estrellasBrillantes = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

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
  dibujarPapelPicado();
  dibujarAltar();
  dibujarFlores();

  dibujarVela(width * 0.25, height * 0.58);
  dibujarVela(width * 0.75, height * 0.58);

  dibujarCalavera(width * 0.34, height * 0.70, 0.8);
  dibujarCalavera(width * 0.66, height * 0.70, 0.8);

  dibujarPan(width * 0.5, height * 0.76);
  dibujarCruz(width * 0.5, height * 0.49);

  // elementos de la ofrenda 
  dibujarFrutas(width * 0.25, height * 0.78);
  dibujarDulces(width * 0.75, height * 0.78);
  dibujarIncensario(width * 0.50, height * 0.64);

  noStroke();
  textAlign(CENTER);

  fill(255, 220, 140);
  textSize(constrain(width * 0.027, 14, 27));
  text("OFRENDA DIGITAL", width / 2, height * 0.10);
}

function dibujarEstrellas() {
  noStroke();

  for (let i = 0; i < flores.length; i++) {
    let estrella = flores[i];

    let brillo = estrellasBrillantes
      ? 255
      : 150 + 100 * sin(frameCount * 0.04 + i);

    fill(255, 230, 160, brillo);

    let tam = estrellasBrillantes
      ? estrella.tam * 2.5
      : estrella.tam * 1.5;

    circle(estrella.x, estrella.y, tam);
  }
}

// actividad con el mouse 
function mousePressed() {
  estrellasBrillantes = !estrellasBrillantes;
}

function dibujarPapelPicado() {
  let colores = [
    color(235, 60, 100),
    color(50, 190, 160),
    color(255, 190, 50),
    color(150, 80, 230)
  ];

  let ancho = min(width / 7, 90);

  for (let i = 0; i < 7; i++) {
    let x = i * width / 7 + width / 14;
    let balanceo = sin(frameCount * 0.04 + i) * 4;

    push();
    translate(x, height * 0.20 + balanceo);
    rotate(sin(frameCount * 0.025 + i) * 0.04);

    rectMode(CENTER);
    noStroke();

    fill(colores[i % colores.length]);
    rect(0, 0, ancho, 42, 3);

    fill(255, 230, 180);
    circle(0, 0, 12);
    circle(-ancho * 0.28, 0, 6);
    circle(ancho * 0.28, 0, 6);

    pop();
  }
}

function dibujarAltar() {
  rectMode(CENTER);
  noStroke();

  fill(105, 45, 80);
  rect(width / 2, height * 0.84, width * 0.72, height * 0.12);

  fill(160, 65, 90);
  rect(width / 2, height * 0.73, width * 0.62, height * 0.12);

  fill(225, 135, 65);
  rect(width / 2, height * 0.62, width * 0.52, height * 0.10);

  fill(255, 195, 100);
  rect(width / 2, height * 0.88, width * 0.74, 8);
}
  
function dibujarFlores() {
  let escala = constrain(width / 900, 0.55, 1.1);

  for (let i = 0; i < 18; i++) {
    let lado = (i % 2 === 0) ? -1 : 1;
    let x = width / 2 + lado * (width * 0.20 + (i % 3) * 12);
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

function dibujarVela(x, y) {
  push();
  translate(x, y);

  rectMode(CENTER);
  noStroke();

  fill(255, 225, 170);
  rect(0, 0, 19, 65, 4);

  fill(255, 190, 60);
  rect(0, 20, 23, 7, 2);

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

function dibujarCalavera(x, y, tam) {
  push();
  translate(x, y);
  scale(tam);

  noStroke();

  fill(255, 240, 210);
  ellipse(0, 0, 42, 40);

  rectMode(CENTER);
  rect(0, 15, 24, 12, 4);

  fill(100, 35, 100);
  circle(-10, -3, 12);
  circle(10, -3, 12);

  fill(45);
  triangle(-3, 5, 3, 5, 0, 10);

  fill(230, 55, 100);
  circle(0, -15, 7);

  fill(45);

  for (let i = -7; i <= 7; i += 7) {
    rect(i, 17, 2, 6);
  }

  pop();
}

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

// la cruz con el huipil 
function dibujarCruz(x, y) {
  push();
  translate(x, y);

  rectMode(CENTER);
  noStroke();

  // cruz de madera
  fill(115, 65, 45);
  rect(0, 0, 24, 125, 3);
  rect(0, -23, 85, 20, 3);

  // bordes dorados
  stroke(255, 195, 90);
  strokeWeight(2);
  noFill();
  rect(0, 0, 24, 125, 3);
  rect(0, -23, 85, 20, 3);
  noStroke();

  // cuerpo del hipil
  fill(255, 250, 235);

  beginShape();
  vertex(-15, -33);
  vertex(15, -33);
  vertex(24, -17);
  vertex(29, 8);
  vertex(34, 42);
  vertex(28, 48);
  vertex(-28, 48);
  vertex(-34, 42);
  vertex(-29, 8);
  vertex(-24, -17);
  endShape(CLOSE);

  // mangas
  fill(255, 250, 235);
  quad(-15, -30, -35, -21, -28, 1, -17, -5);
  quad(15, -30, 35, -21, 28, 1, 17, -5);

  // cuello bordado
  noFill();
  stroke(220, 65, 105);
  strokeWeight(2);
  ellipse(0, -29, 19, 12);
  noStroke();

  // flores del cuello
  for (let i = 0; i < 12; i++) {
    let a = TWO_PI * i / 12;
    let fx = cos(a) * 13;
    let fy = -29 + sin(a) * 7;

    dibujarFlorHipil(fx, fy, 0.45, i % 3);
  }

  // flores del pecho
  dibujarFlorHipil(-10, -10, 0.65, 0);
  dibujarFlorHipil(0, -7, 0.65, 1);
  dibujarFlorHipil(10, -10, 0.65, 2);

  // bordados inferiores
  for (let i = 0; i < 7; i++) {
    let fx = -24 + i * 8;
    let fy = 34 + (i % 2) * 3;

    dibujarFlorHipil(fx, fy, 0.65, i % 3);
  }

  stroke(220, 65, 110);
  strokeWeight(2);
  line(-29, 26, 29, 26);
  line(-32, 44, 32, 44);
  noStroke();

  // hojas y detalles dorados
  for (let i = 0; i < 6; i++) {
    let fx = -20 + i * 8;

    fill(45, 145, 90);
    ellipse(fx, 30, 4, 7);

    fill(245, 175, 45);
    circle(fx, 44, 3);
  }

  pop();
}

function dibujarFlorHipil(x, y, escala, tipo) {
  push();
  translate(x, y);
  scale(escala);
  noStroke();

  let tonos = [
    color(220, 55, 100),
    color(245, 155, 35),
    color(125, 75, 180)
  ];

  for (let i = 0; i < 6; i++) {
    push();
    rotate(TWO_PI * i / 6);

    fill(tonos[tipo]);
    ellipse(0, -4, 4, 7);

    pop();
  }

  fill(245, 190, 55);
  circle(0, 0, 3);

  pop();
}

// las frutas
function dibujarFrutas(x, y) {
  push();
  translate(x, y);
  noStroke();

  // naranja
  fill(245, 135, 25);
  circle(-20, 0, 24);
  fill(65, 135, 55);
  ellipse(-18, -12, 8, 4);

  // manzana
  fill(210, 45, 55);
  circle(5, 0, 23);
  fill(65, 135, 55);
  ellipse(9, -12, 8, 4);

  // plátano
  noFill();
  stroke(255, 215, 65);
  strokeWeight(7);
  arc(25, -1, 25, 22, 0.2, PI - 0.2);

  pop();
}

// el plato con los dulces 
function dibujarDulces(x, y) {
  push();
  translate(x, y);
  rectMode(CENTER);
  noStroke();

  // plato
  fill(235, 205, 170);
  ellipse(0, 7, 58, 15);

  // dulces de colores
  fill(230, 65, 105);
  circle(-16, -2, 12);

  fill(255, 195, 55);
  circle(0, -5, 12);

  fill(100, 185, 130);
  circle(15, -2, 12);

  // brillitos
  fill(255, 240, 210);
  circle(-16, -2, 4);
  circle(0, -5, 4);
  circle(15, -2, 4);

  pop();
}

// insiencio 
function dibujarIncensario(x, y) {
  push();
  translate(x, y);
  noStroke();

  // base
  fill(120, 65, 55);
  ellipse(0, 12, 42, 12);

  // recipiente
  fill(165, 85, 60);
  ellipse(0, 0, 32, 28);

  fill(100, 50, 45);
  ellipse(0, -10, 34, 10);

  // decoración dorada
  noFill();
  stroke(245, 190, 85);
  strokeWeight(2);
  arc(0, 2, 23, 15, 0, PI);

  // humo en movimiento
  noFill();
  stroke(220, 210, 235, 180);
  strokeWeight(3);

  for (let i = 0; i < 3; i++) {
    let desplazamiento =
      (frameCount * 0.7 + i * 14) % 35;

    let humoY = -17 - desplazamiento;
    let humoX = sin(frameCount * 0.04 + i) * 5;

    arc(
      humoX,
      humoY,
      9 + i * 2,
      13,
      PI,
      TWO_PI
    );
  }

  pop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  flores = [];
  for (let i = 0; i < 45; i++) {
    flores.push({
      x: random(width),
      y: random(height * 0.5),
      tam: random(2, 4)
    });
  }
}
