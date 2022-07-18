const oldFunction = function(name)
{
  return `hello ${name}`;
}

const arrowFunction = name => `hello ${name}`;


console.log(oldFunction);
console.log(arrowFunction);

const race = "100m dash";
const runners = [ 
  "Usain Bolt",
  "Justin Gatlin",
  "Asafa Powell"
]

const results = runners.map((runner, i) =>
  ({ name: runner, race, place: i + 1})
);

console.log(results);

function heal(a, b)
{
  return (a, b);
}

const wizard =
{
  name: "Merlin",
  health: 100,
  heal(num1, num2)
  {
    return (this.health += num1 + num2);
  }
}

console.log(wizard);
