import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
    override vin: string;
    override make: string;
    override model: string;
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
        super(vin, make, model);
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
    }

    performWheelie(): void {
        console.log(`${this.make} ${this.model} is performing a wheelie!`);
    }
}

export default Motorbike;
