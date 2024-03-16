// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could 
// print a sentence such as Any of these animals would make a great pet!



// List of Animals
const animals: string[] = ["Cat", "Dog","Goat"];

// Printing the name of each animal using a for of loop
console.log("List of Animals");
for (const animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\n Statements about each animal:");
for (const animal of animals) {
    if (animal === 'Dog') {
        console.log(`A ${animal} is very faithful pet.`)
    } else if ( animal === 'Cat') {
        console.log(`A ${animal} would be a good companion at home.`);
    } else if (animal === 'Goat') {
        console.log(`A ${animal} gives us milk and reliable pet.`);
    }
}

// Common Characteristics
console.log("\n What these animals have a in common?")
console.log(" Any of these animals would make a great Pet.")

