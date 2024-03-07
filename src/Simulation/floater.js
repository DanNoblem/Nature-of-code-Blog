import * as THREE from "three";
import { createNoise4D } from "simplex-noise";
import alea from "alea";

export class Orb {
  constructor(x, y, z, m) {
    this.pos = new THREE.Vector3(x, y, z);
    this.vel = new THREE.Vector3();
    this.acc = new THREE.Vector3();
    this.mass = m;
  }

  applyForce(iF) {
    iF.divideScalar(this.mass);
    this.acc.add(iF);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc = new THREE.Vector3(0, 0, 0);
  }

  follow(noise3D) {
    var x = this.pos.x * 5;
    var y = this.pos.y * 5;
    var z = this.pos.z * 5;

    //Use 2nd noise for two different angles
    // Angle 1 & Angle 2

    var angle = noise3D(x, y, z, 0.5) + 1;
    var angle2 = noise3D(x, y, z, 1) + 1;
    let noiseDirection = new THREE.Vector3(
      Math.cos(angle * Math.PI) * Math.sin(angle2 * Math.PI),
      Math.sin(angle * Math.PI) * Math.cos(angle2 * Math.PI),
      Math.cos(angle * Math.PI)
    );

    noiseDirection.normalize();
    noiseDirection.divideScalar(5);
    this.applyForce(noiseDirection);
  }

  attract(orb) {
    let force = new THREE.Vector3().subVectors(this.pos, orb.pos);
    let dist = this.pos.distanceTo(orb.pos);
    //constrain
    if (dist < 100) {
      dist = 100;
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
