// Constructor
/*
function User(id, theName, salalry) {
    this.id = id;
    this.theName = theName;
    this.salalry = salalry + 5000;
}

let userOne = new User(100, "Marwan", 80000);
let userTwo = new User(101, "Mohamed", 90000);
let userThree = new User(102, "Abd El-aal", 10000);

console.log(userOne);
console.log(userTwo);
console.log(userThree);
*/

// Constructor new syntax
// Deal with properties and methods
// Update properties
// Built IN constructors
/*
class User {
    constructor(id, theName, salalry) {
        this.id = id;
        this.theName = theName || "Unknown";
        this.salalry = salalry + 5000;
        this.msg = function () {
            return `Hello ${this.theName} Your Salary is ${this.salalry}`;
        };
    }

    sayHello() {
        return `Hello ${this.theName} Your Salary is ${this.salalry}`;
    }

    updateName(newName) {
        this.theName = newName;
    }
}

let userOne = new User(100, "Marwan", 80000);
let userTwo = new User(101, "Mohamed", 90000);
let userThree = new User(102, "Abd El-aal", 10000);

console.log(userOne);
console.log(userOne.msg());
console.log(userOne.sayHello());
userOne.updateName("Abdo");
console.log(userOne);
console.log(userOne.msg());
console.log(userOne.sayHello());

console.log(userTwo);
console.log(userTwo.msg());
console.log(userTwo.sayHello());

console.log(userThree);
console.log(userThree.msg());
console.log(userThree.sayHello());
*/

// Static Methods and properties
// inheritance
/*
class User {
    static count = 0;

    constructor(id, theName, salaray) {
        this.id = id;
        this.theName = theName;
        this.salaray = salaray;
        User.count++;
    }

    static numberOfMembers() {
        return `${this.count} Member Created`;
    }

    sayHello() {
        return `Hello ${this.theName}`;
    }
}

class Admin extends User {
    constructor(id, theName, salaray, permissions) {
        super(id, theName, salaray);
        this.permissions = permissions;
    }
}

let userOne = new User(100, "Marwan", 80000);
let userTwo = new User(101, "Mohamed", 90000);
let userThree = new User(102, "Abd El-aal", 10000);

console.log(User.numberOfMembers());

let adminOne = new Admin(110, "Marwan Admin", 90000, 1);
console.log(adminOne);
console.log(adminOne.sayHello());
*/

// Encapsulation
/*
class User {
    #eSalary;
    constructor(id, theName, eSalary) {
        this.id = id;
        this.theName = theName;
        this.#eSalary = eSalary;
    }

    getSalary() {
        return parseInt(this.#eSalary);
    }
}

class subUser extends User {
    constructor(id, theName, eSalary, permissions) {
        super(id, theName, eSalary);
        this.permissions = permissions;
    }
}

let userOne = new User(1, "Marwan", 10000);
console.log(`Your Expected Salary is ${userOne.getSalary()}`);

let subUserOne = new subUser(1, "Marwan Junior", 15000, 2);
console.log(subUserOne);
console.log(subUserOne.getSalary());
*/

// Prototypes
/*
class User {
    constructor(id, theName) {
        this.id = id;
        this.theName = theName;
    }

    sayHello() {
        return `Hello ${this.theName}`;
    }
}

User.prototype.salary = 2000;
console.log(User.prototype);

User.prototype.sayWelcome = function () {
    return `Welcome ${this.theName}`;
};

let userOne = new User(1, "Marwan");
console.log(userOne.sayWelcome());

String.prototype.addDot = function () {
    return `.${this}.`;
};
*/

// Object Meta Data
/*
let myObj = {
    a: 1,
    b: 2,
};

Object.defineProperty(myObj, "c", {
    writable: true,
    enumerable: false,
    configurable: false,
    value: 3,
});
Object.defineProperty(myObj, "c", {
    writable: true,
    enumerable: true,
    configurable: false,
    value: 300,
});

myObj.c = 100; // if writable false it won't overwrite

for (let prop in myObj) {
    console.log(prop, myObj[prop]);
}

console.log(delete myObj.c);
console.log(myObj);
*/

// create multiple properties

let myObj = {
    a: 1,
    b: 2,
};

Object.defineProperties(myObj, {
    c: {
        configurable: true,
        value: 3,
    },
    d: {
        configurable: true,
        value: 4,
    },
});

Object.getOwnPropertyDescriptor(myObj, "c");
Object.getOwnPropertyDescriptors(myObj);
