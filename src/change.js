const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const quarterValue = 0.25;
const dimeValue = 0.1;
const nickelValue = 0.05;
const pennyValue = 0.01;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

/*
 * Make sure there's a line break between the prompt and Invalid.
 *    - i.e., Enter -1 when prompted.
 *
 * Handle cases where a user enters a value with more than two decimals.
 *    - i.e., Enter 0.987654321. This should be invalid.
 *
 * Save coin denominations as constants (i.e., 0.25, 0.1, etc.).
 */

if (Number.isNaN(amount)) {
    console.log("\nInvalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.");
} else {
    const quarters = Math.floor(amount / quarterValue);
    let remainder = amount % quarterValue;
    const dimes = Math.floor(remainder / dimeValue);
    remainder %= dimeValue;
    const nickels = Math.floor(remainder / nickelValue);
    remainder %= nickelValue;
    const pennies = Math.round(remainder / pennyValue);

    console.log("\n" + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies + " pennies.");
}
