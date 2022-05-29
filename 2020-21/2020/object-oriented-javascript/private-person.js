let firstnameSymbol = Symbol();
let lastnameSymbol = Symbol();

export class Person {
  constructor(firstname, lastname) {
    this[firstnameSymbol] = firstname;  
    this[lastnameSymbol] = lastname;
  }
  greet(name) {
   return console.log("Hello, " + name + ". My name is " + this.firstname); 
  }
  get firstname() {
    return this[firstnameSymbol]   
  }
  get lastname() {
    return this[firstnameSymbol]   
  }
  static renamePerson(person, lastname) {
    person[firstnameSymbol] = lastname; 
  }
}

