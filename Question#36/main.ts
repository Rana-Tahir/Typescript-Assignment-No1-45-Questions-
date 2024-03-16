// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt
//  and the message printed on it. Call the function.



const make_shirts = (Size: string, message: string): void => 
{
console.log(`size: ${Size}' message: ${message}`);
}


// call the function with variables

let size: string = "medium";
let message: string = "Governor IT initiative program by Kamran Tessori"

make_shirts("medium", "Governor IT initiative Program by Kamran Tessori");

