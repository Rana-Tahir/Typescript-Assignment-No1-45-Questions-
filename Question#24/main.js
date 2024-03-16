// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Test using string
var str1 = "Hello";
var str2 = "hello";
console.log(str1 === str2);
console.log(str1 !== str2);
// Test using text in string
var text1 = "Hello World";
var text2 = "hello world";
console.log(text1.toLocaleLowerCase() === text2);
// Test using the equal, not equal, greater than, less than, greater than equal to and less than equal to.
var num1 = 20;
var num2 = 15;
console.log(num1 === num2); // false
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // false
// Test using "and" and "or" operators
var x = 5;
var y = 10;
var z = 15;
console.log(x < y && y < z);
console.log(x < y || y > z);
console.log(x > y && y < z);
console.log(x > y || y > z);
//Test whether an item is in an Array
var fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];
console.log(fruits.includes("Banana"));
console.log(fruits.includes("Kiwi"));
// Test whether an item is not in an Array
var colors = ['Red', 'Green', 'Blue', 'Yellow'];
console.log(!colors.includes('Purple'));
console.log(!colors.includes('Green'));
