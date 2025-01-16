import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
    color: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];

    constructor(
        vin: string,
        color: string,
        make: string,
        model: string,
        year: number,
        weight: number,
        topSpeed: number,
        wheels: Wheel[],
    ) {
        super(vin, make, model, 'Motorbike');
        this.color = color;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
    }

    performWheelie(): void {
        console.log(`${this.make} ${this.model} is performing a wheelie!`);
    }
}

export default Motorbike;