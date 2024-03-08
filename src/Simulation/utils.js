export function getMag(vec3) {
  let a = vec3.position.x;
  let b = vec3.position.y;
  let c = vec3.position.z;
  //return Math.sqrt(a ^ (2 + b) ^ (2 + c) ^ 2);
  return Math.sqrt(a * a + b * b + c * c);
}

export function limit(vec3, value) {
  let m = getMag(vec3);
  if (m > value) {
    vec3.normalize();
    vec3.mult(value);
  }
}
