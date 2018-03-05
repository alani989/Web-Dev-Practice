//--------------------Inheritance--------------------
//Given the following objects:
var mom = {
    firstName: 'Alice',
    lastName: 'Wong',
    eyeColor: 'brown',
    hairColor: 'black',
    showInfo: function () {
        console.log(this.firstName, this.lastName, this.eyeColor, this.hairColor);
    }
};
var daughter = {
    firstName: 'Ilene',
    hairColor: 'brown'
};
//Write code to make daughter inherit properties from mom. What are the daugther's properties and their values? Print them out.
daughter.__proto__ = mom;
console.log(daughter.firstName, daughter.lastName, daughter.hairColor, daughter.eyeColor);
// Add a method called showInfo to mom by attaching a function to it as a property. Calling this method will print out all four properties. Call this method on both mom and daugther.
daughter.showInfo();
mom.showInfo();

//--------------------Writing a class--------------------
// class Person {
//     constructor(name, friends) {
//         this.name = name;
//         this.friends = [];
//     }
//     addFriend(friend) {
//         this.friends.push(friend);
//     }
//     createGreeting(other) {
//         return 'Yo ' + other.name + '! from ' + this.name + '.';
//     }
//     greet(other) {
//         console.log(this.createGreeting(other));
//     }
//     greetAll() {
//         for (var i = 0; i < this.friends.length; i++) {
//             console.log(this.createGreeting(this.friends[i]));
//         }
//     }
// }

//--------------------Object Constructor--------------------
function Person2(name) {
    this.name = name;
    this.friends = [];
}

Person2.prototype.addFriend = function (friend) {
    this.friends.push(friend);
};

Person2.prototype.createGreeting = function (other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
};

Person2.prototype.greet = function (other) {
    console.log(this.createGreeting(other));
};

Person2.prototype.lazyGreet = function (other) {
    setTimeout(this.greet(other), 2000);
};

Person2.prototype.createGreetingsForFriends = function () {
    //using map
    this.friends.forEach(function (fr) {
        //console.log(this.createGreeting(fr));
    });
    //using a loop
    for (var i = 0; i < this.friends.length; i++) {
        console.log(this.createGreeting(this.friends[i]));
    }
};

var jack = new Person2("Jack");
var paul = new Person2("Paul");
var wayne = new Person2("Wayne");
var mark = new Person2("Mark");
jack.addFriend(paul);
jack.addFriend(wayne);
jack.addFriend(mark);
//lazy greeting
jack.lazyGreet(paul);
//greeting all friends
jack.createGreetingsForFriends();















