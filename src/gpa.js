const readlineSync = require("readline-sync");

const grade = readlineSync.question("\n\nEnter a letter grade: ");
const gradeRegEx = /^[-+ABCDF]+$/;
let gpa = 0;

if (grade.indexOf('+') == 1) {
  gpa += 0.33;
} else if (grade.indexOf('-') == 1) {
  gpa -= 0.33;
}

/*
 * A and A+ should be worth the same (4.00).
 *
 * There is no such thing as an F+ or F-. Account for this.
 *
 * Account for invalid input that contains a valid substring.
 *   - i.e., B+-123 should be invalid.
 */
if (!gradeRegEx.test(grade)) {
  console.log("\nInvalid.");
  return;
} else if (grade.indexOf('A') == 0 && !grade.includes('-')) {
    gpa = 4.00;
} else if (grade == 'A-'){
    gpa += 4.00;
} else if (grade.indexOf('B') == 0) {
    gpa += 3.00;
} else if (grade.indexOf('C') == 0) {
    gpa += 2.00;
} else if (grade.indexOf('D') == 0) {
    gpa += 1.00;
} else if (grade == 'F') {
    gpa = 0.00;
} else {
    console.log ("\nInvalid.");
    return;
}
gpa = Number(gpa).toFixed(2);
console.log ("\nYour GPA is " + gpa);
