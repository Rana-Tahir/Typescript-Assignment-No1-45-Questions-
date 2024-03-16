
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



// Step 1: Arrays

const current_users: string[] = ['Mubashir','Ali','Maani','Zohaib','Farrukh','Ashhad']

const new_users: string[] = ['Faheem','maaNi','mubashir','Arsalan','Haroon']

// step 2: function
function checkUserNames (current_users: string[], new_users: string[]): void 
{
    const lowercasedCurrentusers = current_users.map(user => user.toLowerCase());
    for (const newuser of new_users) {
        const lowercasedNewuser = newuser.toLowerCase();
        if (lowercasedCurrentusers.includes(lowercasedNewuser)) {
            console.log(`UserName "${newuser} is already taken. Please enter a new username.`);
        } else {
            console.log(`UserName "${newuser} is available.`);
        }
    }
}

console.log(current_users)

// Test the function

checkUserNames(current_users, new_users);
