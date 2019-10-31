const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 100;

const grade = Number(readlineSync.question("\nEnter a grade: "));

if (Number.isNaN(grade)) {
    console.log("Invalid.");
} else if (grade < MIN || grade > MAX) {
    console.log("Invalid.");
} else if (grade <= 100 || grade >= 90) {
    console.log("You received an A.");
} else if (grade < 90 || grade >= 80) {
    console.log("You received a B.");
} else if (grade < 80 || grade >= 70) {
    console.log("You received a C.");
} else if (grade < 70 || grade >= 60) {
    console.log("You received a D.");
} else if (grade < 59) {
    console.log("You received an F.");
}
