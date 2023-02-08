// Task 1
/*
// Test Div
let myDiv = document.querySelector(".content");

// Font Families

let selectFontFamily = document.createElement("select"),
    fontFamilies = ["Cairo", "Open Sans", "Roboto"];

for (const fam of fontFamilies) {
    let opt = document.createElement("option"),
        optText = document.createTextNode(fam);
    opt.appendChild(optText);
    opt.setAttribute("value", fam);
    selectFontFamily.appendChild(opt);
}

document.body.prepend(selectFontFamily);

selectFontFamily.addEventListener("change", function () {
    myDiv.style.fontFamily = `'${
        document.querySelectorAll("select")[0].value
    }', sans-serif`;
    window.localStorage.setItem(
        "fontFamily",
        document.querySelectorAll("select")[0].value
    );
    window.localStorage.setItem("fontIndex", selectFontFamily.selectedIndex);
});

// Colors

let selectColors = document.createElement("select"),
    colors = [
        "Blueviolet",
        "Tomato",
        "Teal",
        "Cornflowerblue",
        "Skyblue",
        "Salmon",
    ];

for (const color of colors) {
    let opt = document.createElement("option"),
        optText = document.createTextNode(color);
    opt.appendChild(optText);
    opt.setAttribute("value", color);
    selectColors.appendChild(opt);
}

selectFontFamily.after(selectColors);

selectColors.addEventListener("change", function () {
    myDiv.style.backgroundColor = `${
        document.querySelectorAll("select")[1].value
    }`;
    window.localStorage.setItem(
        "backgroundColor",
        document.querySelectorAll("select")[1].value
    );
    window.localStorage.setItem("colorIndex", selectColors.selectedIndex);
});

// Font-sizes

let selectFontSize = document.createElement("select");

for (let i = 16; i <= 30; i++) {
    let opt = document.createElement("option"),
        optText = document.createTextNode(i);
    opt.appendChild(optText);
    opt.setAttribute("value", i);
    selectFontSize.appendChild(opt);
}

selectColors.after(selectFontSize);

selectFontSize.addEventListener("change", function () {
    myDiv.style.fontSize = `${document.querySelectorAll("select")[2].value}px`;
    window.localStorage.setItem(
        "fontSize",
        document.querySelectorAll("select")[2].value
    );
    window.localStorage.setItem("fontSizeIndex", selectFontSize.selectedIndex);
});

// Local Storage

if (window.localStorage.getItem("fontFamily")) {
    myDiv.style.fontFamily = `'${window.localStorage.getItem(
        "fontFamily"
    )}', sans-serif`;
    selectFontFamily.selectedIndex = window.localStorage.getItem("fontIndex");
}

if (window.localStorage.getItem("backgroundColor")) {
    myDiv.style.backgroundColor = `${window.localStorage.getItem(
        "backgroundColor"
    )}`;
    selectColors.selectedIndex = window.localStorage.getItem("colorIndex");
}

if (window.localStorage.getItem("fontSize")) {
    myDiv.style.fontSize = `${window.localStorage.getItem("fontSize")}px`;
    selectFontSize.selectedIndex = window.localStorage.getItem("fontSizeIndex");
}

// The first time the user enter the website
myDiv.style.fontFamily = `'${
    document.querySelectorAll("select")[0].value
}', sans-serif`;
myDiv.style.backgroundColor = document.querySelectorAll("select")[1].value;
myDiv.style.fontSize = `${document.querySelectorAll("select")[2].value}px`;

myDiv.cssText = `
    font-family: ${document.querySelectorAll("select")[0].value};
    background-color: ${document.querySelectorAll("select")[1].value};
    font-size: ${document.querySelectorAll("select")[2].value};
`;
*/

// Task 2

let nameInput = document.querySelector("input[name='user-name']"),
    ageInput = document.querySelector("input[name='age']"),
    telInput = document.querySelector("input[name='tel-number']");

if (window.sessionStorage.name) {
    nameInput.value = window.sessionStorage.name;
}

if (window.sessionStorage.age) {
    ageInput.value = window.sessionStorage.age;
}

if (window.sessionStorage.tel) {
    telInput.value = window.sessionStorage.tel;
}

document.querySelectorAll("input").forEach((elm) => {
    elm.addEventListener("blur", function (e) {
        if (elm === nameInput) {
            window.sessionStorage.name = e.currentTarget.value;
        } else if (elm === ageInput) {
            window.sessionStorage.age = e.currentTarget.value;
        } else if (elm === telInput) {
            window.sessionStorage.tel = e.currentTarget.value;
        } else {
            console.log("Not in the elment list");
        }
    });
});

let selectCountry = document.querySelector("select");

if (window.sessionStorage.country) {
    selectCountry.selectedIndex = window.sessionStorage.country;
}

selectCountry.onchange = function (e) {
    window.sessionStorage.country = selectCountry.selectedIndex;
};
