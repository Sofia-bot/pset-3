const readlineSync = require("readline-sync");

const grade = readlineSync.question("\nEnter a letter grade: ");
let gpa = 0;

if (grade.includes('+')) {
  gpa += 0.33;
} else if (grade.includes('-')) {
  gpa -= 0.33;
}

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
