// Object
/*
let user = {
    theName: "Marwan",
    age: 24,
    sayHello: function () {
        return `Hello ${this.theName}, You're ${this.age} years old`;
    },
};

console.log(user.theName);
console.log(user.age);
console.log(user.sayHello());
*/

// Dot notation Vs Bracket notation
/*
let country = "Country of";

let user = {
    theName: "Marwan",
    "Country of": "Egypt",
};

console.log(user.theName);
console.log(user[country]);
*/

// Nested Objects
/*
let user = {
    theName: "Marwan",
    age: 24,
    skills: ["HTML", "CSS", "JS"],
    available: false,
    addresses: {
        KSA: "Makkah",
        Egypt: {
            one: "Alexandria",
            two: "Cairo",
        },
    },
    checkAv: function () {
        return user.available === true
            ? `Free to Work`
            : `Not Available right now`;
    },
};

console.log(user.skills);
console.log(user.skills[2]);
console.log(user.skills.join(" | "));
console.log(user.addresses);
console.log(user["addresses"]["Egypt"]["one"]);
*/

// Create Objects using new keyword
/*
let user = new Object({
    age: 20,
});

console.log(user.age);

user.age = 24; // reassign the 24 value for the age property
user["country"] = "Egypt"; // add country property to the object

user.sayHello = function () {
    return `Hello`;
}; // add Method to the object

console.log(user);
*/

// this in objects
/*
document.getElementById("cl").onclick = function () {
    console.log(this);
};

let user = {
    age: 24,
    getAgeInDays: function () {
        return this.age * 365;
    },
};
console.log(user.age);
console.log(user.getAgeInDays());
*/

// Create object with the create method
/*
let user = {
    age: 24,
    doubleAge: function () {
        return this.age * 2;
    },
};

let copyOfUser = Object.create(user);

copyOfUser.age = 25;

console.log(user.age);
console.log(user.doubleAge());

console.log(copyOfUser.age);
console.log(copyOfUser.doubleAge());
*/

// Create object with assign methods

let obj1 = {
    prop1: 1,
    meth1: function () {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function () {
        return this.prop2;
    },
};

let targetObject = {
    prop1: 100,
    prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop4 = 24;
console.log(finalObject);
