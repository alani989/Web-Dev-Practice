// --------------------Person---------------------
function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function (other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};
// Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
var person1 = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
// Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
var person2 = new Person('Jordan', 'jordan@yahoo.com', '495-586-3456');
// Have sonny greet jordan using the greet method.
person1.greet(person2);
// Have jordan greet sonny using the greet method
person2.greet(person1);
// Write a statement to print the contact info (email and phone) of Sonny
console.log(person1.email, person1.phone);
// Write another statement to print the contact info of Jordan
console.log(person2.email, person2.phone);

// --------------------Card Constructor---------------------
// Create a constructor Card. A card object will have 2 properties: point and suit
var Card = function (point, suit) {
    this.point = point;
    this.suit = suit;
}
var myCard = new Card(7, 'Hearts');
console.log('Card value is', myCard.point, 'and the suit is', myCard.suit);

// --------------------getImageUrl()---------------------
// Add a getImageUrl method to card objects by adding it as a property to Card.prototype. The method should return the URL path to the png image file for the card.
Card.prototype.getImageUrl = function () {
    return this.imgUrl;
}

// --------------------Hand constructor---------------------
// A hand is simply represented as a collection of cards, but it would also be convenient for a hand to be able to return it's point value. 
// Implement a Hand constructor that will allow the code above to work. Hint: you will want to store as a property of a hand object - an array of card objects.
var Hand = function (cards) {
    this.cards = cards;
}
Hand.prototype.addCard = function() {
    return new Card(myCard.point, myCard.suit);
}