const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("Invalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid.");
} else {
    let quarters = Math.floor(amount / 0.25);
    let remainder = amount % 0.25;
    let dimes = Math.floor(remainder / 0.1);
    remainder %= 0.1;
    let nickels = Math.floor(remainder / 0.05);
    remainder %= 0.05;
    let pennies = Math.ceil(remainder / 0.01);

    console.log(quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, " + pennies + " pennies.");
}
