// Task 1
/*
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
    if (i === 40) {
        continue;
    }
    console.log(i);
}
*/

// Task 2
/*
let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= stop; i--) {
    if (i < 10) {
        console.log(`0${i}`);
        continue;
    }
    console.log(i);
}
*/

// Task 3
/*
let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
    console.log(i);
    for (let j = breaker; j <= end - breaker; j += 2) {
        console.log(`-- ${j}`);
    }
}
*/

// Task 4
/*
let index = 10;
let jump = 2;
let end = 0;

for (;;) {
    // Write Your Code Here
    console.log(index);
    if (index < ++end + jump + true) {
        break;
    }
    index -= jump;
}
*/

// Task 5
/*
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a",
    count = 0;

for (let i = 0; i < friends.length; i++) {
    if (friends[i].charAt(0) === "A") {
        continue;
    }
    console.log(`${count + 1} => ${friends[i]}`);
    count++;
}
*/

// Task 6
/*
let start = 0;
let swappedName = "elZerO",
    swappedResult = "";

for (let i = 0; i < swappedName.length; i++) {
    swappedName[i] === swappedName[i].toLowerCase()
        ? (swappedResult += swappedName[i].toUpperCase())
        : (swappedResult += swappedName[i].toLowerCase());
}
console.log(swappedResult);
*/

// Task 7

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
++start;

for (let i = start; i < mix.length; i++) {
    if (typeof mix[i] === "string") {
        continue;
    }
    console.log(mix[i]);
}
