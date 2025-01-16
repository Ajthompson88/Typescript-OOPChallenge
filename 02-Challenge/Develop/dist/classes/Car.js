import Vehicle from './Vehicle.js';
class Car extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        super(vin, make, model, 'Car');
        this.color = color;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
    }
    start() {
        super.start();
        console.log(`${this.make} ${this.model} car is starting.`);
    }
}
export default Car;
