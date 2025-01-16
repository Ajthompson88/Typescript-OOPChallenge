// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Car class that extends Vehicle class
class Car extends Vehicle {
    // Declare properties of the Car class
    color: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];

    // Constructor for the Car class
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
