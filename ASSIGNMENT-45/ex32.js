var currentUsers = ['admin', 'Eric', 'Alice', 'Bob', 'John'];
var newUsers = ['John', 'Charlie', 'Alice', 'Eva', 'David'];
var _loop_1 = function (newUser) {
    var isUsernameTaken = currentUsers.some(function (currentUsername) { return currentUsername.toLowerCase() === newUser.toLowerCase(); });
    if (isUsernameTaken) {
        console.log("The username '".concat(newUser, "' is not available. Please choose a different one."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
        currentUsers.push(newUser); // Add the new username to the current users list
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
