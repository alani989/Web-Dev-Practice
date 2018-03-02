// front end interactions
var dir = "images/cards/";
var fileExtention = ".jpg";
var srcArry = [];



(function () {
    var fs = require("fs");
    var filename = fs.readFileSync("images/cards/");
    for (var i = 0; i < 53; i++) {
        srcArry.push(filename);
    }
})();
console.log(srcArry);

function deal() {
    var img = document.createElement("img");
    var img2 = document.createElement("img");
    // img.setAttribute("src", "images/10D.jpg");
    img.className = "card";
    img2.className = "card";
    var dealer_hand = document.getElementById("dealer-hand");
    var player_hand = document.getElementById("player-hand");
    dealer_hand.appendChild(img);
    player_hand.appendChild(img2);
}



// Logic
var deck = [
    { name: "ace", value: 1 },
    { name: "two", value: 2 },
    { name: "three", value: 3 },
    { name: "four", value: 4 },
    { name: "five", value: 5 },
    { name: "six", value: 6 },
    { name: "seven", value: 7 },
    { name: "eight", value: 8 },
    { name: "nine", value: 9 },
    { name: "ten", value: 10 },
    { name: "jack", value: 10 },
    { name: "queen", value: 10 },
    { name: "king", value: 10 },
]

function drawCard() {
    var randomNum = Math.floor(Math.random() * Math.floor(13));

}
drawCard();

