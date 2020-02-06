// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// --------------------------------------

console.log(parseFloat(numberOne) + parseFloat(numberTwo));

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var total = (parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(2);
console.log(total);

// --------------------------------------
// Exercise 5 - Decimals and average 

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals

var nums = [one, two, three];
var total = 0;
for(var i in nums) {
    total += nums[i];
}
average = total / nums.length;

console.log(average.toFixed(5));
// --------------------------------------

// --------------------------------------
// Exercise 6 - Get the character by index

var letters = "abc"
// Get me the character "c"

console.log(letters[2]);
console.log(letters[letters.length-1]);

// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!";

// capitalize the J in Javascript

fact = fact.replace("j" , "J");

console.log(fact);

// --------------------------------------