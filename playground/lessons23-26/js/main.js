// Number
/*console.log(1e6);
console.log(1_000_000);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);*/

// Number Methods
/*console.log((100).toString());
console.log((100.55555).toFixed(3));
console.log(parseInt("100"));
console.log(parseFloat("100.455"));
console.log(Number.isInteger(29));
console.log(Number.isNaN("Marwan" / 20)); */

// Math Object
/*console.log(Math.trunc(100.45));
console.log(Math.max(10, 29, 39, 499));
console.log(Math.random()); */

/*
    Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** parseInt(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(parseInt(d.toFixed(0)));
console.log(Math.round(d));
console.log(Math.trunc(d));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(Math.floor(b) / Math.ceil(d))); // 67 => Number
