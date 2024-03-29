let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

let log = console.log

const realArray = Array.from(arrayLike)

realArray.forEach(
  value => {
    log("howdy");
  }
)

let oh = Object.values(arrayLike);

log(oh);

let oh2 = Object
  .keys(arrayLike)
  .map((key) => arrayLike[key]);

log(oh2)


let prototype_array = Array.prototype.slice.call(arrayLike);
let prototype_array_2nd = [].slice.call(arrayLike); // shorter version

log(prototype_array.indexOf('a'));


function Cat(name) {
  this.name = name;
  this.sound = "Meow";
}

let cat = new Cat("Tom");
log(cat.sound);

Cat.prototype.speak = function() {
  log(this.sound);
}

log(Cat.prototype.speak)

let array = ['Ogbe', 'Oyeku', 'Iwori', 'Odi']


for (const element in array)
{
  log(array[element]);
}

const arrayObj = [0, 1, 'Odu'];

for (let element of arrayObj)
{
  log(element)
}

const names = ['bob', 'alejandro', 'zandra', 'anna','bob'];
const uniqueNames = new Set(names);
for (let name of uniqueNames)
{
  log(name)
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
  log(key + ' is mapped to ' + value)
}

const someObject = { name: 'Mike' }
for (let key of Object.keys(someObject))
{
  log(`${key}: ${someObject[key]}`);
}

let object = {
  "a": "foo",
  "b": "bar",
  "c": "baz",
};

Object.defineProperty(object, 'a', {
  enumerable: false,
});

for (var key in object)
{
  if (object.hasOwnProperty(key))
  {
    log(`object. ${key}, ${object[key]}`)
  }
}
 

for (let i = 0; i < 5; i++)
{
  nextLoop2Iteration:
  for (let j = 0; j < 5; j++)
  {
    if (i == j) break nextLoop2Iteration;
    log(i, j);
  }
}
