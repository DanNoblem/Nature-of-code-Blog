import * as THREE from "three";

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

  follow(vec) {
    var x = Math.abs(Math.floor(this.pos.x));
    var y = Math.abs(Math.floor(this.pos.y));
    var z = Math.abs(Math.floor(this.pos.z));
    var index = x + y + z * 50;
    console.log(index);
    var force = vec[index];
    this.applyForce(force);
  }

  attract(orb) {
    let force = new THREE.Vector3().subVectors(this.pos, orb.pos);
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
