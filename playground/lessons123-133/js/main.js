// Set data type
/*
let myElements = [1, 1, 1, 2, 3];
let myUniqueElements = new Set(myElements);

console.log(myElements);
console.log(myUniqueElements);
console.log(myUniqueElements.size);

myUniqueElements.add("A");
myUniqueElements.delete(1);

console.log(myUniqueElements.has("A"));
console.log(myUniqueElements.has("1"));

myUniqueElements.clear();
console.log(myUniqueElements);
*/

// Weak set (Garbage Collector)
/*
let mySet = new Set([1, 1, 2, 3, "A"]),
    iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

mySet.forEach((el) => console.log(el));

let myws = new WeakSet([{ A: 2, B: 3 }]);
console.log(myws);
*/

// Map data type
/*
let myObj = {
    10: "number",
    10: "String",
};

let myMap = new Map();
myMap.set(10, "Number");
myMap.set("10", "String");

console.log(myObj);
console.log(myMap);

let myEmptyObj = Object.create(null);
console.log(myEmptyObj);
*/

// Map Methods
/*
let myMap = new Map([
    [10, "Number"],
    ["Name", "String"],
    [false, "Boolean"],
]);

console.log(myMap);
console.log(myMap.size);
console.log(myMap.has(false));
myMap.clear();
console.log(myMap.size);
*/

// Weak Map
/*
let obj = { theName: "Marwan" },
    myWeakMap = new WeakMap();
myWeakMap.set(obj, "Object Value");
obj = null;
console.log(myWeakMap);
*/

// Array.from()
/*
console.log(Array.from("12345", (el) => +el + +el));

function arrayFrom() {
    return Array.from(arguments);
}

console.log(arrayFrom(..."987654321"));
console.log(arrayFrom("Marwan", "Mohamed", 1, 2, 3));
*/

// Array.copyWithin()
/*
let myArray = [10, 20, 30, 40, 50, "A", "B"];
// myArray.copyWithin(4, -1);
// myArray.copyWithin(1, -2);
myArray.copyWithin(1, -2, -1);
console.log(myArray);
*/

// Array.some()
/*
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 5;

let check = nums.some(function (el) {
    return el > this;
}, myNumber);
// console.log(check);

function checkValue(arr, val) {
    return arr.some(function (el) {
        return el === val;
    });
}

// console.log(checkValue(nums, 7));
// console.log(checkValue(nums, 70));

let range = {
    min: 10,
    max: 20,
};

let checkNumInRange = nums.some(function (el) {
    return el >= this.min && el <= this.max;
}, range);

console.log(checkNumInRange);
*/

// Array.every()
/*
const locations = {
    20: "Place 1",
    30: "Place 2",
    50: "Place 3",
    40: "Place 4",
};

let mainLocation = 15;

let locationsList = Object.keys(locations),
    locationsNum = locationsList.map(function (el) {
        return +el;
    });

console.log(locationsNum);

let check = locationsNum.every(function (el) {
    return el > this;
}, mainLocation);

console.log(check);
*/

// Spread Operator

console.log(..."Marwan");
console.log([..."Marwan"]);

let arr1 = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9],
    mainArray = [...arr1, ...arr2];
console.log(mainArray);

let pushedArray = [];
pushedArray.push(...arr1);
console.log(pushedArray);

let myNums = [1, 2, 3, 4, 5, 6, 7];
console.log(Math.max(...myNums));

let obj1 = { a: 1, b: 2 },
    obj2 = { c: 3, d: 4 },
    obj3 = { ...obj1, ...obj2 };
console.log(obj3);
