// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var bouquet = {
    name: "Spring delight",
    price: 250,
    Description: "Beautiful arrangement of spring flowers"
};
// Define an Array of objects
var bouquets = [];
// Pushing multiple Objects
bouquets.push(bouquet);
bouquets.push({
    name: "Summer Bliss",
    price: 350,
    Description: "Beautiful arrangement of summer flowers"
});
var bouquet3 = {
    name: "Red Roses",
    price: 150,
    Description: "beautiful arrangement of red roses"
};
bouquets.push(bouquet3);
console.log(bouquets);
