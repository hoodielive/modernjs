let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(">> What is your name? ", function(answer) {
  console.log(`Hello Bruh ${answer}!`);
  rl.close();
  console.log("It is a pleasure to meet you.");
}) 
