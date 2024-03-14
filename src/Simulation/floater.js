import * as THREE from "three";
import { createNoise4D } from "simplex-noise";
import alea from "alea";
import { limit } from "./utils";

export class Orb {
  constructor(x, y, z, m, s, l) {
    this.pos = new THREE.Vector3(x, y, z);
    this.vel = new THREE.Vector3();
    this.acc = new THREE.Vector3();
    this.mass = m;
    this.maxSpeed = s;
    this.maxForce = 3;
    this.life = l;
  }

  steer(target) {
    let desired = new THREE.Vector3().subVectors(target, this.pos);
    desired.normalize();
    desired.multiplyScalar(this.maxSpeed / 2);
    let steer = new THREE.Vector3().subVectors(desired, this.vel);
    //limit(steer, this.maxForce);
    //console.log(force);

    this.applyForce(target);
  }

  applyForce(iF) {
    iF.divideScalar(this.mass);
    //console.log(iF);
    this.acc.add(iF);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc = new THREE.Vector3(0, 0, 0);
  }

  // applyBehaviors(noise3D, orb) {
  //   let followBehavior = follow(noise3D);
  //   let attractBehavior = attract(orb);

  //   followBehavior.mult(0);
  //   attractBehavior.mult(0);

  //   this.applyForce(followBehavior);
  //   this.applyForce(attractBehavior);

  // }

  follow(noise3D) {
    var x = this.pos.x * 10;
    var y = this.pos.y * 10;
    var z = this.pos.z * 10;

    //Use 2nd noise for two different angles
    // Angle 1 & Angle 2

    var angle = noise3D(x, y, z, 1);
    var angle2 = noise3D(x, y, z, 2);
    let noiseDirection = new THREE.Vector3(
      Math.cos(angle * Math.PI) * Math.sin(angle2 * Math.PI),
      Math.sin(angle * Math.PI) * Math.cos(angle2 * Math.PI),
      Math.cos(angle * Math.PI)
    );
    noiseDirection.normalize();

    // instead of applyForce
    // return noiseDirection;

    noiseDirection.divideScalar(20);
    //noiseDirection.sub(this.vel);
    this.applyForce(noiseDirection);
    //this.seek(noiseDirection);
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

    // return force;
    orb.steer(force);
  }

  boundaries(offset) {
    let desired = new THREE.Vector3();

    if (this.pos.x > offset) {
      desired.set(-this.maxSpeed, this.vel.y, this.vel.z);
    }
    if (this.pos.y > offset) {
      desired.set(this.vel.x, -this.maxSpeed, this.vel.z);
    }
    if (this.pos.z > offset) {
      desired.set(this.vel.x, this.vel.y, -this.maxSpeed);
    }

    if (this.pos.x < 0) {
      desired.set(this.maxSpeed, this.vel.y, this.vel.z);
    }
    if (this.pos.y < 0) {
      desired.set(this.vel.x, this.maxSpeed, this.vel.z);
    }
    if (this.pos.z < 0) {
      desired.set(this.vel.x, this.vel.y, this.maxSpeed);
    }

    this.applyForce(desired);

    // if (desired !== null) {
    //   desired.normalize();
    //   desired.multiplyScalar(this.maxSpeed);
    //   let force = new THREE.Vector3().subVectors(desired, this.vel);
    //   this.applyForce(force);
    // }
  }
}
