// Task 2
document.write("<h1>Marwan</h1>");
document.querySelector("h1").style.color = "blueviolet";
document.querySelector("h1").style.fontSize = "40px";
document.querySelector("h1").style.fontFamily = "Arial";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";

// Task 3
console.log(
    "%cMarwan %cMohamed %cAbd El-aal",
    "color: tomato; font-size: 40px;",
    "color: green; font-size: 40px; font-weight: bold;",
    "color: blueviolet; font-size: 40px;"
);

// Task 4
console.groupCollapsed("Group 1");
console.log("Message 1");
console.log("Message 2");
console.groupCollapsed("Child Group");
console.log("Message 1");
console.log("Message 2");
console.groupCollapsed("Grand Child Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.groupCollapsed("Group 2");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

// Task 5
console.table(["Marwan", "Mohamed", "Abd El-aal", "Osman"]);
