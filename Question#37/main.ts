// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.


function make_shirts (size: string = "Large", message: string = "I Love Typescript."): void {
    console.log(`size: ${size}, message: ${message}`);
}


// Large shirt with default message

make_shirts("large");

// Medium shirt with default message

make_shirts("medium");

// Smail with any message
make_shirts("small", "Governor IT initiative program by Kamran Tessrori.")

