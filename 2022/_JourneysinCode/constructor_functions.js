let log = console.log

function Cat(name)
{
  this.name = name
  this.sound = "Meow"
}

let cat = new Cat("Osa")

Cat.prototype.speak = function()
{
  log(this.sound)
}

cat.speak()
cat.constructor // Returns type function

log(cat instanceof Cat) // Returns a boolean
