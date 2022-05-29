function identity(n)
{
	return n;
}

obj = {
	firstname: "Lola",
	lastName: "Heal",
	age: 47,
	location: 'Georgia',
	expected_extinction: 159,
	salary: 1200000,
}

console.log(identity(obj));
