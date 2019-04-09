class Person {
  constructor(firstname,lastname) {
    this.firstname = firstname 
    this.lastname = lastname
  }
  greet(name) { 
    return "Hello, " + name + ". My name is " + this.firstname;  
  }
}
