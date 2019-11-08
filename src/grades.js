const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 100;

const gradeA = 90;
const gradeB = 80;
const gradeC = 70;
const gradeD = 60;

const grade = Number(readlineSync.question("\n\nEnter a grade: "));

/*
 * Put a line break between prompt and output.
 */

if (Number.isNaN(grade)) {
    console.log("\nInvalid.");
} else if (grade < MIN || grade > MAX) {
    console.log("\nInvalid.");
} else if (grade <= MAX && grade >= gradeA) {
    console.log("\nYou received an A.");
} else if (grade < gradeA && grade >= gradeB) {
    console.log("\nYou received a B.");
} else if (grade < gradeB && grade >= gradeC) {
    console.log("\nYou received a C.");
} else if (grade < gradeC && grade >= gradeD) {
    console.log("\nYou received a D.");
} else if (grade < gradeD) {
    console.log("\nYou received an F.");
}
