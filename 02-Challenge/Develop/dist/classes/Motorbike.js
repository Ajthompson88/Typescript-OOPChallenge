import Vehicle from './Vehicle.js';
class Motorbike extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        super(vin, make, model, 'Motorbike');
        this.color = color;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
    }
    performWheelie() {
        console.log(`${this.make} ${this.model} is performing a wheelie!`);
    }
}
export default Motorbike;
