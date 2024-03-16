var guestlist = ["Maani", "Usama", "Mubashir", "Zohaib"];
var canNotAttend = "Mubashir";
console.log("".concat(canNotAttend, ", can not make it, for dinner today!"));
var newGuest = 'Ashhad';
guestlist[guestlist.indexOf(canNotAttend)] = newGuest;
console.log(guestlist);
guestlist.forEach(function (Oneguest) { return console.log("Assalam, ".concat(Oneguest, " Good News, I have reserve a bigger table for today dinner")); });
guestlist.unshift('Areeb');
guestlist.push('Farrukh');
var middleIndex = Math.floor(guestlist.length / 2);
guestlist.splice(middleIndex, 0, "Azhar");
console.log("Updated list of our guests");
guestlist.forEach(function (oneguest) { return console.log("Assalam, ".concat(oneguest, " Would you like to dinner with me?")); });
console.log("\n Unfortunately I can not arrange a big table, Only two person allow");
while (guestlist.length > 2) {
    var remove_guest = guestlist.pop();
    console.log("Sorry Friend.".concat(remove_guest, " you are not invited for today dinner."));
}
console.log("Invition to the last 2 guests");
guestlist.forEach(function (lasttwo) { return console.log("Luckily ".concat(lasttwo, ", you are still invited for today dinner")); });
