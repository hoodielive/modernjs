let log = console.log

const array = [1, 2, 3, 'alright then', 3.2]

for (let i of array)
{
  log(i)
}

const map = new Map()
  .set('abc', 1)
  .set('def', 2)

for (const iteration of map)
{
  log(iteration)
}

for (const [key, value] of map)
{
  log(`${key} is aligned with ${value}`)
}


let someObject = { first: "EjiOgbe" }

for (let key of Object.keys(someObject))
{
  log(`${key}: someObject[${key}]`)
}


let object = {"a": "foo", "b": "bar", "c": "baz"}

Object.defineProperty(object, 'a', {
  enumerable: false,
});

for (let key in object)
{
  if (object.hasOwnProperty(key))
  {
    log(`object. ${key}, ${object[key]}`)
  }
}


let x = 101
do {
  log(x)
} while (x < 100)

let p = 0;
while (p < 3)
{
  if (p === 1)
  {
    p = 2
    continue;
  }
  log(p)
  p++
}
