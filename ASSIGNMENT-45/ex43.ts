function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `The Great ${magician}`);
}

// Example usage of the functions
const magicianNames: string[] = ['David Copperfield', 'Houdini', 'Derren Brown', 'Penn & Teller'];

// Call make_great with a copy of the original array
const greatMagicians: string[] = make_great([...magicianNames]); // Using the spread operator to create a copy

// Display the original list using show_magicians()
console.log('Original Magician Names:');
show_magicians(magicianNames);

// Display the modified list using show_magicians()
console.log('\nMagician Names with "The Great":');
show_magicians(greatMagicians);
