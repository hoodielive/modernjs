function createPerson(firstname, lastname) {
  let person = {
    get firstname() {
      return firstname;  
    },
    get lastname() {
      return lastname;  
    },
    greet: function(name) {
      return "Hello " + name + ". My name is" + firstname; 
    }
  }
  return person;
}

let obj = createPerson('King', 'Immortalis')
let obj2 = createPerson('King', 'Decroid')
let obj3 = new Object(); 

console.log(obj,obj2,obj3)
console.log(obj.greet === obj2.greet)
