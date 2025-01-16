import Vehicle from '../classes/Vehicle.js';

export interface AbleToTow {
    towingCapacity: number;
    tow(vehicle: Vehicle): void;
}
