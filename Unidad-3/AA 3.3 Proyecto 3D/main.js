
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Renderizar el canvas
const canvas = document.querySelector('#canvas');

// Crear la escena
const escena = new THREE.Scene();
escena.background = new THREE.Color(0xB5C2D1);

// Crear la cámara
const camara = new THREE.PerspectiveCamera(
    60, // Ángulo de visión vertical
    window.innerWidth / window.innerHeight, // Relación de aspecto
    0.1, 
    1000 // Distancia máxima
);

camara.position.set(0, 5, 12);

// Crear el renderizador
const renderizador = new THREE.WebGLRenderer({
    canvas,
    antialias: true
});

renderizador.setSize(window.innerWidth, window.innerHeight);
renderizador.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderizador.shadowMap.enabled = true;
renderizador.shadowMap.type = THREE.PCFSoftShadowMap;

// donde se crea la luz ambiental
const luzAmb = new THREE.AmbientLight(0xffffff, 0.4);
escena.add(luzAmb);

//  luz direccional (sol)
const luzSol = new THREE.DirectionalLight(0xffffff, 0.8);

luzSol.position.set(5, 10, 2);
luzSol.castShadow = true;
luzSol.shadow.mapSize.width = 1024;
luzSol.shadow.mapSize.height = 1024;
luzSol.shadow.camera.near = 0.1;

escena.add(luzSol);

// Crear controles de órbita
const controls = new OrbitControls(
    camara,
    renderizador.domElement
);

controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Crear cargador de texturas
const textureLoader = new THREE.TextureLoader();

// Crear geometría del cubo
const geometriaCubo = new THREE.BoxGeometry(1, 1, 1);

// Crear material del cubo
const materialCubo = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: textureLoader.load(
        'https://threejs.org/examples/textures/crate.jpg'
    ),
    roughness: 0.7,
    metalness: 0.1
});

// Crear el cubo
const cubo = new THREE.Mesh(
    geometriaCubo,
    materialCubo
);

cubo.castShadow = true;
cubo.receiveShadow = true;
escena.add(cubo);


const pedestalArriba = 0.8;
const pedestalFondo = 1.0;
const pedestalAltura = 0.2;
const separacionPedestal = 0.8;
const pedestalSegmentos = 6;

const geometriaPedestal = new THREE.CylinderGeometry(
    pedestalArriba,
    pedestalFondo,
    pedestalAltura,
    pedestalSegmentos
);

const materialPedestal = new THREE.MeshStandardMaterial({
    color: 0x8B4513
});

const pedestal = new THREE.Mesh(
    geometriaPedestal,
    materialPedestal
);

pedestal.position.y = 0;
pedestal.castShadow = true;
pedestal.receiveShadow = true;
escena.add(pedestal);

// Crear esfera
const esferaRadio = 0.3;
const esferaSegmentos = 32;

const geometriaEsfera = new THREE.SphereGeometry(
    esferaRadio,
    esferaSegmentos,
    esferaSegmentos
);

const materialEsfera = new THREE.MeshStandardMaterial({
    color: 0xff0000
});

const esfera = new THREE.Mesh(
    geometriaEsfera,
    materialEsfera
);

esfera.position.y = 2.5;
esfera.castShadow = true;
esfera.receiveShadow = true;
escena.add(esfera);


cubo.position.y = separacionPedestal + 0.2;

window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;

    camara.updateProjectionMatrix();

    renderizador.setSize(
        window.innerWidth,
        window.innerHeight
    );

    renderizador.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );
});


function animar() {
  
    cubo.rotation.y += 0.01; 
    esfera.rotation.y += 0.01;
    controls.update();
    renderizador.render(escena, camara);
}
renderizador.setAnimationLoop(animar);
