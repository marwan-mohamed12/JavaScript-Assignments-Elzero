// Arithmatic Operator
/*console.log(10 - "Marwan"); // NAN
console.log(2 ** 4);
console.log(typeof NaN);
let num = 2;
console.log(num++);
let num2 = 2;
console.log(++num2);*/

// Unary Operators
/*console.log(+"100");
console.log(+"-100");
console.log(+"Marwan"); // Not A number
console.log(+0xff);
console.log(+null);
console.log(+true);
console.log(+false);

console.log(-"100");
console.log(-"-100");
console.log(-"Marwan"); // Not A number
console.log(-0xff);*/

// Type Coercion (Type Casting)
/*let a = "10",
    b = 20,
    c = true;
console.log(a + b); // 1020
console.log(+a + b); // 30
console.log(a - b); // -10
console.log(a + b + c); // 1020true
console.log(+a + b + c); // 31 */

/*
    Challenge 1
*/

/* let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); */

/*
Line 1 
a = 10 = 11 = 12
b = "20" = 21
c = 80 = 81
11 + 20 + 80 - 11 = 100
*/

/*
Line 2 
a = 12 = 13 = 14
b = 21
c = 81 = 82
13 - 21 + 81 + 13 + 14 =  
*/

/* 
Line 3
a = 14 = 13 = 12 = 11
b = 21 = 22
c = 82 = 81 
81 + 21 + 12 * 21 - 22 * 12 + 11 - 1
*/

/*
    Challenge 1
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e); // 2000
console.log(++e * ++g + -d + ++f); // 173
