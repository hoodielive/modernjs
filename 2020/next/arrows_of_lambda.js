function identity(n) {return n;}

console.assert(identity(42) == 42)
console.assert((typeof identity) == 'function')
console.assert(identity.name === 'identity')

fnStatement()

function fnStatement() {
	console.log('I am a function statement')
}

fnStatement()

const fnExpression = function() {
	console.log("I am a function expression")
}

fnExpression()

const nums = [1,2,3,4,5]

const result = nums
	.map(function(n) {
		return n * 3; 
	})
	.filter(function(n) {
		return (n % 2) === 0; 
	})
	.reduce(function(acc, n) {
		return acc + n;
	}, 0);
