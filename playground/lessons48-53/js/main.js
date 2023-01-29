// For loop
/*
for (let i = 0; i < 10; i++) {
    document.write(`${i}<br/>`);
}
*/

// Looping on sequence
/*
let myFriends = [1, 2, 3, "Marwan", "Mohamed", "Abdo", 4, 5, "Ahmed", "Osman"],
    onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] === "string") {
        onlyNames.push(myFriends[i]);
    }
}
console.log(onlyNames);
*/

// Nested Loop
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(15));
    console.log("Color: ");
    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
    }
    console.log("Models: ");
    for (let k = 0; k < models.length; k++) {
        console.log(`- ${models[k]}`);
    }
}
*/

// Loop Control break, continue, label
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"],
    colors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] === "Green") {
            break mainLoop;
        }
    }
}
*/

// Add Products
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 4;

document.write(`<h1>Show ${showCount} Products</h1>`);
for (let i = 0; i < showCount; i++) {
    document.write("<div>");
    document.write(`<h3>${products[i]}</h3>`);
    document.write("<ul>");
    for (let j = 0; j < colors.length; j++) {
        document.write(`<li>${colors[j]}</li>`);
    }
    document.write("</ul>");
    document.write("</div>");
}
*/
