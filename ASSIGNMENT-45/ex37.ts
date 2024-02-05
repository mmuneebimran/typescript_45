function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`Shirt size: ${size}`);
    console.log(`Message: ${message}`);
    console.log('Enjoy your new shirt!');
}

// Example usage of the function
make_shirt(); // Large shirt with the default message

make_shirt('Medium'); // Medium shirt with the default message

make_shirt('Small', 'Custom message'); // Small shirt with a custom message
