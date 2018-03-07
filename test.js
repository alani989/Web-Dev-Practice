var dir = "images/cards/";
var cardImg = Math.floor(Math.random() * Math.floor(4));

var deck =
    [
        {
            name: "ace", value: 1, src: [
                dir + "AC.jpg",
                dir + "AD.jpg",
                dir + "AH.jpg",
                dir + "AS.jpg"]
        },
        {
            name: "ace", value: 2, src: [
                dir + "AC.jpg",
                dir + "pick me.jpg",
                dir + "AH.jpg",
                dir + "AS.jpg"]
        }
    ]



console.log(deck[0].src[1]);

var removed = deck[1].src.splice(1, 1);
console.log(deck);