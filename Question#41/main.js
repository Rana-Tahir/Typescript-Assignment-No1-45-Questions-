/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
// creating a variable for magician names 
var magicianNames = ["Harry porter", "David Copperfield", "Hermione Granger", "Criss Angel", "Dynamo"];
// creating a function called show_magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var items = magicians_1[_i];
        console.log(items);
    }
}
// call the function to show the magicians Names:
show_magicians(magicianNames);
