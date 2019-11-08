const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

/*
 * Check your threshold values.
 *    - i.e., Enter 32 and f. Your code outputs Liquid, but it should output Solid.
 *    - i.e., Enter 212 and f. Your code outputs Liquid, but it should output Gas.
 *    - i.e., Similar issues with other temperature scales.
 */

let temperature = readlineSync.question("\n\nEnter a temperature: ");
const scale = readlineSync.question("Enter a scale: ");
const liquidLower = 0;
const liquidUpper = 100;

if (scale.toUpperCase() == "K") {
    temperature -= 273.15;
} else if (scale.toUpperCase() == "F") {
    temperature -= 32;
    temperature *= 5/9;
} else if (scale.toUpperCase() == "C") {
    temperature = temperature;
} else {
  console.log("\nInvalid.");
  return;
}

if (temperature < MIN || temperature > MAX) {
    console.log("\nInvalid.");
} else if (temperature <= liquidLower) {
    console.log("\nSolid.");
} else if (temperature > liquidLower && temperature < liquidUpper) {
    console.log("\nLiquid.");
} else if (temperature >= liquidUpper) {
    console.log("\nGas.");
} else {
    console.log("\nInvalid.");
}
