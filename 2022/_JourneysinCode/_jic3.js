/** Expression Statements 
  * Expressions are phrases.
  * Statements are sentences or commands.
  * Expressions are evaluated to produce a value, but statements are executed to make something happen.
  * 
  *
*/

let log = console.log

let arr = ['a', 'b', 'c', 'd', 'e', 'f']
log(arr.slice(2))
log(arr.slice(2, 4))
log(arr.slice(-2))

let letters = ['ifa', 'esu', 'sango', 'osanyin']

let combo = arr.concat(letters)

log(combo)

let joined_combo = combo.join('-')
log(joined_combo)

// concat, join, slice, splice
// New Array Method

log(arr[0])
log(arr.at(0)) // does the same thing as bracket notation []
log(arr.at(-1, -3))

log(...arr)

log('osun'.at(-1))

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements)
{
  if (movement > 0)
  {
    log(`You deposited ${movement}`)
  }
  else
  {
    log(`You withdrew ${Math.abs(movement)}`)
  }
}

// forEach

// ForEach will call the callback function (high order function)
// It will loop over the array and at iteration it will call this function.
// 0: function(200)
// 1: function(450)
// 2: function(400)
// 3: function ....
  
movements.forEach(function(movement) // arg is element of array
{
  if (movement > 0)
  {
    log(`You deposited ${movement}`)
  }
  else
  {
    log(`You withdrew ${Math.abs(movement)}`)
  }
})

movements.forEach(function(movement, index, array)
{
  if (movement > 0)
  {
    log(`Movement ${index + 1}: You deposited ${movement}`)
  }
  else
  {
    
    log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`)
  }
});

for (const [i, movement] of movements.entries())
{
  if (movement > 0)
  {
    log(`Movement ${i + 1}: You deposited ${movement}`)
  }
  else
  {
    
    log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
  }
}

// Maps and Sets with forEach

const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'EUR'],
  ['GBP', 'Pound Sterling'],
])

currencies.forEach(function(value, key, map) 
{
  log(`${key}: ${value}`) 
})

// Pass an iterable to Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map)
{
  // Sets don't have keys.
  log(`${value}: ${value}`) 
})

// Control Statements
if (arr.at(1) === 'b')
{
  log("It is so!")
}


