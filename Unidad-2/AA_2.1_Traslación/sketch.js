
function setup() {
  createCanvas(700, 300);
  angleMode(DEGREES);
}

function draw() {
  background(240);

  // ==========================================
  // tigre recien nacido
  // ==========================================

push();

translate(70, 150);
scale(0.45);
rotate(-5);

dibujarTigre(18, 3, 70);

// biberon
stroke(0);
strokeWeight(2);
fill(255);
ellipse(42, 18, 18, 30);

// tapa
fill(180);
rect(37, 3, 10, 6);

// chupón
fill(255, 200, 150);
triangle(39, 3, 45, 3, 42, -8);

pop();


  // ==========================================
  // tigre bebe 
  // ==========================================

  push();

  translate(205, 150);
  scale(0.65);
  rotate(4);

  dibujarTigre(25, 4, 70);

  pop();


  // ==========================================
  // tigre joven 
  // ==========================================

  push();

  translate(340, 150);
  scale(0.85);
  rotate(-3);

  dibujarTigre(30, 6, 70);

  // gorra
fill(55,555,0);
stroke(0);
strokeWeight(2);

ellipse(0, -35, 45, 20);
ellipse(25, -30, 35, 10);



  pop();


  // ==========================================
  // tigre adolecente 
  // ==========================================

  push();

  translate(480, 150);
  scale(1.05);
  rotate(20);
 
  dibujarTigre(34, 8, 70);


  pop();


  // ==========================================
  // tigre adulto
  // ==========================================

  push();

  translate(620, 150);
  scale(1.25);
  rotate(-2);

  dibujarTigre(38, 10, 70);

  // baston
  stroke(0);
strokeWeight(5);
line(30, 20, 40, 80);


pop();
  


  
  pop();
}

function dibujarTigre(tamanoOrejas, cantidadRayas, tamanoCabeza) {

  // ==========================================
  // orejas 
  // ==========================================

  fill(255, 165, 60);
  stroke(0);
  strokeWeight(2);

  // Oreja izquierda
  triangle(
    -45, -20,
    -30, -50,
    -15, -20
  );

  // Oreja derecha
  triangle(
    15, -20,
    30, -50,
    45, -20
  );


  // ==========================================
  // interior de  las orejas del tigres
  // ==========================================

  fill(333, 120, 80);

  triangle(
    -39, -23,
    -30, -42,
    -21, -23
  );

  triangle(
    21, -23,
    30, -42,
    39, -23
  );


  // ==========================================
  // cabeza
  // ==========================================

  fill(255, 165, 60);
  stroke(0);

  ellipse(
    0,
    0,
    tamanoCabeza,
    tamanoCabeza * 0.9
  );


  // ==========================================
  // ojos 
  // ==========================================

  fill(255);

  // ojo izquierdo
  ellipse(-15, -5, 15, 12);

  // ojo derecho
  ellipse(15, -5, 15, 12);

  // pupilas
  fill(0);

  ellipse(-15, -5, 6, 8);
  ellipse(15, -5, 6, 8);


  // ==========================================
  // hocico
  // ==========================================

  fill(255, 215, 170);

  ellipse(0, 15, 35, 25);


  // ==========================================
  // nariz 
  
  // ==========================================

  fill(3);

  ellipse(0, 10, 12, 8);


  // ==========================================
  // boca
  // ==========================================

  stroke(0);
  strokeWeight(2);

  line(0, 14, 0, 23);

  line(-8, 23, 0, 18);
  line(0, 18, 8, 23);


  // ==========================================
  // bigotes
  // ==========================================

  strokeWeight(1);

  line(-15, 18, -35, 13);
  line(-15, 22, -36, 22);
  line(-15, 26, -35, 31);

  line(15, 18, 35, 13);
  line(15, 22, 36, 22);
  line(15, 26, 35, 31);



  // ==========================================
  // rayas del tigre 
  // ==========================================

  stroke(0);
  strokeWeight(4);


  // primeras rayas
  if (cantidadRayas >= 2) {

    line(-30, -18, -20, -8);
    line(30, -18, 20, -8);

  }


  // segundas rayas
  if (cantidadRayas >= 0) {

    line(-35, -5, -24, 2);
    line(35, -5, 24, 2);

  }


  // terceras rayas
  if (cantidadRayas >= 6) {

    line(-32, 10, -22, 15);
    line(32, 10, 22, 15);

  }


  // cuartas rayas
  if (cantidadRayas >= 8) {

    line(-20, -32, -15, -22);
    line(20, -32, 15, -22);

  }


  // quintas rayas
  if (cantidadRayas >= 1) {

    line(-10, -34, -7, -25);
    line(10, -34, 7, -25);


    

  }
}
