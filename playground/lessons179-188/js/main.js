// Callback Hell || Pyramid of doom
/*
let p = document.querySelector(".test");

function makeItRed(event) {
    event.currentTarget.style.color = "red";
}

p.addEventListener("click", makeItRed);

function callbackFunc() {
    console.log("I'm a callback func");
}

setTimeout(() => {
    callbackFunc();
}, 2000);
*/

// Prmises
/*
const myPromise = new Promise((resolvedFunc, rejectedFunc) => {
    let connect = true;
    if (connect) {
        resolvedFunc("Connected Successfuly");
    } else {
        rejectedFunc(Error("Connection not found"));
    }
});

// myPromise.then(
//     (resolved) => console.log(resolved),
//     (rejected) => console.log(rejected)
// );
console.log(myPromise);

let resolvedVar = (resolved) => console.log(resolved),
    rejectedVar = (rejected) => console.log(rejected);

myPromise.then(resolvedVar, rejectedVar);

myPromise.then(
    () => console.log("Marwan"),
    () => console.log("Mohamed")
);
*/

// Promise Exceptions
/*
const myPromise = new Promise((resolvedFunc, rejectedFunc) => {
    let employees = ["Marwan", "Mohamed", "Abd El-aal", "Osman"];
    if (employees.length === 4) {
        resolvedFunc(employees);
    } else {
        rejectedFunc(Error("Number Of Employees Is Not 4"));
    }
});

myPromise
    .then((resolvedValue) => {
        resolvedValue.length = 2;
        return resolvedValue;
    })
    .then((resolvedValue) => {
        resolvedValue.length = 1;
        return resolvedValue;
    })
    .then((resolvedValue) =>
        console.log(`The selected Employee is ${resolvedValue}`)
    )
    .catch((rejectedValue) => console.log(rejectedValue))
    .finally(console.log("The operation is done"));
*/

// Promise and XHR
/*
const getData = (apiLink) => {
    return new Promise((resolved, rejected) => {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = () => {
            if (myRequest.readyState === 4 && myRequest.status === 200) {
                resolved(JSON.parse(myRequest.responseText));
            } else {
                rejected(Error("Something Went wrong"));
            }
        };

        myRequest.open("GET", apiLink);
        myRequest.send();
    });
};

getData("https://api.github.com/users/marwan-mohamed12/repos")
    .then((resolvedVal) => {
        resolvedVal.length = 10;
        return resolvedVal;
    })
    .then((resolvedVal) => console.log(resolvedVal[0].name))
    .catch((rejectedVal) => console.log(rejectedVal));
*/

// Fetch API
/*
fetch("https://api.github.com/users/marwan-mohamed12/repos")
    .then((result) => {
        let myRepos = result.json();
        return myRepos;
    })
    .then((myRepos) => {
        myRepos.length = 10;
        return myRepos;
    })
    .then((reposList) => console.log(`My first repo is ${reposList[2].name}`))
    .catch(() => console.log("No Data Found"));
*/

// Types of promises
/*
const myFirstPromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej("I'm the First Promise");
    }, 1000);
});

const mySecondPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("I'm the Second Promise");
    }, 2000);
});
const myThirdPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("I'm the Third Promise");
    }, 3000);
});

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//     (res) => console.log(res),
//     (rej) => console.log(`Rejected: ${rej}`)
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//     (res) => console.log(res),
//     (rej) => console.log(`Rejected: ${rej}`)
// );
Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
    (res) => console.log(res),
    (rej) => console.log(`Rejected: ${rej}`)
);
*/

// Async and Await
/*
// function getData() {
//     let users = ["Marwan"];
//     if (users.length !== 0) {
//         return Promise.resolve(users);
//     } else {
//         return Promise.reject("No useres found!");
//     }
// }

// getData().then(
//     (res) => console.log(res[0]),
//     (rej) => console.log(`Rejected: ${rej}`)
// );

async function getData() {
    let users = [];
    if (users.length !== 0) {
        return users;
    } else {
        throw Error("No useres found!");
    }
}

getData().then(
    (res) => console.log(res[0]),
    (rej) => console.log(rej)
);
*/

// Await
/*
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I'm Promise");
        // reject(Error("Rejected Promise"));
    }, 2000);
});

async function readData() {
    console.log("Before Promise");

    try {
        console.log(await myPromise);
    } catch (rej) {
        console.log(rej);
    } finally {
        console.log("After Promise");
    }
}

readData();
*/

// Async and Await with fetch

async function fetchData() {
    console.log("Before Fetching");

    try {
        let myData = await fetch(
            "https://api.github.com/users/marwan-mohamed12/repos"
        );
        console.log(await myData.json());
    } catch (rej) {
        console.log(rej);
    } finally {
        console.log("After Fetching");
    }
}

fetchData();
