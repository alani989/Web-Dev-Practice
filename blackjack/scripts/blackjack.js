//images source directory
var dir = "images/cards/";
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
// storing scores in points objects
var points = {
    dealerTotal: 0,
    playerTotal: 0
}
// storing games won in gamesWon object
var gamesWon = {
    dealerTally: 0,
    playerTally: 0,
}
// run function on page loadup
window.onload = function () {
    gamesWonUdate();
    scoreUpdate(points.dealerTotal, points.playerTotal);
};
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
    if (points.dealerTotal >= 17 && points.dealerTotal <= 21) {
        alert("Dealer Stands!")
        dealerStands();
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
    var hitBtn = document.getElementById("hit-button").removeAttribute("disabled");
    var standBtn = document.getElementById("stand-button").removeAttribute("disabled");
    var dealBtn = document.getElementById("deal-button").disabled = true;
}

function stand() {
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
        scoreUpdate(drawnCard.value, 0);
    } else {
        alert("Both players stand!");
        finalScore = new FinalScore();
    }
    checkScore();
}

function dealerStands() {
    var drawnCard = new DrawnCard(); // create first card object
    var img = document.createElement("img"); // draw card on html
    img.src = drawnCard.src; // setting card src
    // setting the card class from css
    img.className = "card";
    //add the cards to the html page
    var player_hand = document.getElementById("player-hand");
    player_hand.appendChild(img);
    //update dealer score
    scoreUpdate(0, drawnCard.value);
    checkScore();
}

var DrawnCard = function () {
    var card = Math.floor(Math.random() * Math.floor(13));
    var cardImg = Math.floor(Math.random() * Math.floor(deck[card].src.length - 1));
    var selectedCard = { value: deck[card].value, src: deck[card].src[cardImg] };
    //remove card to avoid duplicates
    var removed = deck[card].src.splice(cardImg, 1);
    console.log(deck);//for testing and verifying the card has been removed
    return selectedCard;
}

function scoreUpdate(card1Value, card2Value) {
    //update scores values
    points.dealerTotal = points.dealerTotal + card1Value;
    points.playerTotal = points.playerTotal + card2Value;
    //maping the scores to the html
    var dealerPointsLbl = document.getElementById("dealer-points");
    dealerPointsLbl.textContent = points.dealerTotal;
    var playerPointsLbl = document.getElementById("player-points");
    playerPointsLbl.textContent = points.playerTotal;

    if (points.playerTotal <= 21 && points.dealerTotal > 21) {
        alert("Player wins! Dealer busted");
        gamesWon.playerTally++;
        reset();
    } else if (points.dealerTotal <= 21 && points.playerTotal > 21) {
        alert("Dealer wins! Player busted");
        gamesWon.dealerTally++;
        reset();
    } else if (points.dealerTotal > 21 || points.playerTotal > 21) {
        alert("Both Busted!");
        reset();
    }
}

function checkScore() {
    if (points.dealerTotal == 21) {
        alert("Dealer wins! scored 21");
        gamesWon.dealerTally++;
        reset();
    } else if (points.playerTotal == 21) {
        alert("Players wins! scored 21");
        gamesWon.playerTally++;
        reset();
    }
}

function FinalScore() {
    if (points.dealerTotal > points.playerTotal || points.dealerTotal == 21) {
        alert("Dealer wins!");
        gamesWon.dealerTally++;
    } else if (points.dealerTotal < points.playerTotal || points.playerTotal == 21) {
        alert("Player wins!");
        gamesWon.playerTally++;
    } else if (points.dealerTotal == points.playerTotal) {
        alert("It's a draw");
    }
    reset();
    return points.dealerTotal;
}

function reset() {
    // clear table
    var dealer_hand = document.getElementById("dealer-hand");
    var player_hand = document.getElementById("player-hand");
    var dealerPointsLbl = document.getElementById("dealer-points");
    var playerPointsLbl = document.getElementById("player-points");
    while (dealer_hand.firstChild) {
        dealer_hand.removeChild(dealer_hand.firstChild);
        dealerPointsLbl.textContent = 0;
        points.dealerTotal = 0;
    }
    while (player_hand.firstChild) {
        player_hand.removeChild(player_hand.firstChild);
        playerPointsLbl.textContent = 0;
        points.playerTotal = 0;
    }
    //reset buttons
    var dealer_hand = document.getElementById("dealer-hand");
    var hitBtn = document.getElementById("hit-button").disabled = true;
    var standBtn = document.getElementById("stand-button").disabled = true;
    var dealBtn = document.getElementById("deal-button").removeAttribute("disabled");
    gamesWonUdate();
    deckReset();
}

function gamesWonUdate() {
    var dealer_tally = document.getElementById("dealerTally");
    dealer_tally.textContent = gamesWon.dealerTally;
    var player_tally = document.getElementById("playerTally");
    player_tally.textContent = gamesWon.playerTally;
}

function deckReset() {
    deck = [
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
}
