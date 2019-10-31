const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("Invalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid.");
} else {
    const quarters = Math.floor(amount / 0.25);
    let remainder = amount % 0.25;
    const dimes = Math.floor(remainder / 0.1);
    remainder %= 0.1;
    const nickels = Math.floor(remainder / 0.05);
    remainder %= 0.05;
    const pennies = Math.ceil(remainder / 0.01);

    console.log("\n" + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies + " pennies.");
}
