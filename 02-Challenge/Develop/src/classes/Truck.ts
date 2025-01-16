import Vehicle from './Vehicle.js';
import Car from './Car.js';
import Motorbike from './Motorbike.js';
import Wheel from './Wheel.js';

class Truck extends Vehicle {
    override vin: string;
    override make: string;
    override model: string;
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
        super(vin, make, model);
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
        this.towingCapacity = towingCapacity;
    }

    tow(vehicle: Vehicle): void {
        if (vehicle instanceof Car || vehicle instanceof Truck || vehicle instanceof Motorbike) {
            console.log(`${this.make} ${this.model} is towing a ${vehicle.make} ${vehicle.model}`);
        } else {
            console.log('Cannot tow this type of vehicle.');
        }
    }
}

export default Truck;
