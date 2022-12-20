function scopetest() {
	var x;
	console.log(2, x);
	x = 42;

	console.log(3, x);

	if (true) {
		var x;
		console.log(5, x);
		x = 17;
		console.log(6, x);
	}

	console.log(7, x);
}

scopetest();
