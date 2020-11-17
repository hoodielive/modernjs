const httpOptions = { timeout: 2000, cache: { age: 2 } };

const { cache: { age } } = httpOptions;
console.log(httpOptions);

const timeouts = [1000, 2000, 3000];
console.log(timeouts);

const [shortTimeout, mediumTimeout] = timeouts;
console.log(timeouts);

function randomPonyInRace() 
{
	const pony = { name: 'Rainbow Dash' };
	const position = 2;

	return { pony, position };
}

console.log(randomPonyInRace());
