var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var CountriestoVisit = ["Saudia Arabia", "Turkey", "Iraq", "Yemen", "Kuwait"];
console.log("Original Order", CountriestoVisit);
// Print the Array in Alphabetical Order
console.log("Alphabetical Oreder", __spreadArray([], CountriestoVisit, true).sort());
// Show that tha Array is Still in Original Order
console.log("Still in Original Order", __spreadArray([], CountriestoVisit, true));
console.log("Reverse Order", __spreadArray([], CountriestoVisit, true).reverse());
console.log("Still in Original Order", __spreadArray([], CountriestoVisit, true));
console.log("Original Order Reversed", __spreadArray([], CountriestoVisit, true).reverse());
console.log("back to Original Order", CountriestoVisit);
console.log("Sorted in Alphabetical Order", __spreadArray([], CountriestoVisit, true).sort());
console.log("Original Array Reversed Again", __spreadArray([], CountriestoVisit, true).reverse());
