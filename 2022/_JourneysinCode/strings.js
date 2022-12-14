// String methods.

let first_odu = "Ogbe";

// Method (class)
console.log(first_odu.length)
console.log(first_odu[2]);

let second_odu = "                Oyeku                "
console.log(second_odu);
console.log(second_odu.length)

console.log(second_odu.trim())

second_odu = second_odu.trim()
console.log(second_odu.length)


// indexOf
let third_odu = "Iwori"
console.log(third_odu.indexOf("ori"));


// slice

let fourth_odu = "Thisisodibutitissometimescalledidi"
console.log(fourth_odu.slice(0, 5))
console.log(fourth_odu.slice(5))

// replace
let sixth_odu = "irosun, is divine potential!"
console.log(sixth_odu.replace('potential', 'possibilty'));


// upperCase / lowerCase
let seventh_odu = "Owonrin";
let eight_odu = "OBARA"

console.log(seventh_odu)
console.log(seventh_odu.toUpperCase());
console.log(eight_odu)
console.log(eight_odu.toLowerCase());
console.log(seventh_odu)

seventh_odu = "Owonrin".toUpperCase();
seventh_odu = seventh_odu.toUpperCase()

function helloToluwalase()
{
  console.log("Tell the brother hello!");
}

helloToluwalase()
console.log(typeof(length))
console.log(typeof(seventh_odu.length))
console.log(seventh_odu.length)


let userInput = "              larry@MarsHmAllow.com";
console.log(userInput)
userInput = userInput.trim().toLowerCase()
console.log(userInput)


let eighth_odu = "Okanran Meji"
const index = eighth_odu.indexOf('Meji')
console.log(index)

let ninth_odu = 'Ogunda!'.slice(2)
console.log(ninth_odu)

let junk = 'GARBAGE!'.slice(2).replace("B", "").toLowerCase();
console.log(junk)


// String Template Literals

let tenth_odu = "Osa Meji"

console.log(`The tenth Odu is ${tenth_odu}`);
console.log(`The sum of these two number is ${1 + 22}`)

let username = "Toluwalase ooo" 
console.log(`Welcome back ${username}, your odu for today is ${tenth_odu}`);
