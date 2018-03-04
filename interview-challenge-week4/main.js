// Write a program in JavaScript that prints out all lines of 99 Bottles of Beer all the way down to zero.
// Example: “99 Bottles of beer, take one down, pass it around, 98 bottles of beer on the wall”
for (var i = 99; i > 0; i--) {
    if (i % 7 == 0 && i % 5 == 0) {
        console.log(i, " Bottles of Miller Lite, take one down, pass it around,", i - 1, "bottles of Miller Lite on the wall")
    } else if (i % 5 == 0) {
        console.log(i, " Bottles of Lite, take one down, pass it around,", i - 1, "bottles of Lite on the wall")
    } else if (i % 7 == 0) {
        console.log(i, " Bottles of Miller, take one down, pass it around,", i - 1, "bottles of Miller on the wall")
    } else {
        console.log(i, " Bottles of beer, take one down, pass it around,", i - 1, "bottles of beer on the wall")
    }
}

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
var result = [];
var num = 1;
var denominator = 1;

while (true) {
    if (num % denominator == 0) {
        result.push("0");
        denominator++;
    } else if (num % denominator != 0) {
        result = [];
        num++;
        denominator = 1;
    }

    if (result.length == 20) {
        break;
    }
}
console.log(num);
// test if all results equal zero
for (var i = 1; i < 21; i++) {
    console.log(num % i);
}

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
var largestPalindrome = 0;
var temp = 0;
function findLargestPalindrome() {
    for (var i = 100; i < 1000; i++) {
        for (var j = 100; j < 1000; j++) {
            temp = i * j;
            if (((isPalindrome(temp) > 0) && (temp > largestPalindrome))) {
                largestPalindrome = temp;
            }
            else {
                largestPalindrome = largestPalindrome;
            }
        }
    }
    return largestPalindrome;
} function isPalindrome(number) {
    if (number.toString() === number.toString().split("").reverse().join("")) {
        return 1;
    }
    else {
        return 0;
    }
} var theAnswer = findLargestPalindrome();
console.log(theAnswer);