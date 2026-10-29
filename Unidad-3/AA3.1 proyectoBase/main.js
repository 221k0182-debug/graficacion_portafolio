
import * as THREE from 'three';

// ESCENA
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x141826);

// CÁMARA
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
camera.position.set(0, 0, 12);
camera.lookAt(0, 0, 0);

// RENDERIZADOR
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.domElement.style.display = 'block';

const contenedor = document.getElementById('contenedor');
if (!contenedor) {
  throw new Error('No existe el elemento #contenedor en index.html');
}
contenedor.appendChild(renderer.domElement);

// ILUMINACIÓN
scene.add(new THREE.AmbientLight(0xffffff, 1.5));

const luz = new THREE.DirectionalLight(0xffffff, 2);
luz.position.set(5, 5, 10);
scene.add(luz);

// SEMÁFORO
const caja = new THREE.Mesh(
  new THREE.BoxGeometry(1.8, 4.8, 0.8),
  new THREE.MeshStandardMaterial({
    color: 0x252525,
    roughness: 0.5
  })
);
caja.position.set(-2.5, 0, 0);
scene.add(caja);

function crearLuz(color, y) {
  const luzSemaforo = new THREE.Mesh(
    new THREE.SphereGeometry(0.42, 32, 32),
    new THREE.MeshBasicMaterial({ color })
  );
  luzSemaforo.position.set(-2.5, y, 0.48);
  scene.add(luzSemaforo);
}

crearLuz(0xff0000, 1.35);
crearLuz(0xffff00, 0);
crearLuz(0x00ff00, -1.35);

// CUBO DE ALAMBRE
const cubo = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    wireframe: true
  })
);
cubo.position.set(2.5, 0, 0);
scene.add(cubo);

// AJUSTAR EL LIENZO AL CONTENEDOR
function ajustarTamano() {
  const ancho = contenedor.clientWidth;
  const alto = contenedor.clientHeight;

  if (!ancho || !alto) return;

  renderer.setSize(ancho, alto, false);
  camera.aspect = ancho / alto;
  camera.updateProjectionMatrix();
}

ajustarTamano();
window.addEventListener('resize', ajustarTamano);

// ANIMACIÓN
function animate() {
  requestAnimationFrame(animate);

  cubo.rotation.x += 0.008;
  cubo.rotation.y += 0.012;

  const escala = 1 + Math.sin(Date.now() * 0.003) * 0.12;
  cubo.scale.setScalar(escala);

  renderer.render(scene, camera);
}

animate();
