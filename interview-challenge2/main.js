// Algorithm 3
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

// // Algorithm 1
var result = []
var num = 1
var denominator = 1

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
// test numbers
for (var i = 1; i < 21; i++) {
    console.log(num % i);
}
