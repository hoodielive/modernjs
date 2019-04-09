let Person = (function() {
  let firstnameSymbol = Symbol();
  let lastnameSymbol = Symbol();

  function Person(firstname, lastname) {
    this[firstnameSymbol] = firstname;  
    this[lastnameSymbol] = lastname;
  }

  Person.prototype.greet = function(name) {
    return console.log("Hello, " + name + ". My name is " + this.firstname); 
  };

  Object.defineProperty(Person.prototype, "firstname", {
    get: function() { return this[firstnameSymbol] }
  });

  Object.defineProperty(Person.prototype, "lastname", {
    get: function() { return this[lastnameSymbol] }
  }); 

  Person.renamePerson = function(person, lastname) {
    person[firstnameSymbol] = lastname; 
  }; 
  return Person;
}()); 

let obj = new Person('King', 'Immortalis')
let obj2 = new Person('King', 'Decroid')

// console.log(obj,obj2)
// console.log(obj.greet === obj2.greet) // now you are true!! 
