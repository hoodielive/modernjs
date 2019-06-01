let user = {} 

let cluster = {
  name: 'Awotunde',
  handle: '@egunawo33', 
  location: 'Orun, Aye'
}

// get the results by destructing the invocation 
function getUser() {
  return {
    name: 'Awotunde',
    handle: '@egunawo33', 
    location: 'Orun, Aye'
  }
}

let { name, handle, location } = getUser(); 

function returnSelection( name, handle, location='Philly') {
  return {
    name,
    handle,
    location
  }
}

console.log(returnSelection(getUser().name, getUser().handle))

const odu = { 
  return {
    name, 
    incarnationOf,
    description
  }
}
