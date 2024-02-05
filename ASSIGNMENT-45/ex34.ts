const favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Print the name of each pizza using a for loop
console.log('Pizza Names:');
for (const pizza of favoritePizzas) {
    console.log(pizza);
}

// Print a sentence for each pizza using the name of the pizza
console.log('\nPizza Preferences:');
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional line outside the loop about your love for pizza
console.log('\nI really love pizza!');
