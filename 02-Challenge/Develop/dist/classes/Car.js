// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
// Car class that extends Vehicle class
class Car extends Vehicle {
    // Constructor for the Car class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        // Call the constructor of the parent class, Vehicle
        super(vin, make, model, 'Car');
        // Initialize properties of the Car class
        this.color = color;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
    }
}
// Export the Car class as the default export
export default Car;
