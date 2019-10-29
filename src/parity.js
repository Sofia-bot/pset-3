const readlineSync = require("readline-sync");

let integer = Number(readlineSync.question("\nEnter an integer: "));

if (integer < Number.MIN_SAFE_INTEGER || integer > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.");
} else {
  integer %= 2;
  if (integer == 0) {
    console.log("\nEven.");
  }
  else {
    console.log("\nOdd.")
  }
}
