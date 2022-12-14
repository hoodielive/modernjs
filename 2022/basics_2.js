// Strings, Numbers, Booleans, Objects

// Strings are a sequence of characters.

let myString = "my string";

console.log(typeof myString);

let fun = "fun fun fun";

// Numbers

let num = 3; // whole numbers
let num2 = 3.7; // decimal/floating point number - precision

console.log(typeof num);
console.log(typeof num2);

let num3 = num + num2;
console.log(num3);

// Booleans
let is_hired = false;
let is_fired = true;

console.log(is_hired);
console.log(is_fired);
console.log(typeof (is_hired, is_fired));

// Objects

let employee = {
	name: "Billy Bob",
	status: is_hired,
	role: "Engineer",
	access: "denied",
};

console.log(employee);
console.log(typeof employee);

console.log(employee.status);
console.log(employee["status"]);
