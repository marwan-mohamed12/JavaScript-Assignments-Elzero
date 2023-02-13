/*
Regular Expression For Validate:
-- Email
-- IP
-- Phone Number
-- URL
*/

// Match Method
/*
let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/gi;
console.log(myString.match(regex));
*/

// Ranges
/*
let tld = "Com Net Org Info Code Io",
    tldRe = /(org|net|info)/gi;
console.log(tld.match(tldRe));

let nums = "12345678910",
    numsRe = /[^0-2]/g;
console.log(nums.match(numsRe));

let specialNums = "1!2@3#4$5%678910",
    specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os",
    practiceRe = /Os[5-9]Os/i;
console.log(practice.match(practiceRe));
*/

// Ranges part 2
/*
let myString = "AaBbcdefG123!234%^&*";

console.log(myString.match(/[a-zA-Z]/g));
console.log(myString.match(/[^a-zA-Z0-9]/g));
console.log(myString.match(/[^a-z^A-Z0-9]/g));
*/

// Character Classes
/*
let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";

console.log(email.match(/\D@\D.(com|net)/g));

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
console.log(names.match(/(\bSpam|Spam\b)/g));
console.log(/(\bSpam|Spam\b)/g.test(names));
*/

// Quantifires
/*
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
console.log(mails.match(/\w+@\w+.(com|net)/gi));

let nums = "0110 10 150 05120 0560 350 00";
console.log(nums.match(/0\d*0/gi));

let urls = "https://google.com http://www.website.net web.com";
console.log(urls.match(/(https?:\/\/)?(www.)?\w+.\w+/gi));

let serials = "S100S S3000S S50000S S950000S";
console.log(serials.match(/s\d{3}s/gi));
console.log(serials.match(/s\d{4,5}s/gi));
console.log(serials.match(/s\d{4,}s/gi));

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/gi.test(myString));
console.log(/^\d/gi.test(names));
console.log(names.match(/\d+\w{5}(?=Z)/gi));
console.log(names.match(/\d+\w{8}(?!Z)/gi));
*/

// Replace and ReplaceAll
/*
let myString = "We love Programming and @ because @ is amazing";

console.log(myString.replace(/@/i, "JavaScript"));
console.log(myString.replaceAll(/@/gi, "JavaScript"));
*/

// Form Validate
/*
document.getElementById("register").onsubmit = function (e) {
    let phoneInput = document.getElementById("tel").value;
    let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/gi; //(1234) 567-8910
    if (phoneRe.test(phoneInput) === false) {
        return false;
    }
    return true;
};
*/

/*
    Regular Expression
    - Challenge
*/

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re = /(https?:\/\/)?(www.)?\w+.\w+(:\d+\/\w+.\w+\?\w+=\d+&\w+=\w+)?/gi;
console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
