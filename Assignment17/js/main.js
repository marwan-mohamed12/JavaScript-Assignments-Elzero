// Task 1
/*
let element = document.querySelectorAll("a");

window.onload = function () {
    for (let i = 0; i < element.length; i++) {
        if (
            element[i].classList.contains("open") &&
            element[i].textContent === "Elzero"
        ) {
            element[i].click();
        }
    }
};
*/

// Task 2
/*
let addClass = document.querySelector(".classes-to-add"),
    removeClass = document.querySelector(".classes-to-remove"),
    currDive = document.querySelector("[title='Current']"),
    divShowClasses = document.querySelector(".classes-list div");

function showClasses(element, result) {
    if (element.classList.value === "") {
        result.innerHTML = "No Classes To Show";
    } else {
        element.classList.value
            .trim()
            .split(" ")
            .map((el) => {
                let mySpanClass = document.createElement("span");
                mySpanClass.innerHTML = el;
                result.appendChild(mySpanClass);
            });
    }
}

showClasses(currDive, divShowClasses);

addClass.addEventListener("blur", function () {
    addClass.value
        .toLowerCase()
        .trim()
        .split(" ").sort()
        .forEach((element) => {
            currDive.classList.add(element);
        });
    addClass.value = "";
    divShowClasses.innerHTML = "";
    showClasses(currDive, divShowClasses);
});

removeClass.addEventListener("blur", function () {
    removeClass.value
        .toLowerCase()
        .trim()
        .split(" ").sort()
        .forEach((elem) => {
            currDive.classList.remove(elem);
        });
    removeClass.value = "";
    divShowClasses.innerHTML = "";
    showClasses(currDive, divShowClasses);
});
*/

// Task 3
/*
let myP = document.querySelector("p");
myP.remove();

let ourElementDiv = document.querySelector(".our-element"),
    beforeElement = document.createElement("div"),
    afterElement = document.createElement("div");

// Before Div
beforeElement.classList.add("start");
beforeElement.title = "Start Element";
beforeElement.setAttribute("data-value", "Start");
beforeElement.innerHTML = "Start";
ourElementDiv.before(beforeElement);

// After Div
afterElement.className = "End";
afterElement.title = "End Element";
afterElement.setAttribute("data-value", "End");
afterElement.textContent = "End";
ourElementDiv.after(afterElement);
*/

// Task 4
/*
let myDiv = document.querySelector("div");

let elzeroText = myDiv.childNodes[myDiv.childNodes.length - 1].textContent;
console.log(elzeroText.trim());
*/

// Task 5

[...document.body.children].forEach((element) => {
    element.addEventListener("click", function () {
        console.log(
            `This Is ${element.tagName.charAt(0)}${element.tagName
                .toLocaleLowerCase()
                .slice(1)}`
        );
    });
});
