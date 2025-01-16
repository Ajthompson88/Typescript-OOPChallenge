// import Driveable interface
import Driveable from '../interfaces/Driveable.js';

// Vehicle class that implements Driveable interface
class Vehicle implements Driveable {
  // Declare properties of the Vehicle class
  started: boolean;
  currentSpeed: number;
  vin: string;
  make: string;
  model: string;
  type: string;

  // Constructor for the Vehicle class
  constructor(vin: string, make: string, model: string, type: string) {
    this.started = false;
    this.currentSpeed = 0;
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.type = type;
  }

  // Method to print vehicle details
  printDetails(): void {
    console.log(`Vehicle started: ${this.started}`);
    console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
  }

  // Method to start the vehicle
  start(): void {
    this.started = true;
    console.log('Vehicle started');
  }

  // Method to accelerate the vehicle
  accelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed += change;
      console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
      console.log(`${this.make} ${this.model} is accelerating by ${change} MPH.`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to decelerate the vehicle
  decelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed -= change;
      console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
      console.log(`${this.make} ${this.model} is decelerating by ${change} MPH.`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to stop the vehicle
  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log('Vehicle stopped');
    console.log(`${this.make} ${this.model} has stopped.`);
  }

  // Method to turn the vehicle
  turn(direction: string): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log(`Vehicle turned ${direction}`);
      console.log(`${this.make} ${this.model} is turning ${direction}.`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to reverse the vehicle
  reverse(): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log('Vehicle reversed');
      console.log(`${this.make} ${this.model} is reversing.`);
    } else {
      console.log('Start the vehicle first');
    }
  }
}

// Export the Vehicle class
export default Vehicle;
