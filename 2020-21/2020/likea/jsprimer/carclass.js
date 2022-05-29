class Car {
  constructor(brand='Default Brand', model='Default Model', year) {
    this.brand = brand
    this.model = model 
    this.year = year || 2000
  }

  displayCarInformation() {
    console.log(this.brand + ' ' + this.model + ' ' + this.year)  
  }

}

class CarService {
  constructor(name, country) {
    this.name = name
    this.country = country
    this.carsToRepair = []
  }   

  addCar(car) {
    debugger;
    this.carsToRepair.push(car) 
  }
  
}

const car1 = new Car('ford', 'focus', 2015)

const car2 = new Car('ford', 'fiesta', 2000)

const carService = new CarService('SuperCars', 'Spain, Malaga')

console.log(car1.displayCarInformation())

console.log(carService.addCar(car1))
debugger;
console.log(carService.addCar(car2))
