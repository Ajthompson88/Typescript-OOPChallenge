class Vehicle {
    constructor(vin, make, model, type) {
        this.started = false;
        this.currentSpeed = 0;
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.type = type;
    }
    start() {
        this.started = true;
        console.log(`${this.make} ${this.model} is starting.`);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
        console.log(`${this.make} ${this.model} is accelerating by ${amount} MPH.`);
    }
    decelerate(amount) {
        this.currentSpeed = Math.max(0, this.currentSpeed - amount);
        console.log(`${this.make} ${this.model} is decelerating by ${amount} MPH.`);
    }
    stop() {
        this.currentSpeed = 0;
        console.log(`${this.make} ${this.model} has stopped.`);
    }
    turn(direction) {
        console.log(`${this.make} ${this.model} is turning ${direction}.`);
    }
    reverse() {
        console.log(`${this.make} ${this.model} is reversing.`);
    }
}
export default Vehicle;
