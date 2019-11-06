const readlineSync = require("readline-sync");

const grade = readlineSync.question("\nEnter a letter grade: ");
let gpa = 0;

if (grade.includes('+')) {
  gpa += 0.33;
} else if (grade.includes('-')) {
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

if (grade.includes('A')) {
    gpa += 4.00;
    console.log ("\nYour GPA is " + gpa);
} else if (grade.includes('B')) {
    gpa += 3.00;
    console.log ("\nYour GPA is " + gpa);
} else if (grade.includes('C')) {
    gpa += 2.00;
    console.log ("\nYour GPA is " + gpa);
} else if (grade.includes('D')) {
    gpa += 1.00;
    console.log ("\nYour GPA is " + gpa);
} else if (grade.includes('F')) {
    gpa += 0.00;
    console.log ("\nYour GPA is " + gpa);
} else {
    console.log ("\nInvalid.");
}
