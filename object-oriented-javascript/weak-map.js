let Person = (function() { 
  let map = new WeakMap(); 

  function Person(firstname, lastname) {
    map.set(this, {
      firstname: firstname, 
      lastname: lastname, 
    });
  }

  Person.prototype.greet = function(name) {
    return "Hello, " + name + ". My name is " + map.get(this).firstname;
  };

  Object.defineProperty(Person.prototype, "firstname", {
    get: function() { return map.get(this).firstname }
  })

  Object.defineProperty(Person.prototype, "lastname", {
    get: function() { return map.get(this).lastname }
  })

  Person.renamePerson = function(person, lastname) {
    map.get(this).lastname = lastname;  
  }
})
