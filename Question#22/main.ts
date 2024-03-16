// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// function to create a fruit object

function createfruit(name: string, Color: string, taste: string)
{
    return {
        name, 
        Color, 
        taste
    };
}

// create a fruits array
const fruits = [
    createfruit("Apple","red","sweet"),
    createfruit("Banana","yellow","Sweet"),
    createfruit("Orange","orange","citrusy"),
    createfruit("Mango","yellow","very sweet")
];

// Access an Invalid Index

const InvalidIndex = 5 ;

console.log(`fruit at Index ${InvalidIndex}:`, fruits[InvalidIndex]);

// Print the fruits

fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name}, Color: ${fruit.Color}, Taste: ${fruit.taste}`);
});


export{};
