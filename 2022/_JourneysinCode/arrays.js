// String, Object, Number, Symbol, Null, Undefined, Boolean

let awos = [];

let cardinal_points = ['Ogbe', 'Oyeku', 'Iwori', 'Odi'];

let cardinal_Stuff = ['Ogbe', 1, "Otun", "Air"];

// Type array 
console.log(typeof(awos))
console.log(typeof(cardinal_points[0]))
console.log(cardinal_Stuff)


// If I wanted to return the index data type of 1 and 2, how would I ask 
// Javascript this?

// TypeOf
console.log(typeof(cardinal_Stuff[1]))
  
console.log(typeof(cardinal_Stuff[2]))

let array_number = [1, 2, 3, 4, 5, 6]
array_number[2] = "ogbe"

// Array Methods
console.log(array_number.pop())

// What will I return?
console.log(array_number)

// Push
console.log(array_number.push("Red"))
console.log(array_number)

// Shift
console.log(array_number.shift())

// Unshift
console.log(array_number.unshift(3))
console.log(array_number)

let array_odus = ['Oyeku', 'Irete', 'Ose']

// Concat
let new_combo = array_number.concat(array_odus)
console.log(new_combo)
console.log(array_number)
console.log(array_odus)
