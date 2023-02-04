// Dom Selectors
/*
let myIdElement = document.getElementById("my-div"),
    myTagElements = document.getElementsByTagName("p"),
    myClassElemnts = document.getElementsByClassName("my-span"),
    myQueryElements = document.querySelector(".my-span");
myQueryAllElements = document.querySelectorAll("p");

console.log(myIdElement);
console.log(myTagElements);
console.log(myTagElements[0]);
console.log(myClassElemnts);
console.log(myClassElemnts[1]);
myQueryElements.style.color = "red";
console.log(myQueryElements);
myQueryAllElements[1].style.color = "green";
console.log(myQueryAllElements);
console.log(myQueryAllElements[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[1].two.value);
console.log(document.links[0].href);
*/

// Get / Set Content and Attributes
/*
let myEl = document.querySelector(".js");

console.log(myEl.innerHTML);

console.log(myEl.textContent);
myEl.innerHTML = "Bye <span>briliant JS</span>";
console.log(myEl.innerHTML);

document.links[0].href = "https://twitter.com";
document.links[0].textContent = "twitter";
document.links[0].title = "Twitter";

let myImg = document.querySelector("img");

console.log(myImg.getAttribute("alt"));
myImg.setAttribute("title", "image");
myImg.setAttribute(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
);
*/

// Check Attributes
/*
console.log(document.getElementsByTagName("p")[0].attributes);

let mainHeading = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
    if (myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src");
    } else {
        myP.setAttribute("data-src", "New Value");
    }
} else {
    console.log("Not Found");
}

if (myP.hasAttributes()) {
    console.log("P has attributes");
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
    console.log("div has attributes");
} else {
    console.log("div has no attributes");
}
*/

// Create Elements
/*
let myElement = document.createElement("div");
let myAttribute = document.createAttribute("data-costume");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is div");

myElement.className = "product";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("data", "test");

// Append the comment before the div
document.body.appendChild(myComment);

// Add text to the element
myElement.appendChild(myText);

// Append the div to the body
document.body.appendChild(myElement);
*/

// Dom Practise
/*
for (let i = 0; i < 100; i++) {
    let myMainDiv = document.createElement("div"),
        mainHeading = document.createElement("h2"),
        myParagraph = document.createElement("p");

    let mainHeadingText = document.createTextNode(`Product Title ${i + 1}`),
        myParagraphText = document.createTextNode(
            "Product Description Paragraph"
        );

    myMainDiv.className = "product";

    // add heading text and append to the div
    mainHeading.appendChild(mainHeadingText);
    myMainDiv.appendChild(mainHeading);
    // add paragraph text and append to the div
    myParagraph.appendChild(myParagraphText);
    myMainDiv.appendChild(myParagraph);

    document.body.appendChild(myMainDiv);
    document.body.appendChild(document.createElement("hr"));
}
*/

// Dealing With Children
/*
let myElement = document.querySelector("div");

console.log(myElement.children); // return only the elements
console.log(myElement.children[1]); // return the elements and spaces
console.log(myElement.children[1].textContent);

console.log(myElement.childNodes);

console.log(myElement.firstChild);
console.log(myElement.lastChild);

console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);
*/

// Events
/*
let myBtn = document.querySelector("#btn");

myBtn.onclick = () => console.log("onclick event");
myBtn.oncontextmenu = () => console.log("oncontextmenu event");
myBtn.onmouseenter = () => console.log("onmouseenter event");
myBtn.onmouseleave = () => console.log("onmousleave event");

window.onload = () => console.log("onload event");

document.body.onscroll = () => console.log("onscroll event");
document.body.onresize = () => console.log("onresize event");
*/

// Validate Forms and Prevent Default

let myLink = document.querySelector("a");

myLink.onclick = function (event) {
    console.log(event);
    event.preventDefault();
};

let userInput = document.querySelector("[name = 'username']"),
    ageInput = document.querySelector("[name = 'age']");

document.forms[0].onsubmit = function (e) {
    let userValid = false,
        ageValid = false;

    if (userInput.value !== "" && userInput.value.length < 10) {
        userValid = true;
    }

    if (ageInput !== "") {
        ageValid = true;
    }

    if (userValid === false || ageValid === false) {
        e.preventDefault();
    }
};
