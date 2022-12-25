'use strict';


let fruit = ['Banana', 'Strawberry', 'Orange', 'Apple', 'Grape', 'Plum'];

let fruitsthatContainE = [];


fruit.forEach(value => {
  if (value.includes("e")) {
    fruitsthatContainE.push(value);
  }
});

document.getElementById('output').innerHTML = fruitsthatContainE.join(', ');

// Filter.
  
let fruitsThatContainE2 = fruit.filter(f => f.includes('e'));
document.getElementById('output2').innerHTML = fruitsthatContainE.join(', ');

// Reduce.
  
let users = [
  {
    name: "Osa",
    email: "osa@odu.com",
    stars: 5,
  },
  {
    name: "Oyeku",
    email: "oyeku@odu.com",
    stars: 5,
  },
  {
    name: "Ogunda",
    email: "ogunda@odu.com",
    stars: 5,
  },
]

let totalStars = users.reduce((stars, user) => stars += user.stars, 0);
document.getElementById('output3').innerHTML += '<br> Total Stars: ' + totalStars;

// Map.

let userEmails = users.map(user => user.email);
document.getElementById('output3').innerHTML += '<br> Emails: ' + userEmails.join(', ');
