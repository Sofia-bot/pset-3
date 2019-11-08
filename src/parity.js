const readlineSync = require("readline-sync");

let integer = Number(readlineSync.question("\n\nEnter an integer: "));

/*
 * Handle non-numeric input and flag it as invalid.
 *    - i.e., Enter abc.
 */

if (integer < Number.MIN_SAFE_INTEGER || integer > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
} else if (Number.isNaN(integer)) {
    console.log("\nInvalid.")
} else if (integer % 1 != 0) {
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
