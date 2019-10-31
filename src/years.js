const readlineSync = require("readline-sync");

const year = Number(readlineSync.question("\nEnter a year: "));

if (year < 0 || year > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
} else if (year % 4 == 0) {
    console.log("\n" + year + " is a leap year.")
} else {
  console.log("\n" + year + " is not a leap year.")
}
