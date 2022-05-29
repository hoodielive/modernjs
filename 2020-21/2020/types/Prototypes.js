function Entity(isAlive)
{
    this.isAlive = isAlive;
    return this;
}

Entity.prototype.die = function() 
{
    this.isAlive = false; 
}

Entity.prototype.resurrect = function() 
{
    this.isAlive = true; 
}

function Person(firstname, lastname)
{
    Entity.call(this, true);
    this.firstname = firstname;
    this.lastname = lastname;

    return this; 
}

Person.prototype = Object.create(Entity.prototype);

Person.prototype.greet = function() 
{
    console.log(`Hi I am ${this.firstname} ${this.lastname}`);
}

var p = new Person("jon", "snow");
p.greet();
p.die();
p.resurrect();
console.log(p.isAlive);
