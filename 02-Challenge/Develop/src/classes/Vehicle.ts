import { Driveable } from '../interfaces/Driveable.js';

class Vehicle implements Driveable {
    vin: string;
    make: string;
    model: string;
    type: string;
    started: boolean = false;
    currentSpeed: number = 0;

    constructor(vin: string, make: string, model: string, type: string) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.type = type;
    }

    start(): void {
        this.started = true;
        console.log(`${this.make} ${this.model} is starting.`);
    }

    accelerate(amount: number): void {
        this.currentSpeed += amount;
        console.log(`${this.make} ${this.model} is accelerating by ${amount} MPH.`);
    }

    decelerate(amount: number): void {
        this.currentSpeed = Math.max(0, this.currentSpeed - amount);
        console.log(`${this.make} ${this.model} is decelerating by ${amount} MPH.`);
    }

    stop(): void {
        this.currentSpeed = 0;
        console.log(`${this.make} ${this.model} has stopped.`);
    }

    turn(direction: string): void {
        console.log(`${this.make} ${this.model} is turning ${direction}.`);
    }

    reverse(): void {
        console.log(`${this.make} ${this.model} is reversing.`);
    }
}

export default Vehicle;
