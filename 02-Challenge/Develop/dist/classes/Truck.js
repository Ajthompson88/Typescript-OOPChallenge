import Vehicle from './Vehicle.js';
class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super(vin, make, model, 'Truck');
        this.color = color;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
        this.towingCapacity = towingCapacity;
    }
    tow(vehicle) {
        console.log(`${this.make} ${this.model} is towing a ${vehicle.make} ${vehicle.model}`);
    }
}
export default Truck;
