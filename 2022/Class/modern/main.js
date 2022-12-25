'use strict';
let log = console.log

let username = {
  name: "isoye",
  email: "isoye@ifa.com",
};

var username2 = {
  name: "osanyin",
  email: "osanyin@ifa.com",
};

let users = [
  {
    name: 'Doppleganger',
    email: 'mess@argue.com',
  },
  {
    name: 'Hylan',
    email: 'crystalbeach@jason.com',
    
  }
]

function init()
{
  document.getElementById('output').innerHTML =  `${username.name} (${username.email})`;
  
}

const init_02 = () => 
{ 
  document.getElementById('output2').innerHTML = `${username2.name} (${username2.email})`;
}

init();
init_02();

const nameString = () => `${username.name} (${username.email})`;

document.getElementById('output3').innerHTML = nameString();

let empty_user = [];

users.forEach(user => empty_user.push(user.name))

document.getElementById('output3').innerHTML = empty_user.join(', ');


document.getElementById('btn').addEventListener('click', function() 
{
  const getDetails = () => 
  {
    return `The button id is ${this.getAttribute('id')}`;
  }
  
    document.getElementById('output').innerHTML = getDetails();
})
