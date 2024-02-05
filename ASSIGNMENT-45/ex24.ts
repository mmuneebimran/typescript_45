// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Item in array test: I predict True.");
console.log(fruits.indexOf('banana') !== -1);

// Test whether an item is not in an array
console.log("Item not in array test: I predict True.");
console.log(fruits.indexOf('grape') === -1);

