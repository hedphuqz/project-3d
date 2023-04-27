import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// document.querySelector('#app').innerHTML = `
//   <div>
//   </div>
// `

const app = document.querySelector('#app')

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(0.4, 64, 64);
const material = new THREE.MeshNormalMaterial({

  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ antialias: true });

const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.minDistance = 0.2;
orbitControls.maxDistance = 1.5;
orbitControls.enableDamping = true;


if (window.devicePixelRatio) {
  renderer.setPixelRatio(window.devicePixelRatio)
}

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
app.appendChild(renderer.domElement);

// animation

function animation(time) {

  // mesh.rotation.x = time / 2000;
  // mesh.rotation.y = time / 1000;
  orbitControls.update();
  renderer.render(scene, camera);

}