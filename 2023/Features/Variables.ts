const log: any = console.log

let apple_quantity: number = 5;

let nothing: undefined = undefined;
let nothingMuch: null = null;
let now: Date = new Date();

// Array 
let colors: string[] = ['real', 'array', 'red'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false]

// Classes with type annotations
class Car {}
let car: Car = new Car();

let point: { x: number, y: number } = {
    x: 10,
    y: 20
}
log(point);

// Function annotations 
const logNumber: (i: number) => void = (i: number) => 
{
    log(i);
}