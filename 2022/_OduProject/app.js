let log = console.log

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
