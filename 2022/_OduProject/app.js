let log = console.log

const fire = ["ogbe", "irosun", "ogunda", "otura"]
const water = ["oyeku", "owonrin", "osa", "irete"]
const north = ["iwori", "obara", "ika", "ose"]
const south = ["idi", "okanran", "oturupon", "ofun"]

const odus = [...fire, ...water, ...north, ...south]
// log(odus)
// if any element from any array is found in any array register its element

// for (const element in fire || water || north || south)
// {
//   if (element)
//   {
//     log("The element is fire or water.")
//   }
// }

//fire.forEach(function(odu) 
 //{
  // if (odu === "ogbe")
  // {
  //   log(`Odu ${fire.at(0)} is an open road.`)   
  // }
  // else if (odu === "irosun")
  // {
  //   log(`Odu ${fire[1]} is divine and/or spiritual potential.`)   
  // }
  // else if (odu === "ogunda")
  // {
  //   log(`Odu ${fire[2]} is the removal or remover of obstacles.`)   
  // }
  // else if (odu === "otura")
  // {
  //   log(`Odu ${fire[3]} is the freedom from worry and anxiety.`)   
  // }
  // else 
  // {
  //   log("Odu unknown.")
  // }
//})

function determineOdu(odu)
{
  switch(odu)
  {
    case fire.at(0):
      return (`Odu ${fire.at(0)} is an open road.`)   
      break;
    case fire.at(1):
      return (`Odu ${fire[1]} is divine and/or spiritual potential.`)   
      break;
    case fire.at(2):
      return (`Odu ${fire[2]} is the removal or remover of obstacles.`)   
      break;
    case fire.at(3):
      return (`Odu ${fire[3]} is the freedom from worry and anxiety.`)   
      break;
  }
}

determineOdu(...fire)

let OduEnumFire = {
  ogbe: "The road opener or open road.",
  irosun: "Divine potential. Look at what's before you.",
  ogunda: "The removal or remover of obstacles.",
  otura: "Freedom from worry and anxiety.",
}

let oduFire = OduEnumFire.ogunda;

if (oduFire == OduEnumFire.ogunda)
{
  log(`${oduFire}, is in fact the odu.`)
  // let searchForOdu = OduEnumFire;
  //
  // for (let oduvar in searchForOdu)
  // {
  //   if (searchForOdu[oduvar] == searchForOdu.ogbe)
  //   {
  //     log("Ok.")
  //   }
  // }
  
}
