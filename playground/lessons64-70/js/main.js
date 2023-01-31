// Anonymous Function
/*
let addition = function (num1, num2) {
    return num1 + num2;
};

console.log(addition(1, 2));

document.getElementById("show").onclick = function () {
    console.log("Show");
};

setTimeout(function () {
    console.log("Hello");
}, 2000);
*/

// Nested Function
/*
function sayHello(fName, lName) {
    let message = `Hello`;
    function concateMessage() {
        function fullName() {
            return `${fName} ${lName}`;
        }
        return `${message} ${fullName()}!`;
    }
    return concateMessage();
}

console.log(sayHello("Marwan", "Mohamed"));
*/

// Arrow Function
/*
let add = (num1, num2) => num1 + num2;
console.log(add(1, 2));

let sayHello = (fname) => {
    return `Hello ${fname}`;
};
console.log(sayHello("Marwan Mohamed    "));
*/

/*
    Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...names) {
//     // Parameter ?
//     return `[${names.join("], [")}] => Done !`;
// };

let names = (...names) => `String [${names.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => {
//     return one + two + +nums;
// };

let calc = function (one, two, ...nums) {
    return one + two + +nums;
};

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80
