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

var total = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(total.toFixed(2));

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