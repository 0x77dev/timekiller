import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
const material = new THREE.MeshBasicMaterial({ color: 0xfffff, wireframe: true });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 1000;

const render = () => {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

render();
