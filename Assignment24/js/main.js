// Task 1
/*
let myBirthday = new Date("jun 25, 1999");

console.log(myBirthday);
let date = myBirthday.getTime();
console.log(date);
console.log(`${date / 1000} Secods`);
console.log(`${date / 1000 / 60} Minutes`);
console.log(`${Math.round(date / 1000 / 60 / 60)} Hours`);
console.log(`${Math.round(date / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.round(date / 1000 / 60 / 60 / 24 / 365)} Years`);
*/

// Task 2
/*
let myDate = new Date("1980");
myDate.setSeconds(1);
console.log(myDate);
*/

// Task 3
/*
let myDate = new Date();
myDate.setDate(0);
const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

console.log(myDate);
// console.log(
//     `Previous Month Is ${
//         month[myDate.getMonth()]
//     } And Last Day Is ${myDate.getDate()}`
// );
console.log(
    `Previous Month Is ${myDate.toLocaleString("default", {
        month: "long" || "short",
    })} And Last Day Is ${myDate.getDate()}`
);
*/

// Task 4
/*
let myDateOne = new Date("jun 25, 99");
console.log(myDateOne);
console.log("#".repeat(66));

let myDateTwo = new Date("6-25-1999");
console.log(myDateTwo);
console.log("#".repeat(66));

let myDateThree = new Date(1999, 6, 25, 0, 0);
console.log(myDateTwo);
*/

// Task 5
/*
let tStart = performance.now();

for (let i = 1; i <= 99999; i++) {
    console.log(i);
}

let tEnd = performance.now(),
    result = tEnd - tStart;

console.log(`Loop Took ${parseInt(result)} Milliseconds.`);
*/

// Task 6
/*
// Write Your Generator Function Here
function* gen() {
    let num = 14,
        n = 0;
    yield num;
    while (true) {
        yield (num += 140 + 200 * n);
        n++;
    }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
*/

// Task 7
/*
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}
*/

// Task 8

import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
