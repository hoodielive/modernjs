class Car {
  constructor(make="Default Make", model="Default Model", year) {
    this.make = make 
    this.model = model 
    this.year = year || 2000
  }
  getCarInfo() {
    console.log('This car is of the make ' + this.make + ' and the model is ' + this.model + ' for year ' + this.year) 
  }
}

class BeClassy {
  prop = value; 

  constructor(name, avatar) {
    this.name = name
    this.avatar = avatar
  }

  get avatari() {
    return 'he is a dude called' + this.avatar 
  }

  set avatari(dude) {
    const dude = this.avatar 
  }

}
const car1 = new Car('toyota', 'corolla', 1993)
console.log(car1.getCarInfo()) 
