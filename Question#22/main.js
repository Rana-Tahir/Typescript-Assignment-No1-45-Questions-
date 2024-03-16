"use strict";
// function to create a fruit object
Object.defineProperty(exports, "__esModule", { value: true });
function createfruit(name, Color, taste) {
    return {
        name: name,
        Color: Color,
        taste: taste
    };
}
// create a fruits array
var fruits = [
    createfruit("Apple", "red", "sweet"),
    createfruit("Banana", "yellow", "Sweet"),
    createfruit("Orange", "orange", "citrusy"),
    createfruit("Mango", "yellow", "very sweet")
];
// Access an Invalid Index
var InvalidIndex = 5;
console.log("fruit at Index ".concat(InvalidIndex, ":"), fruits[InvalidIndex]);
// Print the fruits
fruits.forEach(function (fruit) {
    console.log("Name: ".concat(fruit.name, ", Color: ").concat(fruit.Color, ", Taste: ").concat(fruit.taste));
});
