let log = console.log

const fire = ["ogbe", "irosun", "ogunda", "otura"]
const water = ["oyeku", "owonrin", "osa", "irete"]
const north = ["iwori", "obara", "ika", "ose"]
const south = ["idi", "okanran", "oturupon", "ofun"]

const odus = [...fire, ...water, ...north, ...south]
log(odus)
// if any element from any array is found in any array register its element

// for (const element in fire || water || north || south)
// {
//   if (element)
//   {
//     log("The element is fire or water.")
//   }
// }

fire.forEach(function(odu) {
  if (odu === "ogbe")
  {
    log(`Odu ${fire.at(0)} is an open road.`)   
  }
  else if (odu === "irosun")
  {
    log(`Odu ${fire[1]} is divine and/or spiritual potential.`)   
  }
  else if (odu === "ogunda")
  {
    log(`Odu ${fire[2]} is the removal or remover of obstacles.`)   
  }
  else if (odu === "otura")
  {
    log(`Odu ${fire[3]} is the freedom from worry and anxiety.`)   
  }
  else 
  {
    log("Odu unknown.")
  }
})

