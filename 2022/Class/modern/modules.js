'use strict';

let users = [
  {
    name: "Osa",
    email: "osa@odu.com",
  },
  {
    name: "Oyeku",
    email: "oyeku@odu.com",
  },
  {
    name: "Ogunda",
    email: "ogunda@odu.com",
  }
]

document.getElementById('output').innerHTML = users.name;

let currentUser = 2;

export { users, currentUser }
