// Desturcturing Array
/*
let myFriends = ["Marwan", "Mohamed", "Abd El-aal"];

let a = 1,
    b = 2,
    c = 3,
    d;

[a, b, c] = myFriends;
console.log(a);
console.log(b);
console.log(c);

[a, , c] = myFriends;

console.log(a);
console.log(c);

[a, , c, d = "default Value"] = myFriends;

console.log(a);
console.log(c);
console.log(d);
*/

// Destructring Arrays Advanced Examples
/*
let myFriends = [
    "Ahmed",
    "Sayed",
    "Aly",
    ["Shady", "Amr", ["Mohamed", "Gamal"]],
];

let a, b;

[, , , [a, , [, b]]] = myFriends;

console.log(a);
console.log(b);
*/

// Destructring Swapping Variables
/*
let book = "Video",
    video = "Book";

[book, video] = [video, book];
console.log(book);
console.log(video);
*/

// Desturcturing Objects
/*
let obj = {
    theName: "Marwan",
    theAge: 24,
    theCountry: "Egypt",
    theContinet: "Africa",
};

let { theName, theAge, theContinet } = obj;

console.log(theName);
console.log(theAge);
console.log(theContinet);
*/

// Desturcturing nested objects
/*
let obj = {
    theName: "Marwan",
    theAge: 24,
    theCountry: "Egypt",
    theContinet: "Africa",
    skills: {
        html: 70,
        css: 80,
    },
};

const {
    theName: na,
    theAge: age,
    skills: { html: h, css: cs },
} = obj;

console.log(h);

const { html, css } = obj.skills;
console.log(html);
*/

// Destructuring function parameters
/*
let obj = {
    theName: "Marwan",
    theAge: 24,
    skills: {
        html: 70,
        css: 80,
    },
};

function showObj({ theName: userName, theAge: age, skills: { css } }) {
    console.log(
        `Your Name is ${userName}, Your age is ${age}, Your level in CSS is ${css}`
    );
}

showObj(obj);
*/

// Desturcturing mixed content
/*
const user = {
    theName: "Osama",
    theAge: 39,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
        egypt: "Cairo",
        ksa: "Riyadh",
    },
};

const {
    theName,
    theAge,
    skills: [one, two, three],
    addresses: { egypt },
} = user;

console.log(
    `Your name is ${theName}. Your Age is ${theAge}. Your skills is: ${one}, ${two}, ${three}. You live in ${egypt}`
);
*/

/*
    Destructuring
    - Challenge
*/

let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

const [
    {
        title,
        age,
        available,
        skills: [, lastSkill],
    },
    ,
] = myFriends;

if (chosen === 1) {
    console.log(
        `Your name is ${title}, Your age is ${age}, ${
            available ? "Available" : "Not Available"
        }, Your Last Skill ${css}`
    );
}

const [
    ,
    {
        title: title2,
        age: age2,
        available: available2,
        skills: [, lastSkill2],
    },
] = myFriends;

if (chosen === 2) {
    console.log(
        `Your name is ${title2}, Your age is ${age2}, ${
            available2 ? "Available" : "Not Available"
        }, Your Last Skill ${lastSkill2}`
    );
}

const [
    ,
    ,
    {
        title: title3,
        age: age3,
        available: available3,
        skills: [, lastSkill3],
    },
] = myFriends;

if (chosen === 3) {
    console.log(
        `Your name is ${title3}, Your age is ${age3}, ${
            available3 ? "Available" : "Not Available"
        }, Your Last Skill ${lastSkill3}`
    );
}
