function describe_city(city, country) {
    if (country === void 0) { country = 'Default Country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Example usage of the function
describe_city('Karachi', 'Pakistan');
describe_city('New York'); // Default country will be used (country = 'Default Country')
describe_city('Berlin', 'Germany');
