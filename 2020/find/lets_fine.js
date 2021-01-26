
let jimmy = ['what', 'it', 'is'].entries();

console.log(jimmy);

console.log(
	[2, 4, 6, 8, 10].indexOf(8) > -1
)

console.log(
	[2, 4, 6, 8, 10].includes(8)
)
	
console.log(
	[2, 4, 6, 8, 10].find(function(item) {
		return item === 8;
	})
);

console.log(
	[2, 4, 6, 8, 10].find(function(item) {
		return item > 5
	})
);

console.log(
	[2, 4, 6, 8, 10, 11].find(item => item % 2)
)

console.log(
	[2, 4, 6, 8, 10, 11].find(item => item > 8)
)
