/* Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */
function Createcar(manufacturer, Model) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, Model: Model };
    return car;
}
;
for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
    var _a = properties_1[_i], key = _a[0], value = _a[1];
    car[key] = value;
}
;
var myCar = Createcar("Toyota", "Fortuner", ["color", "Black"], ["optional feature", "Bullet proof"], ["speed", "300 KM/hour"]);
console.log(myCar);
