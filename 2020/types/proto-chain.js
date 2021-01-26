function doSomething() {}

console.log( doSomething.prototype )

var doSomething  = function() {}

console.log( doSomething.prototype )

doSomething.prototype.foo = "bar"

console.log( doSomething.prototype )
