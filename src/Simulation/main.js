import { Orb } from "./floater.js";
import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/addons/controls/OrbitControls";
import { DragControls } from "three/addons/controls/DragControls.js";
import { TrailRenderer } from "./TrailRenderer.js";
import { createNoise4D } from "simplex-noise";
import alea from "alea";

/* 
SETUP //////////////////////////////////////////////////////////////////////////////
*/

let objects = [];

// app
const app = document.querySelector("#app");

//renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
app.appendChild(renderer.domElement);
document.body.appendChild(renderer.domElement);

//post processing
let afterimagePass;
let composer;

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#5BB2F0");

// perspective camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(20, 50, 200);

// axis helper -> X: red, Y: green, Z: blue
// const axesHelper = new THREE.AxesHelper(5);
// axesHelper.position.y = 0.001;
// scene.add(axesHelper);

// light
const ambientLight = new THREE.AmbientLight("white", 0.2);
const hemisphereLight = new THREE.HemisphereLight("#ffffff", "#ff00ff", 0.8);
const directionalLight = new THREE.DirectionalLight("white", 0.8);
directionalLight.position.set(-1, 1, 1);
scene.add(ambientLight, hemisphereLight);

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
orbitControls.maxDistance = 800;
orbitControls.target = new THREE.Vector3(0, 0, 0);
const dragControls = new DragControls(objects, camera, renderer.domElement);

//Disbale orbitControl when dragControl is activated
dragControls.addEventListener("dragstart", function () {
  orbitControls.enabled = false;
});
dragControls.addEventListener("dragend", function () {
  orbitControls.enabled = true;
});

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

///Food Spawner information
const mouse = new THREE.Vector2();
const intersectionPoint = new THREE.Vector3();
const planeNormal = new THREE.Vector3();
const plane = new THREE.Plane();
const raycaster = new THREE.Raycaster();
let Foods = [];
let foodsDraw = [];

window.addEventListener("keydown", function (e) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  planeNormal.copy(camera.position).normalize();
  plane.setFromNormalAndCoplanarPoint(planeNormal, scene.position);
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, intersectionPoint);
  const sphereMesh = new THREE.Mesh(
    new THREE.SphereGeometry(2, 30, 30),
    new THREE.MeshStandardMaterial({
      color: 0xf5b7b1,
      metalness: 0,
      roughness: 0,
    })
  );
  objects.push(sphereMesh);
  scene.add(sphereMesh);
  let food = new Orb(
    intersectionPoint.x,
    intersectionPoint.y,
    intersectionPoint.z,
    100 //Mass
  );
  Foods.push(food);
  sphereMesh.position.copy(intersectionPoint);
});

//Sphere rendering properties
const sphereMaterial = new THREE.MeshToonMaterial({ color: "#1da2d8" });
// sphereMaterial.transparent = true;
// sphereMaterial.opacity = 0;
const sphereGeometry = new THREE.SphereGeometry(0.5, 64, 64);

let balls = [];
let fish = [];

//Trail Information
let trails = [];
const trailHeadGeometry = [];

//create spheres
for (let i = 0; i < 200; i++) {
  fish[i] = new Orb(
    Math.random() * 1000,
    Math.random() * 1000,
    Math.random() * 1000,
    Math.random() * 5 //Mass
  );
  balls[i] = new THREE.Mesh(sphereGeometry, sphereMaterial);
  balls[i].position.set(fish[i].pos.x, fish[i].pos.y, fish[i].pos.z);
  scene.add(balls[i]);

  //////// Create Trail
  // specify points to create planar trail-head geometry
  trailHeadGeometry.push(
    new THREE.Vector3(-1.0, 0.0, 0.0),
    new THREE.Vector3(1.0, 0.0, 0.0),
    new THREE.Vector3(1.0, 0.0, 0.0)
  );

  newTrail(i);
}
function newTrail(i) {
  // create the trail renderer object
  trails[i] = new TrailRenderer(scene, false);

  // set how often a new trail node will be added and existing nodes will be updated
  trails[i].setAdvanceFrequency(50);

  // create material for the trail renderer
  const trailMaterial = TrailRenderer.createBaseMaterial();

  // specify length of trail
  const trailLength = 50;

  // initialize the trail
  trails[i].initialize(
    trailMaterial,
    trailLength,
    false,
    2,
    trailHeadGeometry,
    balls[i]
  );

  // activate the trail
  trailMaterial.uniforms.headColor.value.set(0.1, 0.4, 0.9, 1);
  trailMaterial.uniforms.tailColor.value.set(0.2, 0.2, 0.9, 0.5);
  trails[i].activate();
}

//animation

//Reposition self if position is too high and move somewhere else

let noise4D = createNoise4D();
let limit = 1000;
let maxSpeed = 2;
const animate = () => {
  requestAnimationFrame(animate);

  for (let i = 0; i < fish.length; i++) {
    if (Foods.length > 0) {
      for (let h = 0; h < Foods.length; h++) {
        Foods[h].attract(fish[i]);
        Foods[h].pos = objects[h].position;
      }
    }
    fish[i].follow(noise4D);

    // fish[i].applyBehaviors(Foods, noise4D);

    //Create boundary
    if (fish[i].pos.x > limit) {
      fish[i].pos.x = 0;
      trails[i].deactivate();
      newTrail(i);
    }
    if (fish[i].pos.y > limit) {
      fish[i].pos.y = 0;
      trails[i].deactivate();
      newTrail(i);
    }
    if (fish[i].pos.z > limit) {
      fish[i].pos.z = 0;
      trails[i].deactivate();
      newTrail(i);
    }

    if (fish[i].pos.x < 0) {
      fish[i].pos.x = limit;
      trails[i].deactivate();
      newTrail(i);
    }
    if (fish[i].pos.y < 0) {
      fish[i].pos.y = limit;
      trails[i].deactivate();
      newTrail(i);
    }
    if (fish[i].pos.z < 0) {
      fish[i].pos.z = limit;
      trails[i].deactivate();
      newTrail(i);
    }

    //force field around the area
    //caculate surface of the circle and redirect if moving towards the edge

    //Limit velocity
    if (fish[i].vel.x > maxSpeed) {
      fish[i].vel.x = maxSpeed;
    }
    if (fish[i].vel.y > maxSpeed) {
      fish[i].vel.y = maxSpeed;
    }
    if (fish[i].vel.z > maxSpeed) {
      fish[i].vel.z = maxSpeed;
    }
    if (fish[i].vel.x < -maxSpeed) {
      fish[i].vel.x = -maxSpeed;
    }
    if (fish[i].vel.y < -maxSpeed) {
      fish[i].vel.y = -maxSpeed;
    }
    if (fish[i].vel.z < -maxSpeed) {
      fish[i].vel.z = -maxSpeed;
    }

    balls[i].position.set(
      fish[i].pos.x / 10,
      fish[i].pos.y / 10,
      fish[i].pos.z / 10
    );
    trails[i].update();
  }
  renderer.render(scene, camera);
};

animate();

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}
