// Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.



let CountriestoVisit : string[] = ["Saudia Arabia","Turkey","Iraq","Yemen","Kuwait"];
console.log("Original Order", CountriestoVisit);

// Print the Array in Alphabetical Order
console.log("Alphabetical Oreder", [...CountriestoVisit].sort());

// Show that tha Array is Still in Original Order
console.log("Still in Original Order", [...CountriestoVisit]);


console.log("Reverse Order", [...CountriestoVisit].reverse());


console.log("Still in Original Order",[...CountriestoVisit]);


console.log("Original Order Reversed",[...CountriestoVisit].reverse());


console.log("back to Original Order", CountriestoVisit);


console.log("Sorted in Alphabetical Order", [...CountriestoVisit].sort());


console.log("Original Array Reversed Again", [...CountriestoVisit].reverse());

