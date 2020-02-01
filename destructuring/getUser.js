function getUser() {
	return {
		name: 'Tzyurash',
		handle: '@tzyurash',
		location: 'Garden of Eden'
	}
}

var { name, handle, location } = getUser()

var csv = "2019, RangeRover, Sport, Buy"

var [ year, make, model, description ] = csv.split(',')

console.log(csv.split(','))
