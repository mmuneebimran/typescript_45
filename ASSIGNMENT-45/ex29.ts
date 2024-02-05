const favoriteFruits: string[] = ['banana', 'apple', 'orange'];
const searchFruit: string = 'kiwi';

let found = false;

for (const fruit of favoriteFruits) {
    if (fruit === searchFruit) {
        console.log(`You really like ${searchFruit}s!`);
        found = true;
        break;
    }
}

if (!found) {
    console.log(`${searchFruit}s are not one of your favorite fruits.`);
}
