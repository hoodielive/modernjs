let log = console.log


const odu_array = ['EjiOgbe', 'Oyeku Meji', 'Iwori Meji', 'Idi Meji'];


for (let element = 0; element < odu_array.length; element++)
{
  if (odu_array[element] === "Oyeku Meji")
  {
    
    log(`The odu is ${odu_array[element]} and it is a Odu that pertains to feminine energy.`);
  }
}

for (const element of odu_array)
{
  if (element === "Iwori Meji")
  {
    log(`${element} is present and it speaks about being lost in mind. `)
  }
}

odu_array.forEach(function(odu) 
{
  log(...odu);
});

for (const [element] of odu_array)
{
  if (element > element.length)
  {
    log(element)
  }
  else
  {
    log("Goodbye Asshole!")
  }
}
