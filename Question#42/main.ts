/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */

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


// creating a function called make_great to modify the items in the magicians name
function make_great(magicians: string[]) : string [] {
    const greatmagicians : string[] = magicians.map(magician => 
        `The Great ${magician}`);
        return greatmagicians;
    }

// Modify the array to add "The Great" to each magician's name
const greatmagicianNames : string[] = make_great(magicianNames);

// call the function to show the Original magician's Names:
console.log("\noriginal magicians")


// call the function to show the Great maggician's Names:
console.log(greatmagicianNames);

