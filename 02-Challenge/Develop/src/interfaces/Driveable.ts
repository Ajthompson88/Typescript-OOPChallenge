// definition of the Driveable interface
export interface Driveable {
    // declare the properties
    started: boolean;
    currentSpeed: number;
    // declare the methods
    start(): void;
    accelerate(amount: number): void;
    decelerate(amount: number): void;
    stop(): void;
    turn(direction: string): void;
    reverse(): void;
}