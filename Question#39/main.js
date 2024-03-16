/* City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */
// Create a function called city_country()
var city_country = function (city, country) {
    return ("".concat(city, ", ").concat(country));
};
// call the function
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("London", "Uk"));
