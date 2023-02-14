// Task 1
/*
class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }

    run() {
        return `Car Is Running Now`;
    }

    stop() {
        return `Car Is Stopped`;
    }
}

let bmw = new Car("BMW", "x6", 3000000);
let audi = new Car("Audi", "q3", 40000000);
let mercides = new Car("Mercides", "benz", 5000000);

console.log(`Car One is ${bmw.n} And Model Is ${bmw.m} And Price Is ${bmw.p}`);
console.log(audi.run());
*/

// Task 2
/*
class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

class Tablet extends Phone {
    constructor(name, serial, price, size) {
        super(name, serial, price);
        this.size = size || "unknown";
    }
    fullDetails() {
        return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
    }
}

// Write Tablet Class Here

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
*/

// Task 3
/*
class User {
    #c;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
    }
    getCard() {
        return this.#c;
    }
    showData() {
        return `Hello ${this.u} Your Credit Card Number Is ${this.#c
            .toString()
            .match(/\d{4}/g)
            .join("-")}`;
    }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData());
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData());
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData());
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefineds
*/

// Task 4
/*
// Write Your Code Here
String.prototype.addLove = function () {
    return `I Love ${this} Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
*/

// Task 5

const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

// Write Your Code Here

Object.defineProperties(myObj, {
    score: {
        writable: false,
    },
    id: {
        enumerable: false,
    },
    country: {
        enumerable: false,
        configurable: true,
    },
});

myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

delete myObj.country;

console.log(myObj);

// Needed Output
//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}
