(function() {
  "use strict";

  /* Start code */
  function greetMe(yourName)
  {
    console.log("Hello " + yourName);
  }

  greetMe('World');
})();

function myFunc(theObject)
{
  return theObject.make;
}

var mycar = { make: 'Honda', mode1: 'Accord1', year: 1998 };

var x, y;

x = mycar.make;

console.log(myFunc(mycar));

y = mycar.make;

console.log(myFunc(mycar));


const square = function(number) { return number * number } ;
var co = square(4);

console.log(co);

const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };
console.log(factorial(3));
