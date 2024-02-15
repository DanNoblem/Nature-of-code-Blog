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

/* 
DRAWING//////////////////////////////////////////////////////////////////////////////
*/

let path = [];
let i = 0;

//Sphere rendering properties
const sphereMaterial = new THREE.MeshStandardMaterial({ color: "black" });
const sphereGeometry = new THREE.SphereGeometry(0.5, 64, 64);

for (let x = 0; x < 20; x++) {
  for (let y = 0; y < 20; y++) {
    for (let z = 0; z < 20; z++) {
      path[i] = new THREE.Mesh(sphereGeometry, sphereMaterial.clone());
      path[i].position.set(x * 1.5 - 10, y * 1.5 - 10, z * 1.5 - 10);
      scene.add(path[i]);
      i++;
    }
  }
}

let origin = new THREE.Vector3(0, 0, 0);
let t = 0;

const animate = () => {
  requestAnimationFrame(animate);
  let xoff = 0,
    yoff = 0,
    zoff = 0;
  i = 0;

  for (let x = 0; x < 20; x++) {
    xoff += 0.001 + origin.x;
    for (let y = 0; y < 20; y++) {
      yoff += 0.001;
      for (let z = 0; z < 20; z++) {
        zoff += 0.001;
        path[i].material.emissive.r = Math.abs(noise3D(xoff, yoff, zoff, t));
        i++;
      }
      //zoff = 0;
    }
    //yoff = 0;
  }

  //origin.x += 0.001;
  t += 0.01;

  renderer.render(scene, camera);

  i++;
};

animate();
