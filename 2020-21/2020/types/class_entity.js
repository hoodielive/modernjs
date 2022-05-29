class Entity {
    constructor(isAlive)
    { 
        this.isAlive = isAlive;
    }

    die() {
        this.isAlive = false;
    }

    resurrect() {
        this.isAlive = true; 
    }
}

class Person extends Entity {
    constructor(firstname, lastname) {
        super(true)
        this.firstname = firstname;
        this.lastname = lastname
    }

    greet() {
        console.log(`Hi I am ${this.firstname} ${this.lastname}.`)
    }
}

var p = new Person("John", "Snow")
p.greet();
p.die();
console.log(p.isAlive);
p.resurrect();
console.log(p.isAlive);