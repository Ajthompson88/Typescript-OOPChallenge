import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Truck extends Vehicle {
    color: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];
    towingCapacity: number;

    constructor(
        vin: string,
        color: string,
        make: string,
        model: string,
        year: number,
        weight: number,
        topSpeed: number,
        wheels: Wheel[],
        towingCapacity: number,
    ) {
        super(vin, make, model, 'Truck');
        this.color = color;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
        this.towingCapacity = towingCapacity;
    }

    tow(vehicle: Vehicle): void {
        console.log(`${this.make} ${this.model} is towing a ${vehicle.make} ${vehicle.model}`);
    }
}

export default Truck;
