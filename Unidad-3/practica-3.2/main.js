
import * as THREE from 'three';

// 1. Crear la escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111827);

// 2. Crear la cámara
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

// 3. Configurar el renderizador
const canvasElement = document.querySelector('#mi-canvas');

const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 4. Crear la geometría del cubo
const geometry = new THREE.BoxGeometry(2, 2, 2);

// 5. Crear el material
const material = new THREE.MeshBasicMaterial({
    color: 0x00aaff,
    wireframe: false
});

// 6. Crear la malla
const cube = new THREE.Mesh(geometry, material);

// Agregar el cubo a la escena
scene.add(cube);

// 7. Crear la animación
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Iniciar la animación
animate();

// 8. Adaptar la escena al tamaño de la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
});
