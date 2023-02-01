// Task 1
/*
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let letters = mix
    .map((el) => (isNaN(parseInt(el)) ? el : ""))
    .reduce(function (acc, current) {
        return `${acc}${current}`;
    });
console.log(letters);
*/

// Task 2
/*
let myString = "EElllzzzzzzzeroo";

let word = myString
    .split("")
    .filter(function (el, index, arr) {
        return arr.indexOf(el) === index;
    })
    .join("");

console.log(word);
*/

// Task 3
/*
let myArray = ["E", "l", "z", ["e", "r"], "o"];
console.log(myArray.flat());

let flatArray = myArray
    .reduce(function (acc, current) {
        return `${acc}${current}`;
    })
    .split("")
    .filter(function (el) {
        return el !== ",";
    })
    .join("");
console.log(flatArray);

// Another genius solution
let flatArray2 = myArray.reduce(function (acc, current) {
    return Array.isArray(current)
        ? acc +
              current.reduce(function (subAcc, subCurr) {
                  return `${subAcc}${subCurr}`;
              })
        : `${acc}${current}`;
});
console.log(flatArray2);
*/

// Task 4
/*
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let invNum = numsAndStrings
    .filter(function (el) {
        return !isNaN(parseInt(el));
    })
    .map((el) => -el);
console.log(invNum);
*/

// Task 5

let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function (acc, current) {
    return current % 2 === 0 ? acc * current : acc + current;
}, 1);

console.log(result);
