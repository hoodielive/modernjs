class Person
{
  constructor(name) 
  {
    this.name = name;
  };
  
  greet()
  {
    return `${this.name} says Hello!`;
  }
}

document.getElementById('output').innerHTML = new Person('Osa').greet();
