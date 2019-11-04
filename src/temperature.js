const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let temperature = readlineSync.question("\nEnter a temperature: ");
const scale = readlineSync.question("Enter a scale: ");
const liquidLower = 0;
const liquidUpper = 100;

if (temperature < MIN || temperature > MAX) {
  console.log("\nInvalid.");
  return;
}

if (scale.toUpperCase() == "K") {
  temperature -= 273.15;
} else if (scale.toUpperCase() == "F") {
  temperature -= 32;
  temperature *= 5/9;
}

if (temperature < liquidLower) {
  console.log("\nSolid.");
} else if (temperature >= liquidLower) {
  console.log("\nLiquid.");
} else if (temperature > liquidUpper) {
  console.log("\nGas.");
}
