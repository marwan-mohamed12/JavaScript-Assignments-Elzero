// Task 1
/*
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
myFriends.push("Gamal");
// Method 2
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];
*/

// Task 2
/*
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]
*/

// Task 3
/*
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo).sort().reverse();

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
*/

// Task 4
/*
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop().shift().slice(website.length).toUpperCase()); // ZERO
*/

// Task 5
/*
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

console.log(haystack.indexOf(needle));
console.log(haystack.lastIndexOf(needle));
console.log(haystack.includes(needle));
*/

// Task 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2).sort(); // ['A', 'C', 'D', 'E', 'F', 'X', 'Y']

// Your Code Here

console.log(allArrs.slice(allArrs.indexOf("F")).join("").toLowerCase()); // fxy
