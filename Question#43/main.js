/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
// creating a variable for magician names 
var magicianNames = ["Harry porter", "David Copperfield", "Hermione Granger", "Criss Angel", "Dynamo"];
// creating a function called show_magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var items = magicians_1[_i];
        console.log(items);
    }
}
// creating a function called make_great to modify the items in the magicians name
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) {
        return "The Great ".concat(magician);
    });
    return greatMagicians;
}
// Modify the array to add "The Great" to each magician's name
var greatMagicianNames = make_great(magicianNames);
// call the function to show the Original magician's Names:
console.log("\noriginal magicians:");
show_magicians(magicianNames);
// call the function to show the Great maggician's Names:
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);
