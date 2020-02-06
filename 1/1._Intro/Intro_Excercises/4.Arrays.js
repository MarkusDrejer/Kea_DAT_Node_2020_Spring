// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

var letters = ["a","b","c"];
// show b in the console 

console.log(letters[letters.indexOf("b")]);

// --------------------------------------
// Exercise 2 - Array Positioning

var friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

friends.push(tom = {"name":"Tom"}, jerry = {"name":"Jerry"}, bob = {"name":"Bob"});

console.log(friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

var significantMathNumbers = [0, 2.718, 3.14159, 1729]

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

console.log(significantMathNumbers.indexOf(1729));

// --------------------------------------
// Exercise 4 - Inserting elements

var diet = ["tomato", "cucumber", "rocolla", "kale"]

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements rocolla and kale

// --------------------------------------

diet.splice(diet.indexOf("rocolla"), 0, "hamburger", "soda", "pizza");
console.log(diet);
// --------------------------------------
// Exercise 5 - Remove element

// You don't like kale at all. Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already.

console.log(diet.pop());

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

var dinnerTray = [];

// --------------------------------------

dinnerTray = diet.slice()  // start and end are optional
console.log(dinnerTray);

// --------------------------------------
// Exercise 7 - For loop

var letters = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for(var i = 1; i < letters.length; i += 2) {
    console.log(letters[i]);
}
// --------------------------------------
// Exercise 8 - For loop and if statement

var numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

var discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

numbers.forEach(element => {
    if(element > 6 || element < 0) {
        console.log(element);
    }
    else {
        discardedNumbers.push(element);
    }
});
console.log(discardedNumbers);

// --------------------------------------