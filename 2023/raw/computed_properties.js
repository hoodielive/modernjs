const log = console.log

let grocery = {
  id: 'bananas',
  name: 'Bananas',
  unit: 6,
  price: 10, 
  currency: 'USD'
}

let groceries = {
  [grocery.id]: grocery,
}

log(groceries);

log(groceries[grocery.id])


function getEnvelope(type, description)
{
  return {
    data: {},
    [type]: description
  }
}

getEnvelope.data = {
  girl: 'Love'
}
log(getEnvelope('Ajogun', 'Iku'), getEnvelope.data)