import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

class Cli {
  vehicles: (Car | Truck | Motorbike)[] = [];
  selectedVehicleVin: string = '';
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
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
        const car = new Car(vin, answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [new Wheel(), new Wheel(), new Wheel(), new Wheel()]);
        this.vehicles.push(car);
        this.startCli();
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
        const truck = new Truck(vin, answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [new Wheel(), new Wheel(), new Wheel(), new Wheel()], parseInt(answers.towingCapacity));
        this.vehicles.push(truck);
        this.startCli();
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
        const motorbike = new Motorbike(vin, answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [new Wheel(), new Wheel()]);
        this.vehicles.push(motorbike);
        this.startCli();
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
          break;
        case 'Decelerate 5 MPH':
          selectedVehicle.decelerate(5);
          break;
        case 'Stop vehicle':
          selectedVehicle.stop();
          break;
        case 'Turn right':
          selectedVehicle.turn('right');
          break;
        case 'Turn left':
          selectedVehicle.turn('left');
          break;
        case 'Reverse':
          selectedVehicle.reverse();
          break;
        case 'Tow vehicle':
          if (selectedVehicle instanceof Truck) {
            this.findVehicleToTow(selectedVehicle).then(() => {
              this.performActions();
            });
            return;
          } else {
            console.log('Only trucks can tow vehicles.');
          }
          break;
        case 'Perform wheelie':
          if (selectedVehicle instanceof Motorbike) {
            selectedVehicle.performWheelie();
          } else {
            console.log('Only motorbikes can perform a wheelie.');
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
      } else {
        console.log('Vehicle to tow not found.');
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