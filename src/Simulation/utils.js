export function getMag(v) {
  let a = v.x;
  let b = v.y;
  let c = v.z;
  //return Math.sqrt(a ^ (2 + b) ^ (2 + c) ^ 2);
  return Math.sqrt(a * a + b * b + c * c);
}

export function limit(v, value) {
  let m = getMag(v);
  if (m > value) {
    v.normalize();
    v.multiplyScalar(value);
  }
  return v;
}
