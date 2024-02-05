function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Sandwich Order:');
    if (items.length === 0) {
        console.log('No items selected. Please choose some ingredients.');
    }
    else {
        console.log("You ordered a sandwich with: ".concat(items.join(', '), "."));
    }
    console.log('---');
}
// Example usage of the function
order_sandwich('Turkey', 'Cheese', 'Lettuce', 'Tomato');
order_sandwich('Ham', 'Swiss Cheese');
order_sandwich(); // No items selected
