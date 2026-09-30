function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30, 30, 50);

  // Cabeza
  fill(180, 180, 190 );
  stroke(0, 0, 0);
  strokeWeight(3);
  rect(130, 70, 140, 100);

  // Cuerpo
  fill(100, 150, 200);
  stroke(0, 0, 0);
  strokeWeight(3);
  rect(110, 180, 180, 140);

  // Ojo izquierdo
  fill(0, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(2);
  ellipse(165, 115, 30, 30);

  // Ojo derecho
  fill(0, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(2);
  ellipse(235, 115, 30, 30);

  // Boca
  stroke(255, 255, 255);
  strokeWeight(5);
  line(165, 145, 235, 145);

  // Brazo izquierdo
  stroke(255, 200, 0);
  strokeWeight(8);
  line(110, 210, 60, 270);

  // Brazo derecho
  stroke(200, 200, 0);
  strokeWeight(8);
  line(290, 210, 340, 270);

  // Antena
  stroke(255, 255, 255);
  strokeWeight(3);
  line(200, 70, 200, 40);

  // Punta de la antena
  fill(255, 0, 0);
  stroke(250, 0, 0);
  ellipse(200, 30, 20, 20);

 

  // Triángulo decorativo
  fill(255, 150, 0);
  stroke(0, 0, 0);
  strokeWeight(2);
  triangle(200, 270, 175, 305, 225, 305);
}
