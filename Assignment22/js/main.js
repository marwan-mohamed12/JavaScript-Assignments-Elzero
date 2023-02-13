// Task 1

// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// console.log(ip.match(/\d{4}:\w{2}\d(:\d{4})*/gi));
// console.log(/\d{4}:\w{2}\d(:\d{4})*/gi.test(ip));

// Task 2

// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// console.log(specialNames.match(/Os\d*O/g));

// Task 3

// let phone = "+(995)-123 (4567)";
// console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi));
// console.log(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi.test(phone));

// Task 4

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
/*
    s? optional
    ?: non capture group
    -\w all character without except whitespace
*/

// Task 5

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /(\d+(\/|\s-\s|\s))+\d+/g; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
