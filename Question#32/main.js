// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Step 1: Arrays
var current_users = ['Mubashir', 'Ali', 'Maani', 'Zohaib', 'Farrukh', 'Ashhad'];
var new_users = ['Faheem', 'maaNi', 'mubashir', 'Arsalan', 'Haroon'];
// step 2: function
function checkUserNames(current_users, new_users) {
    var lowercasedCurrentusers = current_users.map(function (user) { return user.toLowerCase(); });
    for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
        var newuser = new_users_1[_i];
        var lowercasedNewuser = newuser.toLowerCase();
        if (lowercasedCurrentusers.includes(lowercasedNewuser)) {
            console.log("UserName \"".concat(newuser, " is already taken. Please enter a new username."));
        }
        else {
            console.log("UserName \"".concat(newuser, " is available."));
        }
    }
}
console.log(current_users);
// Test the function
checkUserNames(current_users, new_users);
