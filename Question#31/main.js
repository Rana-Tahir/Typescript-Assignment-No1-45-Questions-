// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Non-Empty Array case
var userNames = ['admin', 'Azhar', 'Areeb', 'Zain', 'Ali'];
// function case
function greetusers(userNames) {
    if (userNames.length === 0) {
        console.log('We need to find some users!');
        return;
    }
    for (var i in userNames) {
        if (userNames[i].toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(userNames[i], ", thankyou for logging in again."));
        }
    }
}
console.log("\n For non empty user names: \n");
greetusers(userNames);
