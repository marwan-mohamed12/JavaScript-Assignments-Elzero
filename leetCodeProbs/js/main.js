/**
 * @param {number} num
 * @return {number}
 * Input: num = 14
    Output: 6
    Explanation: 
    Step 1) 14 is even; divide by 2 and obtain 7. 
    Step 2) 7 is odd; subtract 1 and obtain 6.
    Step 3) 6 is even; divide by 2 and obtain 3. 
    Step 4) 3 is odd; subtract 1 and obtain 2. 
    Step 5) 2 is even; divide by 2 and obtain 1. 
    Step 6) 1 is odd; subtract 1 and obtain 0.
 */
/*
function stepsCounter(num) {
    let stepCounter = 0;
    while (num !== 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num -= 1;
        }
        stepCounter++;
    }
    return stepCounter;
}

stepsCounter(8);
*/

/*

function division(dividend, divisor) {
    if (dividend === 0) {
        return 0;
    }
    if (divisor === 0) {
        return Number.MAX_VALUE;
    }
    let negResult = false;
    if (dividend < 0) {
        dividend = -dividend;
        if (divisor < 0) {
            divisor = -divisor;
        } else {
            negResult = true;
        }
    } else if (divisor < 0) {
        divisor = -divisor;
        negResult = true;
    }
    let divisonResult = 0;
    while (dividend >= divisor) {
        dividend -= divisor;
        divisonResult++;
    }
    if (negResult) {
        divisonResult = -divisonResult;
    }
    return divisonResult;
}

console.log(division(6, 3));
*/

// function check(ransomNote, magazine) {
//     for (let i = 0; i < ransomNote.length; i++) {
//         for (let j = 0; j < magazine.length; j++) {
//             if (ransomNote[i] === magazine[j]) {
//                 ransomNote =
//                     ransomNote.substr(0, i) + "*" + ransomNote.substr(i + 1);
//                 magazine = magazine.substr(0, j) + "" + magazine.substr(j + 1);
//                 break;
//             }
//         }
//     }
//     return ransomNote === `${"*".repeat(ransomNote.length)}` ? true : false;
// }
// // console.log(check("aab", "baa"));
// // console.log(check("aab", "baa"));
// // console.log(check("aa", "ab"));
// console.log(check("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));

// function palindrome(x) {
//     let palindromeList = [],
//         num;
//     if (x < 0) {
//         palindromeList.push(0);
//         num = -x;
//     } else {
//         num = x;
//     }
//     while (true) {
//         palindromeList.push(num % 10);
//         num = parseInt(num / 10);
//         if (num / 10 <= 0) {
//             break;
//         }
//     }
//     console.log(palindromeList);
//     console.log(parseInt(palindromeList.join("")));
//     console.log(parseInt(palindromeList.reverse().join("")));
//     console.log(x);
//     return (
//         parseInt(palindromeList.join("")) ===
//         parseInt(palindromeList.reverse().join(""))
//     );
// }

// // console.log(palindrome(121));
// // console.log(palindrome(-121));
// console.log(palindrome(-1));

function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
        if (num > max_num) {
            // (Fill in the missing line here)
            max_num = num;
        }
    }
    return max_num;
}

console.log(find_max([1, 2, 3, 4, 5]));
