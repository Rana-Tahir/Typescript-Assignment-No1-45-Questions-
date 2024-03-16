// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

console.log(`\n Unfortunately I can not arrange a big table, Only two person allow`);

while(guestlist.length > 2 ){
let remove_guest = guestlist.pop();
console.log(`Sorry Friend.${remove_guest} you are not invited for today dinner.`)
}

console.log("Invition to the last 2 guests");

guestlist.forEach(lasttwo => console.log(`Luckily ${lasttwo}, you are still invited for today dinner`));



