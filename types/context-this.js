class User 
{
    constructor(firstname, lastname, email)
    {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
    }

    greet()
    {
        console.log(`Hi! I am ${this.firstname} ${this.lastname}`)
    }
}

let user = new User('John', 'Doe', 'johndoe@gmail.com')

user.greet = user.greet.bind(user)
console.log(user.greet)

user.greet.call({firstname: "Jane", lastname: "Doe"}) 
console.log(user.greet)


var foobar = {
    firstname: 'Foo',
    lastname: 'Bar'
}

user.greet.apply(foobar)
console.log(user.greet)
