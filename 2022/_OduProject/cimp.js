function findMatchingElements(array, input) {
  // Create an empty result array
  let result = [];

  // Loop through the array
  for (let i = 0; i < array.length; i++) {
    // Check if the current element matches the input
    if (array[i] === input) {
      // If it does, add it to the result array
      result.push(array[i]);
    }
  }

  // Return the result array
  return result;
}

// Example usage:
let names = ["Alice", "Bob", "Charlie", "David"];
console.log(findMatchingElements(names, "Charlie")); // prints ["Charlie"]

const readline = require('readline-sync');

// Prompt the user for input
console.log("Enter your name: ");

// Read the user's input
let name = readline.prompt();

// Print the input back to the user
console.log("Your name is: " + name);

const readline = require('readline');

// Create a new readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question("Enter your name: ", (name) => {
  // Print the input back to the user
  console.log("Your name is: " + name);

  // Close the readline interface
  rl.close();
});

