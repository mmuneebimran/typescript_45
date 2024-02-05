function createCar(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    additionalInfo.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Example usage of the function with correct argument format
var myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['optionalFeature', 'Sunroof']);
// Print the object to verify that all information is stored correctly
console.log(myCar);
