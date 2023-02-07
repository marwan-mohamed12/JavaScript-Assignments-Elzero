// Local Storage
/*
window.localStorage.setItem("color", "tomato");

document.body.style.backgroundColor = window.localStorage.color;

window.localStorage.fontSize = "1em";
window.localStorage["fontWeight"] = "bold";

console.log(window.localStorage.getItem("fontWeight"));
console.log(window.localStorage.color);
console.log(window.localStorage["fontSize"]);

window.localStorage.removeItem("fontSize");
// window.localStorage.clear();

console.log(window.localStorage.key(0));

console.log(window.localStorage);
*/

// Local Storage Practise
/*
let lis = document.querySelectorAll("ul li"),
    expDiv = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
    // If There Is Color In Local Storage
    // [1] Add Color To Div
    expDiv.style.backgroundColor = window.localStorage.getItem("color");

    // [2] Remove Active Class From All Lis
    lis.forEach((li) => {
        li.classList.remove("active");
    });

    // [3] Add Active Class To Current Color
    document
        .querySelector(`[data-color = ${window.localStorage.getItem("color")}]`)
        .classList.add("active");
}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // remove class active from all lis
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        // Add Active Class To Current Element
        e.currentTarget.classList.add("active");

        // Add Current Color To Local Storage
        window.localStorage.color = e.currentTarget.dataset.color;

        // Change Div Background Color
        expDiv.style.backgroundColor = e.currentTarget.dataset.color;
    });
});
*/

// Session storage
/*
let input = document.querySelector(".name");

if (sessionStorage.getItem("name")) {
    input.value = sessionStorage.getItem("name");
}

input.onblur = function (e) {
    window.sessionStorage.setItem("name", e.target.value);
    e.target.value = "";
};
*/
