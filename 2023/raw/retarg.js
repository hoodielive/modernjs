const log = console.log

function puzzle() {
  return () => log(arguments)
}

puzzle('a', 'b', 'c')(1, 2, 3)


// Assignment Destructuring 

let character = {
  username: 'Bruce',
  pseudonym: 'Batman',
  metadata: {
    age: 34,
    gender: 'male',
  },
  batarang: ['gas pellet', 'bat-mobile control', 'bat-cuffs']
}

let { pseudonym: alias } = character
let { username: user} = character

log(alias);
log(user);
log(character.batarang);

let coordinates = [12, -7];
let [x, y] = coordinates;
log(x)
log(y)

// let left = 5
// let right = 7
// let aux = left
// left = right
// right = aux

// let left = 5
// let right = 7
// [left, right] = [right, left]

// log(right);
