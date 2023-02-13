// Task 1
/*
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
let iterator = setOfNumbers.keys();

console.log(setOfNumbers);
iterator.next();
iterator.next();
console.log(iterator.next().value);
console.log(Array.from(setOfNumbers)[2]);
*/

// Task 2
/*
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let mySet = new Set(myFriends.sort());
console.log(mySet);
*/

// Task 3
/*
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMap = new Map(Object.entries(myInfo));
// let myMap = new Map();
// Object.keys(myInfo).map((key) => myMap.set(key, myInfo[key]));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));
*/

// Task 4
/*
let theNumber = 100020003000;
console.log(
    Array.from(new Set([...theNumber.toString()]))
        .filter((el) => el !== "0")
        .join("")
);
*/

// Task 5
/*
let theName = "Elzero";

console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(""));
console.log(Object.assign([], theName));
let charArray = [];

for (const char of theName) {
    charArray.push(char);
}
console.log(charArray);

console.log(Array.prototype.slice.call(theName));
*/

// Task 6
/*
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6],
    newArr = [];
chars.forEach((el) => {
    typeof el === "number" ? newArr.push(el) : "";
});
chars = chars.filter((el) => {
    return typeof el !== "number";
});
newArr.reverse().forEach((el) => chars.unshift(el));
chars.copyWithin(0, newArr.length, newArr.length * 2);
console.log(chars);
*/

// Task 7
/*
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let arr = [];

// arr = [...numsOne, ...numsTwo];
// arr = numsOne.concat(numsTwo);
// numsOne.push(...numsTwo);
// console.log(numsOne);
arr = numsTwo.reduce((arr, item) => {
    arr.push(item);
    return arr;
}, numsOne);
console.log(arr);
*/
