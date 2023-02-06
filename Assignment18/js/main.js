// Task 1
/*
let range = prompt("Print Number From – To", "Example: 5-20"),
    rangeList = range.split("-").sort((a, b) => a - b);

for (
    let i = parseInt(rangeList[0]);
    i <= parseInt(rangeList[rangeList.length - 1]);
    i++
) {
    document.write(i);
    document.write("<br>");
    document.write("<br>");
}
*/

// Task 2
/*
let popDiv = document.querySelector("div");

setTimeout(function () {
    popDiv.style.display = "block";
}, 5000);

let closeBtn = document.querySelector("div button");

closeBtn.addEventListener("click", function () {
    popDiv.style.display = "none    ";
});
*/

// Task 3
let counterDiv = document.querySelector("div");

let handler = setInterval(function () {
    counterDiv.innerHTML -= 1;

    if (counterDiv.innerHTML == 5) {
        window.open("https://elzero.org", "", "width=500,height=500");
    }

    if (counterDiv.innerHTML == 0) {
        clearInterval(handler);
        // location.href = "https://elzero.org";
    }
}, 1000);
