var product = function(a, b) { return a * b }

var doubler = product.bind(this, 2)

console.log(doubler(8))

