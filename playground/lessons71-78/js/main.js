// Higher Order Function (map)
/*
let myNums = [1, 2, 3, 4, 5, 6];

let sumOfArray = [];

for (let i = 0; i < myNums.length; i++) {
    sumOfArray.push(myNums[i] + myNums[i]);
}

let sumOfArray2 = myNums.map(function (element) {
    return element + element;
});

let sumOfArray3 = myNums.map((element) => element + element);

function addition(element) {
    return element + element;
}

let sumOfArray4 = myNums.map(addition);

console.log(myNums);
console.log(sumOfArray);
console.log(sumOfArray2);
console.log(sumOfArray3);
console.log(sumOfArray4);
*/

// Map Practises
/*
let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = swappingCases
    .split("")
    .map((elem) =>
        elem === elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase()
    )
    .join("");

console.log(`Swapded Array: ${sw}`);

let inv = invertedNumbers.map((elem) => -elem);
console.log(`Inverted Array: ${inv}`);

let ign = ignoreNumbers
    .split("")
    .map((elem) => (isNaN(parseInt(elem)) ? elem : ""))
    .join("");

console.log(`IgnoreNumbers Array: ${ign}`);
*/

// Filter
/*
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let friendsWithA = friends.filter((elem) => elem.startsWith("A"));
console.log(friendsWithA);

let friendsWithS = friends.filter(function (elem) {
    return elem.startsWith("S");
});
console.log(friendsWithS);

let numbers = [11, 20, 2, 5, 17, 10];

let evenNumber = numbers.filter((elem) => elem % 2 === 0);
console.log(evenNumber);

let oddNumber = numbers.filter(function (elem) {
    return elem % 2 !== 0;
});
console.log(oddNumber);
*/

// Filter Practise
/*
let mix = "A13BS2ZX";

let result = mix
    .split("")
    .filter(function (el) {
        return !isNaN(parseInt(el));
    })
    .map(function (el) {
        return el * el;
    })
    .join("");

console.log(result);

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
    .split(" ")
    .filter((el) => el.length <= 4)
    .join(" ");
console.log(smallWords);

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers
    .split("")
    .filter((el) => isNaN(parseInt(el)))
    .join("");
console.log(ign);
*/

// Reduce Function
/*
let nums = [10, 20, 15, 30];

let addition = nums.reduce(function (accumlator, current, index, Array) {
    return accumlator + current;
}, 0);
console.log(addition);
*/

// Reduce Practise
/*
let theBiggest = [
    "Bla",
    "Propaganda",
    "Other",
    "AAA",
    "Battery",
    "Test",
    "Propaganda_Two",
];

let bigWord = theBiggest.reduce(function (acc, current) {
    return acc.length > current.length ? acc : current;
});
console.log(bigWord);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let word = removeChars
    .filter(function (el) {
        return el !== "@";
    })
    .reduce(function (acc, current) {
        return `${acc}${current}`;
    });
console.log(word);
*/

// forEach function
/*
let allLis = document.querySelectorAll("ul li");
let allDive = document.querySelectorAll(".content div");

allLis.forEach(function (el) {
    el.onclick = function () {
        allLis.forEach(function (el) {
            el.classList.remove("active");
        });
        this.classList.add("active");
        let check = this.innerHTML;
        allDive.forEach(function (el) {
            el.style.display = "none";
            if (el.innerHTML === check) {
                el.style.display = "block";
            }
        });
    };
});
*/

/*
    Higher Order Functions Challenges

    You Can Use
    - ,
    - _
    - Space
    - True => 1 => One Time Only In The Code

    You Cannot Use
    - Numbers
    - Letters

    - You Must Use [Filter + Map + Reduce + Your Knowledge]
    - Order Is Not Important
    - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
    .split(",")
    .slice("", myString.indexOf()) //indexOf() is -1
    .filter((ele, index) => isNaN(parseInt(ele)))
    .map(function (el) {
        return el === "_" ? " " : el;
    })
    .reduce(function (acc, current) {
        return `${acc}${current}`;
    })
    .slice(true);

console.log(solution); // Elzero Web School
