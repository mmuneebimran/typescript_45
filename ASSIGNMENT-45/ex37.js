function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt size: ".concat(size));
    console.log("Message: ".concat(message));
    console.log('Enjoy your new shirt!');
}
// Example usage of the function
make_shirt(); // Large shirt with the default message
make_shirt('Medium'); // Medium shirt with the default message
make_shirt('Small', 'Custom message'); // Small shirt with a custom message
