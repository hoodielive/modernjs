let log = console.log
let element = undefined;

const fire = ["ogbe", "irosun", "ogunda", "otura"]
const water = ["oyeku", "owonrin", "osa", "irete"]
const north = ["iwori", "obara", "ika", "ose"]
const south = ["idi", "okanran", "oturupon", "ofun"]

const odus = [...fire, ...water, ...north, ...south]

let OduEnumFire = {
  ogbe: "The road opener or open road.",
  irosun: "Divine potential. Look at what's before you.",
  ogunda: "The removal or remover of obstacles.",
  otura: "Freedom from worry and anxiety.",
}

let oduFire = OduEnumFire.ogunda;

if (oduFire === OduEnumFire.ogunda)
{
  log(`${oduFire}`)
}

fire.forEach(odu => {
  if (odu === "ogunda")
  {
    element = "fire" 
    log(`${odu} is in the East and is of the element ${element}.`)
  }
})

log('We will begin with the primary odu. What is the primary Odu?');
let answer = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("Please enter the primary odu.", value => {
  log(`The value of primary odu is ${value}`)
})

reader.close();
