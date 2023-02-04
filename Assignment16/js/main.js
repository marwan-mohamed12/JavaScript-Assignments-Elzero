// Task 1
/*
1- let myElement = document.querySelector("div");
2- let myElement = document.querySelector("#elzero");
3- let myElement = document.querySelector(".element");
4- let myElement = document.querySelector("[name = 'js']");
5- let myElement = document.getElementById("elzero");
6- let myElement = document.getElementsByClassName("element")[0];
7- let myElement = document.getElementsByTagName("div")[0];
8-let myElement = document.getElementsByName("js")[0];
let myElement = document.body.children[0];
let myElement = document.body.childNodes[3];
let myElement = document.body.firstElementChild;
console.log(myElement);
*/

// Task 2
/*
for (let i = 0; i < 10; i++) {
    let myImg = document.querySelectorAll("div img")[i];
    myImg.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    myImg.alt = "Elzero Logo";
}
*/

// Task 3
/*
let userInput = document.forms[0].children[0],
    divResult = document.forms[0].children[1];

userInput.oninput = function () {
    let usd = userInput.value;
    divResult.textContent = `${usd} USD Dollar = ${(usd * 15.6).toFixed(
        2
    )} Egyptian Pound`;
};
*/

// Task 4
/*
let divOne = document.querySelectorAll("div")[0],
    divTow = document.querySelectorAll("div")[1];

divOne.title = divOne.className;
// divOne.title = divOne.textContent = divOne.className;
divOne.textContent = divOne.className;

divTow.title = divTow.className;
divTow.textContent = `${divTow.title} ${divTow.attributes.length}`;
*/

// Task 5
/*
let imgList = document.images;

for (let i = 0; i < imgList.length; i++) {
    if (imgList[i].alt !== "") {
        imgList[i].alt = "old";
    } else {
        imgList[i].alt = "Elzero new";
    }
}
*/

// Task 6

let form = document.forms[0],
    numInput,
    nameInput,
    typeSelection = "div",
    resultDiv = document.querySelector(".results");

form.children[0].oninput = function (e) {
    numInput = e.target.value;
};

form.children[1].oninput = function (e) {
    nameInput = e.target.value;
};

form.children[2].oninput = function (e) {
    typeSelection = e.target.value;
};

form.onsubmit = function (e) {
    e.preventDefault();
};

let createBtn = document.querySelector("form input[name = 'create']");

createBtn.onclick = function (e) {
    document.querySelectorAll(".box").forEach((e) => e.remove());
    if (
        numInput === undefined ||
        nameInput === undefined ||
        typeSelection === undefined
    ) {
        e.preventDefault();
    } else {
        for (let i = 0; i < numInput; i++) {
            let myElement = document.createElement(`${typeSelection}`),
                myElementText = document.createTextNode(`${nameInput}`);

            myElement.title = "Element";
            myElement.classList = "box";
            myElement.id = `id-${i + 1}`;
            myElement.appendChild(myElementText);
            resultDiv.appendChild(myElement);
        }
    }
};
