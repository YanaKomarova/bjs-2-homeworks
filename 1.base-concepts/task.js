“use strict”

function solveEquation(a, b, c) {
let arr = [];

return arr;
let arr = [];
let d = b ** 2 - 4 * a * c;

if (d < 0) {
arr = [];
console.log(‘Коэффициент не может быть равен нулю’);
} else if (d === 0) {

1
2
3
let x1 = -b / (2 * a);

arr.push(x1);
}

if (d > 0) {

1
2
3
4
let x1 = (-b + Math.sqrt(d)) / (2 * a);
let x2 = (-b - Math.sqrt(d)) / (2 * a);

arr.push(x1, x2);
}

return arr;