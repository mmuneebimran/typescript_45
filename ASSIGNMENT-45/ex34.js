var favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
// Print the name of each pizza using a for loop
console.log('Pizza Names:');
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(pizza);
}
// Print a sentence for each pizza using the name of the pizza
console.log('\nPizza Preferences:');
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var pizza = favoritePizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Additional line outside the loop about your love for pizza
console.log('\nI really love pizza!');
