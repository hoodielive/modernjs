let firstname = "Enilo"
let middlename = "Ajeifa"
let lastname = "Fayemi"

let log = console.log

if (firstname === "enilo" && middlename === "ajeifa" && lastname === "fam")
{
  log(`Your name is ${firstname}, ${middlename}, ${lastname}`)
}
else if (firstname === "Enilo" && middlename === "Ajeifa" && lastname === "Fayemi")
{
    
  log(`Hello ${firstname} ${middlename} ${lastname}`)
}
else
{
  log("I don't know who you are.")
}

// indexOf.
let str = 'charcoal'
log(str.indexOf('r'))

// Bit Shift
let bitref = 1 << 4
log(bitref)

// Slicing
let strslice = "Toluwalase"
log(strslice.slice(0, 4))

// Lowercase and Uppercase

let fname = "GabRieL"
log(fname.toUpperCase())
log(fname.toLowerCase())

function returnSomething(a)
{
  return a
}

log(returnSomething("Hello, I am a string."))


// Trimm, lowercase
// Note the trimm() only targets trailing and beginning whitespaces
let email_address = "sOmEEmail@        gmail.com".replace(/\s/g,'').toUpperCase()
log(email_address)

// slice and replace operation
let slicereplaceoperation = "biscuits".slice(3).replace('cuits', 'cuts')
log(slicereplaceoperation)

let array = ['', 1, 2, 3, 'dude']
log(typeof(array[0]))
log(typeof(array))

log(array.push('Hello!'))
for (let i = 0; i < array.length; i++)
{
  log(array)
}

log(array.pop())

for (let i = 0; i < array.length; i++)
{
  log(array)
}

let array_to_join = ["Obara", "Okanran", "Osa", "Ose"]

let array_joined = array.concat(array_to_join)
log(array_joined)


function returnx(x)
{
  return x * x
}

log(returnx(3))

function nameif(a, b)
{
  if (a === 3)
  {
    return a
  }
  else
  {
    return a - b
  }
}

log(nameif(4, 9))
