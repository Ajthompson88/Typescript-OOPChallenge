import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";
import { loadVehicles, saveVehicles, writeResponseToFile } from "./storage.js";

class Cli {
  vehicles: (Car | Truck | Motorbike)[] = [];
  selectedVehicleVin: string = '';
  exit: boolean = false;

  constructor() {
    this.vehicles = loadVehicles();
  }

  static generateVin(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        this.selectedVehicleVin = answers.selectedVehicleVin;
        this.performActions();
      });
  }

  confirmVehicleDetails(details: any, createVehicleCallback: () => void): void {
    console.log("Entered Vehicle Details:");
    console.log(details);

    inquirer
      .prompt([
        {
          type: 'confirm',
          name: 'isCorrect',
          message: 'Is the entered information correct?',
        },
      ])
      .then((answers) => {
        if (answers.isCorrect) {
          createVehicleCallback();
        } else {
          this.createVehicle();
        }
      });
  }

  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          this.createCar();
        } else if (answers.vehicleType === 'Truck') {
          this.createTruck();
        } else if (answers.vehicleType === 'Motorbike') {
          this.createMotorbike();
        }
      });
  }

  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      .then((answers) => {
        const vin = Cli.generateVin();
        const carDetails = {
          vin,
          color: answers.color,
          make: answers.make,
          model: answers.model,
          year: parseInt(answers.year),
          weight: parseInt(answers.weight),
          topSpeed: parseInt(answers.topSpeed),
          wheels: [new Wheel(), new Wheel(), new Wheel(), new Wheel()],
        };

        this.confirmVehicleDetails(carDetails, () => {
          const car = new Car(
            carDetails.vin,
            carDetails.color,
            carDetails.make,
            carDetails.model,
            carDetails.year,
            carDetails.weight,
            carDetails.topSpeed,
            carDetails.wheels
          );
          this.vehicles.push(car);
          saveVehicles(this.vehicles);
          writeResponseToFile(`Created Car: ${JSON.stringify(carDetails, null, 2)}`);
          this.startCli();
        });
      });
  }

  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers) => {
        const vin = Cli.generateVin();
        const truckDetails = {
          vin,
          color: answers.color,
          make: answers.make,
          model: answers.model,
          year: parseInt(answers.year),
          weight: parseInt(answers.weight),
          topSpeed: parseInt(answers.topSpeed),
          wheels: [new Wheel(), new Wheel(), new Wheel(), new Wheel()],
          towingCapacity: parseInt(answers.towingCapacity),
        };

        this.confirmVehicleDetails(truckDetails, () => {
          const truck = new Truck(
            truckDetails.vin,
            truckDetails.color,
            truckDetails.make,
            truckDetails.model,
            truckDetails.year,
            truckDetails.weight,
            truckDetails.topSpeed,
            truckDetails.wheels,
            truckDetails.towingCapacity
          );
          this.vehicles.push(truck);
          saveVehicles(this.vehicles);
          writeResponseToFile(`Created Truck: ${JSON.stringify(truckDetails, null, 2)}`);
          this.startCli();
        });
      });
  }

  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      .then((answers) => {
        const vin = Cli.generateVin();
        const motorbikeDetails = {
          vin,
          color: answers.color,
          make: answers.make,
          model: answers.model,
          year: parseInt(answers.year),
          weight: parseInt(answers.weight),
          topSpeed: parseInt(answers.topSpeed),
          wheels: [new Wheel(), new Wheel()],
        };

        this.confirmVehicleDetails(motorbikeDetails, () => {
          const motorbike = new Motorbike(
            motorbikeDetails.vin,
            motorbikeDetails.color,
            motorbikeDetails.make,
            motorbikeDetails.model,
            motorbikeDetails.year,
            motorbikeDetails.weight,
            motorbikeDetails.topSpeed,
            motorbikeDetails.wheels
          );
          this.vehicles.push(motorbike);
          saveVehicles(this.vehicles);
          writeResponseToFile(`Created Motorbike: ${JSON.stringify(motorbikeDetails, null, 2)}`);
          this.startCli();
        });
      });
  }

  performActions(): void {
    inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Select an action',
        choices: [
          'Accelerate 5 MPH',
          'Decelerate 5 MPH',
          'Stop vehicle',
          'Turn right',
          'Turn left',
          'Reverse',
          'Tow vehicle',
          'Perform wheelie',
          'Select or create another vehicle',
          'Exit'
        ],
      },
    ]).then((answers) => {
      const selectedVehicle = this.vehicles.find(vehicle => vehicle.vin === this.selectedVehicleVin);

      if (!selectedVehicle) {
        console.log('Selected vehicle not found.');
        return;
      }

      switch (answers.action) {
        case 'Accelerate 5 MPH':
          selectedVehicle.accelerate(5);
          writeResponseToFile(`${selectedVehicle.make} ${selectedVehicle.model} accelerated by 5 MPH.`);
          break;
        case 'Decelerate 5 MPH':
          selectedVehicle.decelerate(5);
          writeResponseToFile(`${selectedVehicle.make} ${selectedVehicle.model} decelerated by 5 MPH.`);
          break;
        case 'Stop vehicle':
          selectedVehicle.stop();
          writeResponseToFile(`${selectedVehicle.make} ${selectedVehicle.model} stopped.`);
          break;
        case 'Turn right':
          selectedVehicle.turn('right');
          writeResponseToFile(`${selectedVehicle.make} ${selectedVehicle.model} turned right.`);
          break;
        case 'Turn left':
          selectedVehicle.turn('left');
          writeResponseToFile(`${selectedVehicle.make} ${selectedVehicle.model} turned left.`);
          break;
        case 'Reverse':
          selectedVehicle.reverse();
          writeResponseToFile(`${selectedVehicle.make} ${selectedVehicle.model} reversed.`);
          break;
        case 'Tow vehicle':
          if (selectedVehicle instanceof Truck) {
            this.findVehicleToTow(selectedVehicle).then(() => {
              this.performActions();
            });
            return;
          } else {
            console.log('Only trucks can tow vehicles.');
            writeResponseToFile('Only trucks can tow vehicles.');
          }
          break;
        case 'Perform wheelie':
          if (selectedVehicle instanceof Motorbike) {
            selectedVehicle.performWheelie();
            writeResponseToFile(`${selectedVehicle.make} ${selectedVehicle.model} performed a wheelie.`);
          } else {
            console.log('Only motorbikes can perform a wheelie.');
            writeResponseToFile('Only motorbikes can perform a wheelie.');
          }
          break;
        case 'Select or create another vehicle':
          this.startCli();
          return;
        case 'Exit':
          this.exit = true;
          break;
        default:
          console.log('Unknown action.');
          writeResponseToFile('Unknown action.');
      }

      if (!this.exit) {
        this.performActions();
      }
    });
  }

  findVehicleToTow(truck: Truck): Promise<void> {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'vehicleToTow',
        message: 'Select a vehicle to tow',
        choices: this.vehicles
          .filter(vehicle => vehicle !== truck)
          .map(vehicle => ({
            name: `${vehicle.make} ${vehicle.model}`,
            value: vehicle.vin,
          })),
      },
    ]).then((answers) => {
      const vehicleToTow = this.vehicles.find(vehicle => vehicle.vin === answers.vehicleToTow);
      if (vehicleToTow) {
        truck.tow(vehicleToTow);
        writeResponseToFile(`${truck.make} ${truck.model} towed ${vehicleToTow.make} ${vehicleToTow.model}.`);
      } else {
        console.log('Vehicle to tow not found.');
        writeResponseToFile('Vehicle to tow not found.');
      }
    });
  }

  startCli(): void {
    inquirer.prompt([
      {
        type: 'list',
        name: 'CreateOrSelect',
        message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
        choices: ['Create a new vehicle', 'Select an existing vehicle'],
      },
    ]).then((answers) => {
      if (answers.CreateOrSelect === 'Create a new vehicle') {
        this.createVehicle();
      } else {
        this.chooseVehicle();
      }
    });
  }
}

export default Cli;