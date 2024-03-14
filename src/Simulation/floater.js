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

  steer(desired) {
    // let force = new THREE.Vector3();
    // force.subVectors(target, this.pos);

    // // force.setMag(this.maxSpeed);
    // force.normalize();
    // force.multiplyScalar(2);
    // force.sub(this.vel);
    /// console.log(force);
    // force.limit(this.maxForce);
    desired.sub(this.vel);
    // limit to maxforce
    this.applyForce(desired);
  }

  applyForce(iF) {
    iF.divideScalar(this.mass);
    this.acc.add(iF);
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
    var x = this.pos.x / 100;
    var y = this.pos.y / 100;
    var z = this.pos.z / 100;

    //Use 2nd noise for two different angles
    // Angle 1 & Angle 2

    var angle = noise3D(x, y, z, 0.5);
    var angle2 = noise3D(x, y, z, 1);
    let noiseDirection = new THREE.Vector3(
      Math.cos(angle * Math.PI) * Math.sin(angle2 * Math.PI),
      Math.sin(angle * Math.PI) * Math.cos(angle2 * Math.PI),
      Math.cos(angle * Math.PI)
    );
    noiseDirection.normalize();

    // instead of applyForce
    // return noiseDirection;

    //noiseDirection.divideScalar(10);
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
}
