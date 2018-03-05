// Make a counter function that returns a function that returns a successive number each time it is called.
console.log("Without passing arguments")
function counter() {
    var i = 0;
    var anotherCounter = function () {
        i++;
        return i;
    }
    return anotherCounter;
}
var count1 = counter();
console.log(count1());
console.log(count1());
console.log(count1());

// Allow the caller of counter to initialize the count to the first argument that's passed in.
console.log("With passing arguments to start from")
function counterWArgs(i) {
    var anotherCounter = function () {
        i++;
        return i;
    }
    return anotherCounter;
}
var count2 = counterWArgs(5);
console.log(count2());
console.log(count2());
console.log(count2());

// Allow the counter to either increment 1 or decrement by 1 by calling the increment and decrement methods, respectively. Note: now the counter needs to return an object rather than a function.
console.log("With passing arguments, increments and decrement methods");
function Counter3(i) {
    this.i = i;
}
Counter3.prototype.increment = function () {
    return this.i++;
}
Counter3.prototype.decrement = function () {
    return this.i--;
}
var count3 = new Counter3(10);
console.log(count3.increment());
console.log(count3.increment());
console.log(count3.increment());
console.log(count3.decrement());
console.log(count3.decrement());