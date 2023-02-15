// Date and Time
/*
let myDate = new Date();
console.log(myDate);
console.log(Date.now());
*/

// Date Methods
/*
let dateNow = new Date(),
    myBirthday = new Date("Jun 25, 99"),
    dateDifference = dateNow - myBirthday;
console.log(dateDifference / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
*/

// Set Date Methods
/*
let dateNow = new Date();
console.log(dateNow);
console.log("#".repeat(66));

dateNow.setTime(0);
console.log(dateNow);
console.log("#".repeat(66));

dateNow.setDate(25);
console.log(dateNow);
console.log("#".repeat(66));

dateNow.setMonth(5);
console.log(dateNow);
console.log("#".repeat(66));
*/

// Time Formatting
/*
let dateOne = new Date(0);
console.log(dateOne);

let dateTwo = new Date(Date.parse("jun 25 1999"));
console.log(dateTwo);

let dateThree = new Date("jun 25, 1999");
console.log(dateThree);
*/

// Track Operation Time
/*
let start = new Date();

for (let i = 0; i < 100000; i++) {
    // document.write(`<div>${i}</div>`);
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(i));
    document.body.appendChild(div);
}

let end = new Date();

let opt = end - start;
console.log(opt);
*/

// Generators
/*
function* generatorNumbers() {
    yield 1;
    console.log("break");
    yield 2;
    yield 3;
    yield 4;
}

let generator = generatorNumbers();

// console.log(generator);
// console.log(typeof generator);

for (let val of generator) {
    console.log(val);
}
*/

// Delegate Generator
/*
function* generatorNums() {
    yield 1;
    yield 2;
    yield 3;
}

function* generatorLetters() {
    yield "A";
    yield "B";
    yield "C";
}

function* delegateGenerator() {
    yield* generatorNums();
    yield* generatorLetters();
    yield* [4, 5, 6];
}

let generator = delegateGenerator();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return("Pausing"));
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
*/

// Generators to Generate Infinte Numbers
/*
function* generateInfinteNums() {
    let num = 0;
    while (true) {
        yield num++;
    }
}

let generator = generateInfinteNums();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
*/

// Modules import and export

// import { arr, num, sayHello as welcome } from "./module.js";
// console.log(arr);
// console.log(num);
// console.log(welcome());

// Modules default

// import sayWelcome, { arr, num, sayHello } from "./module.js";
// console.log(sayWelcome());

import * as all from "./module.js";

console.log(all.default());
console.log(all.sayHello());
