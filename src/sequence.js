const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter three numbers:\n"));

if (number < Number.MIN_SAFE_INTEGER || number > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.");
}
