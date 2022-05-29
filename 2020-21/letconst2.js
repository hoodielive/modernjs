let x = 10;

let fun = function() {
	{
		let x = 20;
		console.log('inner scope', x);
	}
	console.log('outer scope', x);
	x  += 10;
}

fun();

console.log('this is should be 20', x);

const create = function()
{
	this.x = 10;
	console.log('this', this);

	const innerFun = function() {
			console.log('inner this', this);
		}

	const innerArrowFun = () => {
			console.log('inner arrow this', this);
		}
		innerFun();
		innerArrowFun();
	}
	const item = new create();

// Collection types.

const set = function(...items) {
	this._arr = [...items];
	this.add = function(item) {
		if(this._arr.includes(item)) return false;
		this._arr.push(item);
		return true;
	}
	this.has = function(item) {
		return this._arr.includes(item);
	}
	this.values = function() {
		return this._arr;
	}
	this.clear = function() {
		this._arr = [];
	}
}

const data = new Array(1000000)

for (let i = 0; i < data.length; i++) {
	data[i] = i;
}

const setData = new Set();
for (let i = 0; i < data.length; i++) {
	setData.add(i);
}

data.includes(50000000);
setData.has(50000000);

const map = new Map(); 
for (let i = 0; i < 100000; i++) {
	map.set(`${i}item`, 1);
}

map.forEach((val, key) => console.log(val))
map.size(); 
map.has('0item');
map.clear();
