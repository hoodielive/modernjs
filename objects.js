let day1 = {
  squirrel: false, 
  events: ["work", "touched tree", "pizza", "running"]
}

console.log(day1.squirrel)
console.log(day1.wolf) // undefined
console.log(day1.wolf) // false

let descriptions = { 
  work: "went to work",
  "touched tree": "Touched a tree"
}

console.log(descriptions.work)

const forEachObject = (obj,fn) => {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      // call fn with key and value as its argument 
      fn(property, obj[property])
    }
  }
}

let object = {a:1, b:2}
forEachObject(object, (k,v) => console.log(k + ":" + v))

