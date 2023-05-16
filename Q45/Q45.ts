
interface CarData {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function storeCarInfo(manufacturer: string, modelName: string, ...additionalInfo: any[]): CarData {
    const car: CarData = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    for (let i = 0; i < additionalInfo.length; i += 2) {
        const key = additionalInfo[i];
        const value = additionalInfo[i + 1];
        car[key] = value;
    }

    return car;
}

const carInfo = storeCarInfo("Toyota", "V8", "color", "Red", "optionalFeature", "WaterProof");
console.log(carInfo);
