import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Car from './Car.js';
import Truck from './Truck.js';
import Motorbike from './Motorbike.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const vehiclesFilePath = path.join(__dirname, 'vehicles.json');
const responseFilePath = path.join(__dirname, 'response.txt');
export function loadVehicles() {
    if (!fs.existsSync(vehiclesFilePath)) {
        return [];
    }
    const data = fs.readFileSync(vehiclesFilePath, 'utf-8');
    const vehicles = JSON.parse(data);
    return vehicles.map((vehicle) => {
        console.log(`Loading vehicle type: ${vehicle.type}`);
        switch (vehicle.type) {
            case 'Car':
                return new Car(vehicle.vin, vehicle.color, vehicle.make, vehicle.model, vehicle.year, vehicle.weight, vehicle.topSpeed, vehicle.wheels);
            case 'Truck':
                return new Truck(vehicle.vin, vehicle.color, vehicle.make, vehicle.model, vehicle.year, vehicle.weight, vehicle.topSpeed, vehicle.wheels, vehicle.towingCapacity);
            case 'Motorbike':
                return new Motorbike(vehicle.vin, vehicle.color, vehicle.make, vehicle.model, vehicle.year, vehicle.weight, vehicle.topSpeed, vehicle.wheels);
            default:
                console.error(`Unknown vehicle type: ${vehicle.type}`);
                throw new Error('Unknown vehicle type');
        }
    });
}
export function saveVehicles(vehicles) {
    const data = JSON.stringify(vehicles.map(vehicle => ({
        vin: vehicle.vin,
        color: vehicle.color,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        weight: vehicle.weight,
        topSpeed: vehicle.topSpeed,
        wheels: vehicle.wheels,
        towingCapacity: vehicle instanceof Truck ? vehicle.towingCapacity : undefined,
        type: vehicle.type
    })), null, 2);
    fs.writeFileSync(vehiclesFilePath, data, 'utf-8');
}
export function writeResponseToFile(response) {
    fs.writeFileSync(responseFilePath, response, 'utf-8');
}
