const animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Print the name of each animal using a for loop
console.log('Animal Names:');
for (const animal of animals) {
    console.log(animal);
}

// Print a statement about each animal using the name of the animal
console.log('\nAnimal Statements:');
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Additional line outside the loop about what these animals have in common
console.log('\nAny of these animals would make a great pet!');
