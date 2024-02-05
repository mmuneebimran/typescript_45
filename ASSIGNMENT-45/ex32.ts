const currentUsers: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'John'];
const newUsers: string[] = ['John', 'Charlie', 'Alice', 'Eva', 'David'];

for (const newUser of newUsers) {
    const isUsernameTaken = currentUsers.some(
        (currentUsername) => currentUsername.toLowerCase() === newUser.toLowerCase()
    );

    if (isUsernameTaken) {
        console.log(`The username '${newUser}' is not available. Please choose a different one.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
        currentUsers.push(newUser); // Add the new username to the current users list
    }
}
