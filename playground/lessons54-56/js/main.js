// While Loop
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"],
    index = 0;

while (index < products.length) {
    console.log(products[index]);
    index++;
}
*/

// Do While Loop
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"],
    index = 0;
do {
    console.log(products[index]);
    index++;
} while (index < products.length);
*/

// Loop Challenge

let myAdmins = ["Ahmed", "Osama", "Sayed", "Marwan", "Stop", "Samera"];
let myEmployees = [
    "Amgad",
    "Samah",
    "Ameer",
    "Omar",
    "Othman",
    "Amany",
    "Samia",
    "Anwar",
    "Mohamed",
    "Malek",
];

// Get the admins number
let adminsNum = 0;
for (let i = 0; i < myAdmins.indexOf("Stop"); i++) {
    adminsNum++;
}
document.write(`<h1>We Have ${adminsNum} Admins</h1>`);
document.write(`<hr/>`);

// Team members
let counter = 0;
for (let i = 0; i < adminsNum; i++) {
    document.write(`<div>`);
    document.write(`<h2>The Admins for team ${i + 1} is ${myAdmins[i]}</h2>`);
    document.write(`<h3>Team Members</h3>`);
    counter = 0;
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j][0] === myAdmins[i][0]) {
            counter++;
            document.write(`<p>- ${counter} ${myEmployees[j]}</p>`);
        }
    }
    document.write(`</div>`);
    document.write(`<hr/>`);
}
