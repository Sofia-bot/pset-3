const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("\nEnter three numbers.");
const number1 = Number(readlineSync.question("\n"));
const number2 = Number(readlineSync.question());
const number3 = Number(readlineSync.question());

if (number1 < MIN || number1 > MAX || number2 < MIN || number2 > MAX || number3 < MIN || number3 > MAX) {
    console.log("\nInvalid.");
} else if (Number.isNaN(number1, number2, number3)) {
    console.log("\nInvalid.")
} else {
  if (number1 < number2 && number2 < number3){
    console.log("\nStrictly increasing.");
  } else if (number1 > number2 && number2 > number3) {
      console.log("\nStrictly decreasing.");
  } else if (number1 == number2 && number1 == number3 && number2 == number3) {
      console.log("\nEqual.");
  } else if (number1 == number2 || number2 == number3) {
      if (number1 < number3) {
        console.log("\nIncreasing.");
      } else if (number1 > number3) {
          console.log("\nDecreasing.");
      }
    } else {
      console.log("\nUnordered.");
    }
}
