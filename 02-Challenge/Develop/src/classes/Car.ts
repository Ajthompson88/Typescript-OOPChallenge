import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Car extends Vehicle {
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
        super(vin, make, model, 'Car');
        this.color = color;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
    }

    override start(): void {
        super.start();
        console.log(`${this.make} ${this.model} car is starting.`);
    }
}

export default Car;
