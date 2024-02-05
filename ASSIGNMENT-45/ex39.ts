function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Example usage of the function
const location1: string = city_country('Lahore', 'Pakistan');
const location2: string = city_country('Tokyo', 'Japan');
const location3: string = city_country('Paris', 'France');

console.log(location1);
console.log(location2);
console.log(location3);
