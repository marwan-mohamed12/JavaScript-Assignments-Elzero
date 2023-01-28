// Array
/*
let myArray = ["Marwan", "Mohamed", "Abd El-aal", ["Abdo", "Rodina"]];
console.log(myArray[1]);
myArray[2] = "Osman";
console.log(myArray);
console.log(Array.isArray(myArray));
*/

// Array length
/*
let myArray = ["Marwan", "Mohamed", "Abd El-aal", ["Abdo", "Rodina"]];
myArray.length = 2; // To specify certain length to the array
myArray[myArray.length] = "Anonymous Name"; // To add element to the end of the array
console.log(myArray);
myArray[myArray.length - 1] = "Anonymous Value"; // To update the last value in the array
console.log(myArray);
*/

// Array unshift, push, shift, pop
/*
let myArray = ["Marwan", "Mohamed", "Abd El-aal"];
myArray.unshift("Malek", "Yonius");
myArray.push("Osman", "Hussien");
let first = myArray.shift(),
    last = myArray.pop();
console.log(myArray);
console.log(`First: ${first}`);
console.log(`Last: ${last}`);
*/

// Array Methods [Search]
/*
let myArray = ["Marwan", "Mohamed", "Osman", "Abd El-aal"];
console.log(myArray.indexOf("Abd El-aal"));
console.log(myArray.lastIndexOf("Osman"));
console.log(myArray.includes("Osman"));

if (myArray.indexOf("Malek") == -1) {
    console.log("Not Found");
}
*/

// Array Sorting
/*
let myArray = [1, 4, 6, 7, 300];
console.log(myArray.sort().reverse());
*/

// Array Slicing
/*
let myArray = ["Marwan", "Mohamed", "Osman", "Abd El-aal", "Huessin"];
console.log(myArray.slice(1));
console.log(myArray);
myArray.splice(1, 2, "Sameer", "Samara");
console.log(myArray);
*/

// join arrays
/*
let arr1 = [1, 2, 3],
    arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(arr3.join(", "));
*/

/*
    Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
--counter;

console.log(my.slice(++zero, counter)); // ["Elham", "Mazero"]
--zero;

console.log(
    my[--counter].slice(zero, counter) +
        my.slice(++zero, ++zero).join().substring(2)
); // "Elzero"
--zero;
--zero;
++counter;
console.log(
    my[++zero].charAt(++counter) +
        my[zero].charAt(my[zero].length - zero).toUpperCase()
); // "rO"
