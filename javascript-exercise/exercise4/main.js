// global array for usage
var arry = [-5, -4, -3, -1, -2, 0, 1, 2, 3, 4, 22];

// positive numbers
var posArry = arry.filter(function (e) {
    return e > 0;
});
console.log("Positive Array:");
console.log(posArry);

// even numbers
var evenNumsArry = arry.filter(function (e) {
    return e % 2 == 0;
});
console.log("Even Numbers");
console.log(evenNumsArry);

// square the numbers
var sqArry = arry.map(function (e) {
    return e * e;
});
console.log("Square Numbers");
console.log(sqArry);

// cities 1
var cities = [
    { name: 'Los Angeles', temperature: 60.0 },
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];
var citiesAbove70Degree = cities.filter(function (e) {
    return e.name, e.temperature > 70;
});
console.log("Cities with temp above 70 degree");
console.log(citiesAbove70Degree);

// cities 2
var citiesNames = cities.map(function (e) {
    return e.name;
});
console.log("Cities Names Array");
console.log(citiesNames);

// good job
var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];
var name = people.forEach(function (e) {
    console.log("Good Job", e)
});

// sort an array by alphabetically order
console.log("Sorted Names");
console.log(people.sort());

// sort an array by name's length , shortest name first
var sortedArry = people.sort(function (a,b) {
    return a.length - b.length;
});
console.log("Sorted Length, shortest first");
console.log(sortedArry);

// // sort an array by sum of inner arrays
var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
];
var sumArry = arr.sort(function (e1, e2) {
    var sum1 = e1.reduce(function (a, b) {
        return a + b;
    });
    var sum2 = e2.reduce(function (a, b) {
        return a + b;
    });
    if (sum1 > sum2) {
        return sum1;
    }
});
console.log("Array sorted by sum of inner arrays");
console.log(sumArry);

// 3 times
function fun() {
    console.log("Hello, world");
}
function call3Times(fun) {
    fun();
    fun();
    fun();
};
call3Times(fun);

// n times
function callNTimes(times, fun) {
    for (var i = 0; i < times; i++) {
        fun();
    }
};
callNTimes(4, fun);;

// sum an array
function sum(total, nums) {
    return total + nums;
}
var result = arry.reduce(sum);
console.log(result);

// acronym
var stringArray = ["very", "important", "person"];
var acrony = stringArray.reduce(function (a, b) {
    return a + b.substring(0, 1).toUpperCase();
}, "");
console.log(acrony);