"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guestlist = ["Maani", "Usama", "Mubashir", "Zohaib"];
var canNotAttend = "Mubashir";
console.log("".concat(canNotAttend, ", can not make it, for dinner today!"));
var newGuest = 'Ashhad';
guestlist[guestlist.indexOf(canNotAttend)] = newGuest;
console.log(guestlist);
guestlist.forEach(function (oneGuest) { return console.log("Assalam, ".concat(oneGuest, " You have to come to my place for dinner today!")); });
