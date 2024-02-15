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
scene.background = new THREE.Color("#AEC6CF");

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
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
const helper = new THREE.DirectionalLightHelper(directionalLight, 5);
directionalLight.rotateX(1);
// scene.add(helper);
scene.add(directionalLight);

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
    iF.Vector3.divideScalar(this.mass);
    this.acc.add(iF);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  attract(orb) {
    let force = f.subVectors(this.pos, orb.pos);
    let dist = this.pos.distanceTo(orb.pos);
    //constrain
    if (dist < 100) {
      dist = 200;
    }
    if (dist > 1000) {
      dist = 500;
    }
    let g = 10;
    let power = (g * (this.mass * orb.mass)) / (dist * dist);
    //apply force to vector
    force.normalize();
    force.multiplyScalar(power);
    orb.applyForce(force);
  }
}

/* 
DRAWING//////////////////////////////////////////////////////////////////////////////
*/

//Sphere rendering properties
const sphereMaterial = new THREE.MeshToonMaterial({ color: "#FFDB58" });
// sphereMaterial.emissive.r = 200;
const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);

let orbs = [];
let path = [];

for (let i = 0; i < 20; i++) {
  orbs[i] = new Orb();
  path[i] = new THREE.Mesh(sphereGeometry, sphereMaterial.clone());
  path[i].position.set(orbs[i].pos.x, orbs[i].pos.y, orbs[i].pos.z);
  orbs[i].mass = Math.random() * 10;
  scene.add(path[i]);
}

let sun = new Orb();
sun.mass = 20;
const starGroup = new THREE.Group();
let starMaterial = new THREE.MeshToonMaterial({ color: "#FFFF00" });
let starGeometry = new THREE.TorusGeometry(10, 1, 8, 50);
let star = new THREE.Mesh(starGeometry, starMaterial);
star.rotateX(0.4);
sun.pos = new THREE.Vector3(0, 0, 0);
star.position.set(sun.pos.x, sun.pos.y, sun.pos.z);

starGroup.add(star);
scene.add(starGroup);

const animate = (time) => {
  requestAnimationFrame(animate);

  for (let i = 0; i < path.length; i++) {
    //gravity calculation
    //attraction
    let f = new THREE.Vector3();
    f.subVectors(star.position, path[i].position);
    let dist = path[i].position.distanceTo(star.position);
    //constrain
    if (dist < 100) {
      dist = 200;
    }
    if (dist > 1000) {
      dist = 500;
    }

    let g = 10;
    let power = (g * (orbs[i].mass * sun.mass)) / (dist * dist);
    f.normalize();
    f.multiplyScalar(power);
    orbs[i].acc = f.divideScalar(orbs[i].mass);
    console.log(power);

    //apply force and update
    orbs[i].vel.add(orbs[i].acc);

    orbs[i].acc = new THREE.Vector3(0, 0, 0);

    path[i].position.add(orbs[i].vel);
  }
  time *= 0.001;

  // starGroup.rotation.y = Math.PI * -0.12 * time;
  // star.position.y = 5;

  renderer.render(scene, camera);
};

animate();
