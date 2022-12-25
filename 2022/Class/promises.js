'use strict';

let myPromise = new Promise((resolve, reject) => {
  // call an api 
  let user = {
    name: "Justin",
    email: "justin@example.com"
  }
  
  setTimeout(() => {
   resolve(user);
    // reject("Sorry, could not retrieve user.")

  }, 2000);

});

const getAdditionalUserData = user => 
{
  document.getElementById('output').innerHTML = `${user.name} (${user.email})`;
  
  return new Promise((resolve, reject) => 
  {
    // calling another api to get more user data 
    
      user.favoriteColor = 'Blue';
      user.currrentDrink = 'La Croix';
   
    setTimeout(() => {
      resolve(user)
    }, 2000);
  });
}

myPromise.then(getAdditionalUserData)
  .then((user) => {
    document.getElementById('output').innerHTML = `${user.name} (${user.email}) - ${user.currrentDrink}`;
  })
  .catch((error) => {
  
    document.getElementById('output').innerHTML = error;
});
 
document.getElementById('output').innerHTML = "Look ma, no blocking!"
