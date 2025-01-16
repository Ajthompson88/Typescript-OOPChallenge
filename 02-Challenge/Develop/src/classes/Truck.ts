import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import { AbleToTow } from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow {
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

    override start(): void {
        super.start();
        console.log(`${this.make} ${this.model} truck is starting.`);
    }

    tow(vehicle: Vehicle): void {
        console.log(`${this.make} ${this.model} is towing a ${vehicle.make} ${vehicle.model}`);
    }
}

export default Truck;
