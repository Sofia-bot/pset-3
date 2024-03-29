const readlineSync = require("readline-sync");

const year = Number(readlineSync.question("\n\nEnter a year: "));

if (year < 0 || year > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
} else if (year % 1 != 0) {
    console.log("\nInvalid.");
} else if (year % 4 == 0 && year % 100 != 0) {
    console.log("\n" + year + " is a leap year.")
} else if (year % 400 == 0) {
    console.log("\n" + year + " is a leap year.")
} else {
    console.log("\n" + year + " is not a leap year.")
}
