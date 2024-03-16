/* Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */

function Createcar (manufacturer: string, Model: string, ...properties: [string,any][]):
any {
    const car: any = { manufacturer,Model} 

    return car;
};

for (const[key,value] of properties) {
    car [key] = value;
  
};




const myCar : string = Createcar("Toyota","Fortuner",["color","Black"] ,
 ["optional feature","Bullet proof"],["speed","300 KM/hour"])

console.log(myCar);
