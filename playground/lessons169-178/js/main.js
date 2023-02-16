// Parse and Stringify
/*
// Get from the server

const myJsonObjectFromServer = `{"UserName": "Marwan", "Age": 24}`;
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object

const myJsonObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsonObject);
console.log(myJsonObject);

// Update data

myJsonObject["UserName"] = "Mohamed";
myJsonObject["Age"] = 24.5;

// Send To server

const myJsonObjectToServer = JSON.stringify(myJsonObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);
*/

// Synchronous Vs Asynchronous
/*
// Synchronous
// console.log(1);
// console.log(2);
// alert("Operation");
// console.log(3);

// Asynchronous
console.log(1);
console.log(2);
setTimeout(() => console.log("Operation"), 3000);
console.log(3);
*/

// Call Stack and Wep API
/*
setTimeout(() => {
    // web API methods don't enter the stack
    console.log("Wep API");
}, 0);

function one() {
    console.log(1);
}
function two() {
    one();
    console.log(2);
}
function three() {
    two();
    console.log(3);
}

three();

// Call stack

/*
=====================================
console.log(one);                                    
=====================================
function one() {
    console.log(one);
}                                   
=====================================
function two() {
    one();
    console.log(one);
}                                   
=====================================
function three() {
    two();                                  
    console.log(one);                
=====================================

console.log("###");
console.log(1);
console.log(2);
console.log(3);
*/

// Callback Queue + Event Loop
/*
console.log("One");
setTimeout(() => {
    console.log("Three");
}, 0);
setTimeout(() => {
    console.log("Four");
    console.log(variable);
}, 0);
console.log("Two");

let variable = 1;
variable++;
*/

// Github API

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/marwan-mohamed12/repos");
myRequest.send();
myRequest.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
        let jsData = JSON.parse(this.responseText);
        console.log(jsData);
        for (let i = 0; i < jsData.length; i++) {
            let div = document.createElement("div"),
                repoName = document.createTextNode(jsData[i].full_name);
            div.appendChild(repoName);
            document.body.appendChild(div);
        }
    }
});
