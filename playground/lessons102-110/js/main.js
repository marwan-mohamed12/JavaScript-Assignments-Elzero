// alert, confirm and prompt
/*
alert("Hello World");

let confirmMsg = confirm("Are you male?");

if (confirm === true) {
    alert("male");
} else {
    alert("female");
}

let theName = prompt("Enter Your Name.. ");

alert(`Hello ${theName}`);
*/

// Timeout and Cleartimeout
/*
let handler = setTimeout(() => {
    console.log("Timeout message");
}, 5000);

let btn = document.querySelector("button");

btn.addEventListener("click", () => clearTimeout(handler));
*/

// Set Interval
/*
let div = document.querySelector("div");

function countDown() {
    div.innerHTML -= 1;
    if (div.innerHTML === 0) {
        clearInterval(handler);
    }
}

let handler = setInterval(countDown, 2000);
*/

// Location Object
/*
console.log(location);
console.log(location.href);

// setTimeout(function () {
//     location.href = "https://google.com";
// }, 5000);

console.log(location.host);
console.log(location.hostname);
console.log(location.protocol);
*/

// window open and close
/*
setTimeout(function () {
    window.open("https://google.com", "_blank", "widht=500,height=500,");
}, 2000);
*/

// Scroll
/*
window.scrollTo({
    left: 500,
    top: 550,
    behavior: "smooth",
});
*/

// Scroll to up button

let upBtn = document.querySelector("button");

window.onscroll = function () {
    if (window.scrollY >= 600) {
        upBtn.style.display = "block";
    } else {
        upBtn.style.display = "none";
    }
};

upBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
