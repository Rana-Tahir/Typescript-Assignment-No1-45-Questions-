// List of Animals
var animals = ["Cat", "Dog", "Goat"];
// Printing the name of each animal using a for of loop
console.log("List of Animals");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print a statement about each animal
console.log("\n Statements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    if (animal === 'Dog') {
        console.log("A ".concat(animal, " is very faithful pet."));
    }
    else if (animal === 'Cat') {
        console.log("A ".concat(animal, " would be a good companion at home."));
    }
    else if (animal === 'Goat') {
        console.log("A ".concat(animal, " gives us milk and reliable pet."));
    }
}
// Common Characteristics
console.log("\n What these animals have a in common?");
console.log(" Any of these animals would make a great Pet.");
