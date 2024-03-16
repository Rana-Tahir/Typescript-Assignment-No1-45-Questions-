/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */


// creating a variable for magician names 
const magicianNames : string[] = ["Harry porter","David Copperfield","Hermione Granger","Criss Angel","Dynamo"];

// creating a function called show_magicians
function show_magicians(magicians: string[]) : void {
    for (const items of magicians) {
        console.log(items);
    }
}

// call the function to show the magicians Names:

show_magicians(magicianNames);




