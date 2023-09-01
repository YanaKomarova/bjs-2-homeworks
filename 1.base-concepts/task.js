"use strict";

function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let arr = [];

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    let arr = -b / (2 * a);
    arr.push(x1);
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}