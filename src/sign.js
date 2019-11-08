const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\n\nEnter a number: "));

/*
 * Handle non-numeric input, which should be invalid.
 *   - i.e., Enter abc.
 */

if (number < Number.MIN_SAFE_INTEGER || number > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
} else if (Number.isNaN(number)) {
    console.log("\nInvalid.");
} else if (number > 0) {
    console.log("\nPositive.");
} else if (number == 0) {
    console.log("\nZero.");
} else {
    console.log("\nNegative.");
}
