function Person(firstname, lastname) {
  this.firstname = firstname; 
  this.lastname = lastname; 

Person.prototype.greet = function(name) {
    return "Hello " + name + ". My name is" + firstname; 
  }
}

let obj = new Person('King', 'Immortalis')
let obj2 = new Person('King', 'Decroid')

console.log(obj,obj2)
console.log(obj.greet === obj2.greet) // now you are true!! 
