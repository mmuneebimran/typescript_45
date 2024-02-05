var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// Call make_great with a copy of the original array
var greatMagicians = make_great(__spreadArray([], magicianNames, true)); // Using the spread operator to create a copy
// Display the original list using show_magicians()
console.log('Original Magician Names:');
show_magicians(magicianNames);
// Display the modified list using show_magicians()
console.log('\nMagician Names with "The Great":');
show_magicians(greatMagicians);
