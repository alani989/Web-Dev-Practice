//declaring global variables
//images source directory
var dir = "images/cards/";
//declaring arrays for players points
var dealerPoints = [0];
var playerPoints = [0];
//storing both players scores
function Points() {
    function sum(total, num) {
        return total + num;
    }
    var points = {
        dealerTotal: dealerPoints.reduce(sum),
        playerTotal: playerPoints.reduce(sum)
    }
    return points;
}
//when hit button is clicked
function hit() {
    var points = new Points();
    console.log(points.dealerTotal);
    if (points.dealerTotal >= 17 && points.dealerTotal <= 21) {
        alert("Dealer Stands!")
        checkScore();
    } else {
        var drawnCard = new DrawnCard(); // create first card object
        var img = document.createElement("img"); // draw card on html
        img.src = drawnCard.src; // setting card src

        var drawnCard2 = new DrawnCard(); // create first card object
        var img2 = document.createElement("img"); // draw card on html
        img2.src = drawnCard2.src; // setting card src

        // setting the card class from css
        img.className = "card";
        img2.className = "card";
        //add the cards to the html page
        var dealer_hand = document.getElementById("dealer-hand");
        var player_hand = document.getElementById("player-hand");
        dealer_hand.appendChild(img);
        player_hand.appendChild(img2);
        //update hands' score
        scoreUpdate(drawnCard.value, drawnCard2.value);
        checkScore();
    }
}

function deal() {
    hit();
    hit();
}

function stand() {
    var points = new Points();
    //check for the dealer score before drawing a card
    if (points.dealerTotal < 17) {
        var drawnCard = new DrawnCard(); // create first card object
        var img = document.createElement("img"); // draw card on html
        img.src = drawnCard.src; // setting card src
        // setting the card class from css
        img.className = "card";
        //add the cards to the html page
        var dealer_hand = document.getElementById("dealer-hand");
        dealer_hand.appendChild(img);
        //update dealer score
        standScoreUpdate(drawnCard.value);
    } else {
        alert("Both players stand!");
        finalScore = new FinalScore();
    }
    checkScore();
}

// storing all cards in an array
var deck = [
    { name: "ace", value: 1, src: [dir + "AC.jpg", dir + "AD.jpg", dir + "AH.jpg", dir + "AS.jpg"] },
    { name: "two", value: 2, src: [dir + "2C.jpg", dir + "2D.jpg", dir + "2H.jpg", dir + "2S.jpg"] },
    { name: "three", value: 3, src: [dir + "3C.jpg", dir + "3D.jpg", dir + "3H.jpg", dir + "3S.jpg"] },
    { name: "four", value: 4, src: [dir + "4C.jpg", dir + "4D.jpg", dir + "4H.jpg", dir + "4S.jpg"] },
    { name: "five", value: 5, src: [dir + "5C.jpg", dir + "5D.jpg", dir + "5H.jpg", dir + "5S.jpg"] },
    { name: "six", value: 6, src: [dir + "6C.jpg", dir + "6D.jpg", dir + "6H.jpg", dir + "6S.jpg"] },
    { name: "seven", value: 7, src: [dir + "7C.jpg", dir + "7D.jpg", dir + "7H.jpg", dir + "7S.jpg"] },
    { name: "eight", value: 8, src: [dir + "8C.jpg", dir + "8D.jpg", dir + "8H.jpg", dir + "8S.jpg"] },
    { name: "nine", value: 9, src: [dir + "9C.jpg", dir + "9D.jpg", dir + "9H.jpg", dir + "9S.jpg"] },
    { name: "ten", value: 10, src: [dir + "10C.jpg", dir + "10D.jpg", dir + "10H.jpg", dir + "10S.jpg"] },
    { name: "jack", value: 10, src: [dir + "JC.jpg", dir + "JD.jpg", dir + "JH.jpg", dir + "JS.jpg"] },
    { name: "queen", value: 10, src: [dir + "QC.jpg", dir + "QD.jpg", dir + "QH.jpg", dir + "QS.jpg"] },
    { name: "king", value: 10, src: [dir + "KC.jpg", dir + "KD.jpg", dir + "KH.jpg", dir + "KS.jpg"] },
]

var DrawnCard = function () {
    var card = Math.floor(Math.random() * Math.floor(13));
    var cardImg = Math.floor(Math.random() * Math.floor(4));
    var selectedCard = { value: deck[card].value, src: deck[card].src[cardImg] };
    return selectedCard;
}

function scoreUpdate(card1Value, card2Value) {
    var points = new Points();
    //adding cards to each player's array
    dealerPoints.push(card1Value);
    playerPoints.push(card2Value);
    //maping the scores to the html
    var dealerPointsLbl = document.getElementById("dealer-points");
    dealerPointsLbl.textContent = points.dealerTotal;
    var playerPointsLbl = document.getElementById("player-points");
    playerPointsLbl.textContent = points.playerTotal;
    if (points.dealerTotal > 21 || points.playerTotal > 21) {
        alert("Busted!");
        reset();
    }
    if (points.playerTotal <= 21 && points.dealerTotal > 21) {
        alert("Player wins! Dealer busted");
    } else if (points.dealerTotal <= 21 && points.playerTotal > 21) {
        alert("Dealer wins! Dealer busted");
    }
}

function standScoreUpdate(cardValue) {
    var points = new Points();
    dealerPoints.push(cardValue);
    var dealerPointsLbl = document.getElementById("dealer-points");
    dealerPointsLbl.textContent = points.dealerTotal;
    if (points.dealerTotal > 21) {
        alert("Player wins! Dealer busted!");
        reset();
    }
}

function FinalScore() {
    var points = new Points();
    if (points.dealerTotal > points.playerTotal || points.dealerTotal == 21) {
        alert("Dealer wins!");
        reset();
    } else if (points.dealerTotal < points.playerTotal || points.playerTotal == 21) {
        alert("Player wins!");
        reset();
    } else if (points.dealerTotal == points.playerTotal) {
        alert("It's a draw");
    }
    return points.dealerTotal;
}

function checkScore() {
    var points = new Points();
    if (points.dealerTotal == 21) {
        alert("Dealer wins!");
        reset();
    } else if (points.playerTotal == 21) {
        alert("Players wins!");
        reset();
    }
}

function reset() {
    window.location.reload(false);
}