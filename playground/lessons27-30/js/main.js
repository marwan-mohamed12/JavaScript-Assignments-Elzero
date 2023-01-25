// String Methods
/*let theName = "  Marwan  ";
theName = theName.trim();
console.log(theName[2].toUpperCase());
console.log(theName.charAt(2).toUpperCase());
console.log(theName.length); */

// String Methods Part 2
/*let theName = "Marwan Mohamed Abd El-aal Osman";
console.log(theName.indexOf("an"));
console.log(theName.lastIndexOf("an"));
console.log(theName.slice(7, 14));
console.log(theName.repeat(4));
console.log(theName.split(" "));*/

// String Method Part3
/*let theName = "Marwan Mohamed Abd El-aal Osman";
console.log(theName.substring(2, 8));
console.log(theName.substring(-10, 6));
console.log(theName.substring(6, 0));
console.log(theName.substring(theName.length - 5));
console.log(theName.substr(7, 7));
console.log(theName.substr(-5));
console.log(theName.substr(35));
console.log(theName.includes("Osman"));
console.log(theName.includes("Osman", -5));
console.log(theName.startsWith("Osman", theName.length - 5));
console.log(theName.endsWith("n"));
console.log(theName.endsWith("an"));
console.log(theName.endsWith("an", 6));*/

/*
    String Challenge
    All Solutions Must Be In One Chain
    You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.charAt(a.indexOf("h")).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
    a.toLowerCase().charAt(0) +
        a.substring(1, a.length - 1).toUpperCase() +
        a.charAt(a.length - 1).toLowerCase()
); // eLZERO WEB SCHOOl
