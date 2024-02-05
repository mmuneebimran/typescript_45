interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; // Allow any additional properties
}

function createCar(manufacturer: string, modelName: string, ...additionalInfo: [string, any][]): Car {
    const car: Car = {
        manufacturer,
        modelName,
    };

    additionalInfo.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Example usage of the function with correct argument format
const myCar: Car = createCar('Toyota', 'Camry', ['color', 'blue'], ['optionalFeature', 'Sunroof']);

// Print the object to verify that all information is stored correctly
console.log(myCar);
