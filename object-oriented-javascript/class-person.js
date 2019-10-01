class Person {
  constructor(firstname,lastname) {
    this.firstname = firstname 
    this.lastname = lastname
  }
  greet(name) { 
    return "Hello, " + name + ". My name is " + this.firstname;  
  }
}


class NewPerson extends Person
{
  super(firstname, age)
  {
    console.log(this.firstname + "is the firstname")
  }
}

const person = new NewPerson('Larry', 19)

console.log(person)
