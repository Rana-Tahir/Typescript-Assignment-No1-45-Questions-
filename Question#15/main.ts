// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


let guestlist = ["Maani","Usama","Mubashir","Zohaib"]

let canNotAttend = "Mubashir";
console.log(`${canNotAttend}, can not make it, for dinner today!`)

let newGuest = 'Ashhad'
guestlist[guestlist.indexOf(canNotAttend)] = newGuest;
console.log(guestlist);

guestlist.forEach(oneGuest => console.log(`Assalam, ${oneGuest} You have to come to my place for dinner today!`));

export{};
