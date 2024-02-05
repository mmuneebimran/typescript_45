var favoriteFruits = ['banana', 'apple', 'orange'];
var searchFruit = 'kiwi';
var found = false;
for (var _i = 0, favoriteFruits_1 = favoriteFruits; _i < favoriteFruits_1.length; _i++) {
    var fruit = favoriteFruits_1[_i];
    if (fruit === searchFruit) {
        console.log("You really like ".concat(searchFruit, "s!"));
        found = true;
        break;
    }
}
if (!found) {
    console.log("".concat(searchFruit, "s are not one of your favorite fruits."));
}
