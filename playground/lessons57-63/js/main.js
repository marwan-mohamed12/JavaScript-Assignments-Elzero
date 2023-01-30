// Function declaration
/*
function sayHello(userName) {
    console.log(`Hello ${userName}`);
}
sayHello("Marwan");
*/

// Function Advanced Example
/*
function generateYears(start = "0", end) { //default values for parammeters
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

generateYears(1999, 2023);
*/

// Rest parameters
/*
function calc(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return `The sum is equale ${sum}`;
}

console.log(calc(1, 2, 3));
*/

// Advanced Practise
/*
function showInfo(
    userName = "Unknown",
    age = "unknown",
    rate = 0,
    show = "yes",
    ...skills
) {
    document.write(`<div>`);
    document.write(`<h2>Welcome ${userName}</h2>`);
    document.write(`<h3>Age: ${age}</h3>`);
    document.write(`<p>Hour Rate: ${rate}</p>`);
    if (show === "yes") {
        if (skills.length === 0) {
            document.write("There's no added skills");
        } else {
            document.write(`<p>Skills: ${skills.join(", ")}</p>`);
        }
    } else {
        document.write("Skills is hidden.");
    }
    document.write(`</div>`);
}

showInfo("Marwan", 24, 40, "no", "HTML", "CSS", "JS");
*/

/*
    Random Arguments Function Challengs
*/

function showDetails(a, b, c) {
    let name, age, available;
    typeof a === "string"
        ? (name = a)
        : typeof b === "string"
        ? (name = b)
        : (name = c);

    typeof a === "number"
        ? (age = a)
        : typeof b === "number"
        ? (age = b)
        : (age = c);

    typeof a === "boolean"
        ? (available = a)
        : typeof b === "boolean"
        ? (available = b)
        : (available = c);
    available = available === true ? "Available" : "Not Available";
    return `Hello ${name}, Your Age Is ${age}, You Are ${available} For Hire`;
}

console.log(showDetails("Osama", 38, true));
console.log(showDetails(38, "Osama", true));
console.log(showDetails(true, 38, "Osama"));
console.log(showDetails(true, 38, "Osama"));
console.log(showDetails(false, "Osama", 38));
