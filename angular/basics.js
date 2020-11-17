const httpOptions = { timeout: 2000, cache: { age: 2 } };

const { cache: { age } } = httpOptions;

const timeouts = [1000, 2000, 3000];

const [shortTimeout, mediumTimeout] = timeouts;

function randomPonyInRace() 
{
	const pony = { name: 'Rainbow Dash' };
	const position = 2;

	return { pony, position };
}

console.log(randomPonyInRace());
