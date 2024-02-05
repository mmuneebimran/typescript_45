function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Example usage of the function
const magicianNames: string[] = ['David Copperfield', 'Houdini', 'Derren Brown', 'Penn & Teller'];

show_magicians(magicianNames);
