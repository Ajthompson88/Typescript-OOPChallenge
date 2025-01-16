// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces

import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// DONE: The Truck class should extend the Vehicle class and should implement the AbleToTow interface

class Truck extends Vehicle implements AbleToTow {

// DONE: Declare properties of the Truck class
// DONE: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
// DONE: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

vin: string;
color: string;
make: string;
model: string;
year: number;
weight: number;
topSpeed: number;
wheels: Wheel[];
towingCapacity: number;

// DONE: Create a constructor that accepts the properties of the Truck class
// DONE: The constructor should call the constructor of the parent class, Vehicle
// DONE: The constructor should initialize the properties of the Truck class
// DONE: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

constructor(
  vin: string,
  color: string,
  make: string,
  model: string,
  year: number,
  weight: number,
  topSpeed: number,
  wheels: Wheel[],
  towingCapacity: number
) {
  super();
  this.vin = vin;
  this.color = color;
  this.make = make;
  this.model = model;
  this.year = year;
  this.weight = weight;
  this.topSpeed = topSpeed;
  this.towingCapacity = towingCapacity;
  this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
}

// DONE: Implement the tow method from the AbleToTow interface

tow(vehicle: Truck | Motorbike | Car): void {
  const make = vehicle.make;
  const model = vehicle.model;

  if (vehicle.weight <= this.towingCapacity) {
    console.log(`Towing ${make} ${model}`);
  } else {
    console.log(`The vehicle is too heavy to be towed`);
  }
}

// DONE: Override the printDetails method from the Vehicle class
// DONE: The method should call the printDetails method of the parent class
// DONE: The method should log the details of the Truck
// DONE: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels

override printDetails(): void {
  super.printDetails();
  console.log(`VIN: ${this.vin}`);
  console.log(`Color: ${this.color}`);
  console.log(`Make: ${this.make}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`);
  console.log(`Weight: ${this.weight} lbs`);
  console.log(`Top Speed: ${this.topSpeed} mph`);
  console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
  this.wheels.forEach((wheel, index) => {
    console.log(`Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`);
  });
}
}

// Export the Truck class as the default export

export default Truck;