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

const greatMagicians: string[] = make_great(magicianNames);

// Display the modified list using show_magicians()
show_magicians(greatMagicians);
