function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
// Example usage of the functions
var magicianNames = ['David Copperfield', 'Houdini', 'Derren Brown', 'Penn & Teller'];
var greatMagicians = make_great(magicianNames);
// Display the modified list using show_magicians()
show_magicians(greatMagicians);
