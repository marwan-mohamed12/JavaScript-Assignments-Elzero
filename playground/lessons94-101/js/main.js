// Event Simulation
/*
let one = document.querySelector(".one"),
    two = document.querySelector(".two"),
    submitBtn = document.querySelector("input[type='submit']");

console.log(submitBtn);
window.onload = function () {
    one.focus();
};

one.oninput = function (e) {
    if (e.target.value.length === 1) {
        two.focus();
    }
};

two.oninput = function (e) {
    if (e.target.value.length === 1) {
        submitBtn.focus();
    }
};

two.onblur = function () {
    document.links[0].click();
};
*/

// Class List
/*
let myDiv = document.getElementById("my-div");

console.log(myDiv.classList);
console.log(myDiv.classList.length);
console.log(myDiv.classList.contains("one"));
console.log(myDiv.classList.contains("three"));
console.log(myDiv.classList.item(2));

myDiv.onclick = function () {
    myDiv.classList.toggle("Marwan");
};
*/

// DOM CSS
/*
let myDiv = document.getElementById("my-div");

myDiv.style.color = "green";
myDiv.style.fontSize = "40px";

myDiv.style.cssText =
    "font-weight: bold; color: blue; border: 1px solid black;";

myDiv.style.setProperty("border-color", "red");
myDiv.style.removeProperty("border");

document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.styleSheets[0].rules[0].style.setProperty("border-width", "2px");
document.styleSheets[0].rules[0].style.setProperty("border-color", "green");
document.styleSheets[0].rules[0].style.setProperty("border-style", "solid");
document.styleSheets[0].rules[0].style.setProperty("padding", "10px");
*/

// Appending Elements
/*
let myDiv = document.querySelector("#my-div"),
    createdP = document.createElement("p"),
    paragraphText = document.createTextNode("Hello From Paragraph");

createdP.appendChild(paragraphText);

// myDiv.before(createdP);
// myDiv.after(createdP);

// myDiv.prepend(createdP);

myDiv.remove();
*/

// Dom Traversing
/*
let span = document.querySelector(".one"),
    spanthree = document.querySelector(".three");

console.log(span.nextSibling);
console.log(span.nextElementSibling);

console.log(spanthree.previousSibling);
console.log(spanthree.previousElementSibling);

span.onclick = function () {
    span.parentElement.remove();
};
*/

// Dom Cloning
/*
let myP = document.querySelector("p").cloneNode(true),
    myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;
myDiv.appendChild(myP);
*/

// Add Event Listener

let myP = document.querySelector("p");

myP.onclick = function () {
    let newP = myP.cloneNode(true);
    newP.className = "clone";
    myP.after(newP);
};

// myP.addEventListener("click", function () {
//     let clonedP = myP.cloneNode(true);
//     clonedP.classList.add("clone");
//     myP.after(clonedP);
// });

document.addEventListener("click", function (e) {
    if (e.target.className === "clone") {
        console.log("Iam Cloned");
    }
});
