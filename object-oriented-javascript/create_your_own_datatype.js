function Person(firstname, lastname) {
  this.firstname = firstname; 
  this.lastname = lastname; 

  Object.defineProperty(this, "firstname", {
    get: function () { return firstname;}
  }) // oooo this is so ugly! 

  this.greet = function(name) {
      return "Hello " + name + ". My name is" + firstname; 
    }
  }

let obj = createPerson('King', 'Immortalis')
let obj2 = createPerson('King', 'Decroid')
let obj3 = new Object(); 

console.log(obj,obj2,obj3)
console.log(obj.greet === obj2.greet)
