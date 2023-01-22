// Data Types
/* console.log(typeof 1220.2);
console.log(typeof ["ahmed", "Marwan", "Osama"]);
console.log(typeof { name: "Marwan", age: 24, salary: 2000 }); */

// Concatenation Operator
/* let a = "We Love",
    b = "JavaScript";
document.write(a + " " + b); */

// Template Literals (Strings Template)-p-;
/* let title = "Marwan",
    desc = "This is a briliant paragraph";

let markup = `
    <div class = "card">
        <div class = "child">
            <h1>${title}</h1>
            <p>${desc}</p>
        </div>
    </div>
`;

document.write(markup); */

// Challenge
const date = new Date();
let day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear();

let cardTitle = "Elzero",
    cardDescription = "Elzero Web School",
    cardDate = `${day}/${month}/${year}`;

let markup = `
    <div class = "card">
        <h3>Hello ${cardTitle}</h3>
        <p>${cardDescription}</p>
        <span>${cardDate}</span>
    </div>
`;
let result = markup.repeat(4);
let container = `
    <div class = "container">
        ${result}
    </div>
`;
document.write(container);
