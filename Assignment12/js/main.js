// Task 1
/*
function sayHello(theName, theGender) {
    if (theGender === undefined) {
        console.log(`Hello ${theName}`);
    } else {
        console.log(`Hello ${theGender === "Male" ? "Mr." : "Mrs."}${theName}`);
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
*/

// Task 2
/*
function calculate(firstNum, secondNum, operation) {
    if (firstNum === undefined || secondNum === undefined) {
        console.log("Second Number Not Found");
    } else {
        if (operation === "subtract") {
            console.log(firstNum - secondNum);
        } else if (operation === "multiply") {
            console.log(firstNum * secondNum);
        } else {
            console.log(firstNum + secondNum);
        }
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
*/

// Task 3
/*
function ageInTime(theAge) {
    let Months = theAge * 12,
        weeks = Months * 4,
        days = weeks * 7,
        hours = days * 24,
        minutes = hours * 60,
        seconds = minutes * 60;
    if (theAge < 10 || theAge > 100) {
        console.log("Age Out Of Range");
    } else {
        console.log(`Your Age in Years => ${theAge}
    Your Age in Months => ${Months}
    Your Age in Weeks => ${weeks}
    Your Age in Days => ${days}
    Your Age in Hours => ${hours}
    Your Age in Minutes => ${minutes}
    Your Age in Seconds => ${seconds}`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
*/

// Task 5
/*
function createSelectBox(startYear, endYear) {
    document.write(`<select>`);
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value = "${i}">${i}</option>`);
    }
    document.write(`</select>`);
}
createSelectBox(2000, 2021);
*/

// Task6

function multiply(...numbers) {
    let multiplication_result = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "string") {
            continue;
        } else {
            multiplication_result *= parseInt(numbers[i]);
        }
    }
    console.log(multiplication_result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
