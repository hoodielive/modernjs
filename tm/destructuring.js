let user = {} 

//user.name = 'Larry Cooldude'
//user.handle = '@coolhandle'
//user.location = 'Egungun, Onibode'
//
//let name = user.name; 
//let handle = user.handle; 

let cluster = {
  name: 'Awotunde',
  handle: '@egunawo33', 
  location: 'Orun, Aye'
}

// let { name, handle, location } = user; 

// get the results by destructing the invocation 
function getUser() {
  return {
    name: 'Awotunde',
    handle: '@egunawo33', 
    location: 'Orun, Aye'
  }
}

let { name, handle, location } = getUser(); 
// console.log(name, handle, location)

