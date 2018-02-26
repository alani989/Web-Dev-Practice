// Madlib
function madlib(name, subject) {
    console.log(name, "favorite subject in school is ", subject)
};
//tip calculator
var bill;
function tipAmount(bill, rating) {
    switch (rating) {
        case "good":
            return ((20 * bill) / 100);
            break;
        case "fair":
            return ((15 * bill) / 100);
            break;
        case "bad":
            return ((10 * bill) / 100);
            break;
    }
}
//tip calculator 2
function totalAmount(bill) {
    return tipAmount(bill, 'good') + bill;
}
//print numbers
function printNumbers(startingNum, endingNum) {
    for (var i = startingNum; i <= endingNum; i++) {
        console.log(i);
    }
}
//print numbers 2
function printNumbers2(startingNum, endingNum) {
    while (startingNum <= endingNum) {
        console.log(startingNum);
        startingNum++;
    }
}
//print a square
function printSquare(size) {
    for (var i = 0; i <= size; i++) {
        console.log(Array(size + 1).join("*") + " " + i);
    }
}
//print a box
function printBox(width, height) {
    spaces = Array(width - 1).join(" ");
    //print first row
    console.log(Array(width + 1).join("*"));
    for (var i = 0; i < height - 2; i++) {
        console.log("*" + spaces + "* " + i);
    }
    //print last row
    console.log(Array(width + 1).join("*"));

}
//print a banner
function printBanner(text) {
    var textWidth = Array(text.length + 5).join("*");
    console.log(textWidth);
    console.log("* " + text + " *");
    console.log(textWidth);
}
//Long-long Vowels
function longVowels(text) {
    for (var i = 0; i < text.length; i++) {
        if (text[i] == 'a' || text[i] == 'e' || text[i] == 'o') {
            console.log(text.replace(text[i], Array(5).join(text[i])));
        }
    }
}
//Just the positives
function positiveNumbers(someArray=[]) {
    var positiveArray = [];
    for (var i = 0; i < someArray.length; i++) {
        if (someArray[i] > 0) {
            positiveArray.push(someArray[i]);
        }
    }
    console.log(positiveArray);
}