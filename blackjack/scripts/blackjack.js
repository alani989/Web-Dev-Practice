// front end interactions
var dir = "images/cards/";
var fileExtention = ".jpg";
var srcArry = [];
//run at page load

console.log(srcArry);
//when deal button is clicked
function deal() {
    var img = document.createElement("img");
    var img2 = document.createElement("img");
    // img.setAttribute("src", "images/10D.jpg");
    img.className = "card";
    img.src = deck[0].src[0];
    img2.src = deck[0].src[2];
    img2.className = "card";
    var dealer_hand = document.getElementById("dealer-hand");
    var player_hand = document.getElementById("player-hand");
    dealer_hand.appendChild(img);
    player_hand.appendChild(img2);
}

//images source directory
var dir = "images/cards/";

// Logic
var deck = [
    { name: "ace", value: 1,src: [dir+"AC.jpg",dir+"AD.jpg",dir+"AH.jpg",dir+"AS.jpg"] },
    { name: "two", value: 2,src: [dir+"2C.jpg",dir+"2D.jpg",dir+"2H.jpg",dir+"2S.jpg"] },
    { name: "three", value: 3,src: [dir+"3C.jpg",dir+"3D.jpg",dir+"3H.jpg",dir+"3S.jpg"] },
    { name: "four", value: 4,src: [dir+"4C.jpg",dir+"4D.jpg",dir+"4H.jpg",dir+"4S.jpg"] },
    { name: "five", value: 5,src: [dir+"5C.jpg",dir+"5D.jpg",dir+"5H.jpg",dir+"5S.jpg"] },
    { name: "six", value: 6,src: [dir+"6C.jpg",dir+"6D.jpg",dir+"6H.jpg",dir+"6S.jpg"] },
    { name: "seven", value: 7,src: [dir+"7C.jpg",dir+"7D.jpg",dir+"7H.jpg",dir+"7S.jpg"] },
    { name: "eight", value: 8,src: [dir+"8C.jpg",dir+"8D.jpg",dir+"8H.jpg",dir+"8S.jpg"] },
    { name: "nine", value: 9,src: [dir+"9C.jpg",dir+"9D.jpg",dir+"9H.jpg",dir+"9S.jpg"] },
    { name: "ten", value: 10,src: [dir+"10C.jpg",dir+"10D.jpg",dir+"10H.jpg",dir+"10S.jpg"]},
    { name: "jack", value: 10,src: [dir+"JC.jpg",dir+"JD.jpg",dir+"JH.jpg",dir+"JS.jpg"] },
    { name: "queen", value: 10,src: [dir+"QC.jpg",dir+"QD.jpg",dir+"QH.jpg",dir+"QS.jpg"] },
    { name: "king", value: 10,src: [dir+"KC.jpg",dir+"KD.jpg",dir+"KH.jpg",dir+"KS.jpg"] },
]

function drawCard() {
    var randomNum = Math.floor(Math.random() * Math.floor(13));

}
drawCard();

