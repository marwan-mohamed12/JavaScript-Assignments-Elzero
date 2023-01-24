// Task 1
/*console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(1e3 * 1e2); // 100000
console.log(1_000_000 / 10); // 100000
console.log(3e4 + 7e4); // 100000
console.log(2e4 * 5); // 100000
console.log(1_000_0000 / 100); // 100000
console.log(5e4 * 2); // 100000
console.log(3e4 * 3 + 1e4); // 100000
console.log(2e4 * 4 + 2e4); // 100000 */

// Task 2
// console.log(-Number.MIN_SAFE_INTEGER);

// Task 3
// console.log(Number.MAX_SAFE_INTEGER + Number.MIN_SAFE_INTEGER + 16);

// Task 4
/*let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57 */

// Task 5
/*let num = 10;
console.log(+Number.isInteger(num) + +true); // 2 */

// Task 6
/*let flt = 10.4;
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10
console.log(Math.round(10.4)); // 10
console.log(Math.floor(flt)); // 10 */

// Task 7
// console.log(Math.round(Math.random() * 4));

function getRandNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandNumber(0, 4));
