const map = []

function customThing(el) {
  const mapped = findByElement(el)
  if (mapped) {
    return mapped
  }
  const api = {
    // custom api
  }

  const entry = storeInMap(el, api)
  api.destroy = destroy.bind(null, entry)
  return api
}

function storeInMap(el, api) {
  const entry = [ el, api]
  map.push(entry)
  return entry
}

function findByElement(query) {
  for (const { el, api } of map) {
    if (el === query) {
      return api
    }
  }
}

function destroy(entry) {
  const index = map.indexOf(entry)
  map.splice(index, 1)
}
