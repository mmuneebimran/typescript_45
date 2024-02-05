function describe_city(city: string, country: string = 'Default Country'): void {
    console.log(`${city} is in ${country}.`);
}

// Example usage of the function
describe_city('Karachi', 'Pakistan');
describe_city('New York'); // Default country will be used (country = 'Default Country')
describe_city('Berlin', 'Germany');
