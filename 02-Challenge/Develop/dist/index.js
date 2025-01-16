// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";
// create an array of vehicles
const vehicles = [];
// Create a truck with default wheels
const truck1 = new Truck(Cli.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [new Wheel(), new Wheel(), new Wheel(), new Wheel()], 10000);
// Create a car with default wheels
const car1 = new Car(Cli.generateVin(), 'blue', 'Toyota', 'Camry', 2021, 3000, 130, [new Wheel(), new Wheel(), new Wheel(), new Wheel()]);
// Create a motorbike with specified wheels
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);
// Push vehicles to array
vehicles.push(truck1, car1, motorbike1);
// Initialize CLI with vehicles
const cli = new Cli();
cli.startCli();
