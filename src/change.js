const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const quarterValue = 0.25;
const dimeValue = 0.1;
const nickelValue = 0.05;
const pennyValue = 0.01;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

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
