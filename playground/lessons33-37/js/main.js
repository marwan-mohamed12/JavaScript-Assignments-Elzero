// Ternary Operators
/*let theName = "Marwan",
    theGender = "Male",
    theAge = 24;

let result = theGender === "Male" ? "Mr" : "Mrs";
console.log(`Hello ${result}.${theName}`);

theAge < 20
    ? console.log("under 20")
    : theAge >= 20 && theAge <= 60
    ? console.log(
        "You are a man now you have to understand your responsabilties"
    )
    : console.log("You are more than 60");*/

// Logical or || && Nullish Coaliscing
/*let price1 = 0,
    price2 = null;
console.log(`The price1 is ${price1 || 200}, The price2 is ${price2 ?? 300}`); */

// Challenge 1
/*
    If Condition Challenge
*/

/*
let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
a < 10
    ? console.log(10)
    : a >= 10 && a <= 40
    ? console.log("10 To 40")
    : a > 40
    ? console.log("> 40")
    : console.log("Unknown");
*/

// Challenge 2
let st = "Elzero Web School";

if (`${st.repeat(2).length}` === "34") {
    console.log("Good");
}

// W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
    console.log("Good");
}

if (st !== "string") {
    console.log("Good");
}

if (typeof st.length === "number") {
    console.log("Good");
}

if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}
