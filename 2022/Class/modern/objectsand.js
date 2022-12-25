'use strict';

let fruit = ['Bananas', 'Apples', 'Strawberries'];

let fruits = {
  type: 'Banana',
  classification: 'Fruit'
}

const fruity = new Map();
fruity.set(1, 'Banana');
fruity.set(2, 'Apple');
fruity.set(3, 'Strawberry');


document.getElementById('output').innerHTML = fruity.get(2);

fruity.delete(2);

fruity.forEach(item => {
  document.getElementById('output').innerHTML += '<br>' + item;
})

fruity.set(4, {
  type: 'Orange',
  color: 'orange',
  flavor: 'orangey'
});

document.getElementById('output').innerHTML = fruity.get(4).flavor;


const users = new Map();

users.set({
  name: 'Osa',
  email: 'osa@obara.com'
}, function(user)
{
  document.getElementById('output2').innerHTML += `${user.name} (${user.email}) <br>`;
});

users.set({
  name: 'Oyeku',
  email: 'oyeku@okanran.com'
}, function(user)
{
  document.getElementById('output2').innerHTML += `${user.name} (${user.email}) <br>`;
});

users.set(userOyeku, function(user) {
  document.getElementById('output2').innerHTML += `${user.name} (${user.email}) <br>`;
})

users.forEach((value, key) => {
  value(key);
})

let userOyekuExists = users.has({
  name: 'Oyeku',
  email: 'oyeku@okanran.com'
});

log('userOyekuExists', userOyekuExists);


const knobs = new Set();

knobs.add('Banana');
knobs.add('Apppppple');

knobs.forEach(value => {
  document.getElementById('output3').innerHTML += '<br>' + value;
})

