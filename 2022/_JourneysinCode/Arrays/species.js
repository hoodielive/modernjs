let keys = ['ogbe oyeku', 'oyeku sa', 'obara oyeku', 'abla yeku'];

let log = console.log

const iterator_1 = keys.entries();
log(iterator_1.next().value)
log(iterator_1.next().value)
log(iterator_1.next().value)

for ([index, element] of keys.entries())
{
  log(index, element)
}

let arrayEntries = keys.entries()
for (const element of arrayEntries)
{
  log(element)
}

for (const element of [, "a"].entries())
{
  log(element)
}


const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
}

for (const entry of Array.prototype.entries.call(arrayLike))
{
  log(entry)
}

const isBelowThreshold = (currentValue) => currentValue < 40

const array1 = [1, 30, 39, 29, 50, 13]
log(array1.every(isBelowThreshold))
