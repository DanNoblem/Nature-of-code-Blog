import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/addons/controls/OrbitControls";
import { DragControls } from "three/addons/controls/DragControls.js";
import { createNoise4D } from "simplex-noise";

// app
const app = document.querySelector("#app");

//renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
app.appendChild(renderer.domElement);
document.body.appendChild(renderer.domElement);

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("black");

// perspective camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(0, 0, 100);

// light
const ambientLight = new THREE.AmbientLight("white", 0.2);

// control
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.dampingFactor = 0.05;
orbitControls.screenSpacePanning = false;
orbitControls.enableRotate = true;
orbitControls.rotateSpeed = 0.5;
orbitControls.enableZoom = true;
orbitControls.zoomSpeed = 0.5;
orbitControls.minDistance = 100;
orbitControls.maxDistance = 10000;
orbitControls.target = new THREE.Vector3(0, 0, 0);

//noise
const noise3D = createNoise4D();

// resize
const onResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener("resize", onResize);

//create object to store velocity and acceleration values
class Orb {
  constructor() {
    this.pos = new THREE.Vector3(
      Math.random() * 20,
      Math.random() * 20,
      Math.random() * 20
    );
    this.vel = new THREE.Vector3();
    this.acc = new THREE.Vector3();
    this.mass = 0;
  }

  applyForce(iF) {
    let f = iF;
    iF.Vector3.divideScalar(this.mass);
    this.acc.add(iF);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
}

/* 
DRAWING//////////////////////////////////////////////////////////////////////////////
*/

//Sphere rendering properties
const sphereMaterial = new THREE.MeshStandardMaterial({ color: "black" });
sphereMaterial.emissive.r = 200;
const sphereGeometry = new THREE.SphereGeometry(0.5, 64, 64);

let orbs = [];
let path = [];

for (let i = 0; i < 50; i++) {
  orbs[i] = new Orb();
  path[i] = new THREE.Mesh(sphereGeometry, sphereMaterial.clone());
  path[i].position.set(orbs[i].pos.x, orbs[i].pos.y, orbs[i].pos.z);
  scene.add(path[i]);
}

const animate = () => {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();
