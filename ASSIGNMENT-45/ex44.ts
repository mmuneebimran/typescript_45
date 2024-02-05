function order_sandwich(...items: string[]): void {
    console.log('Sandwich Order:');
    if (items.length === 0) {
        console.log('No items selected. Please choose some ingredients.');
    } else {
        console.log(`You ordered a sandwich with: ${items.join(', ')}.`);
    }
    console.log('---');
}

// Example usage of the function
order_sandwich('Turkey', 'Cheese', 'Lettuce', 'Tomato');
order_sandwich('Ham', 'Swiss Cheese');
order_sandwich(); // No items selected
