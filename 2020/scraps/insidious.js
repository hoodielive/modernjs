function insidious() {
	var functionScoped = 'Outer Declaration'
	
	if (true) {
		var functionScoped = 'Inner Declaration'
	}

	console.log(functionScoped)
	return functionScoped
}

insidious()
