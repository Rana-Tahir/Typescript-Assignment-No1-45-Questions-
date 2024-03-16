// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guestlist =["Maani","Usama","Mubashir","Zohaib"];

let canNotAttend = "Mubashir";
console.log(`${canNotAttend}, can not make it, for dinner today!`)

let newGuest = 'Ashhad'
guestlist[guestlist.indexOf(canNotAttend)] = newGuest;
console.log(guestlist);

guestlist.forEach(Oneguest => console.log(`Assalam, ${Oneguest} Good News, I have reserve a bigger table for today dinner`))

guestlist.unshift('Areeb');

guestlist.push('Farrukh');

let middleIndex = Math.floor(guestlist.length / 2);

guestlist.splice(middleIndex,0,"Azhar");

console.log("Updated list of our guests");

guestlist.forEach(oneguest => console.log(`Assalam, ${oneguest} Would you like to dinner with me?`))

