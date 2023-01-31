// Task 1
/*
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        // Write Your Code Here
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
        return `${zName.substr(0, zName.indexOf(" "))} ${zName
            .substr(zName.indexOf(" ") + 1, 1)
            .toUpperCase()}.`;
    }
    function ageWithMessage(zAge) {
        // Write Your Code Here
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
        return `Your Age Is ${zAge.substr(0, 2)}`;
    }
    function countryTwoLetters(zCountry) {
        // Write Your Code Here
        // Egypt => You Live In EG
        // Syria => You Live In SY
        return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    }
    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(
            zAge
        )}, ${countryTwoLetters(zCountry)}.`;
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
*/

// Task 2
/*
// function itsMe() {
//     return `Iam A Normal Function`;
// }

let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/

// Task 3
/*
// function checker(zName) {
//     return function (status) {
//         return function (salary) {
//             return status === "Available"
//                 ? `${zName}, My Salary Is ${salary}`
//                 : `Iam Not Avaialble`;
//         };
//     };
// }

let checker = (zName) => {
    return (status) => {
        return (salary) => {
            return status === "Available"
                ? `${zName}, My Salary Is ${salary}`
                : `Iam Not Avaialble`;
        };
    };
};

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
*/

// Task 4

function specialMix(...data) {
    let result = 0,
        numFromStr = [];
    for (let i = 0; i < data.length; i++) {
        data[i] = parseInt(data[i]);
        if (isNaN(data[i])) {
            continue;
        }
        result += data[i];
    }
    return result === 0 ? "All Is Strings" : result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
