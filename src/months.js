const readlineSync = require("readline-sync");

const thirtyOneDays = ["january", "march", "may", "july", "august", "october", "december", "jan", "mar", "jul", "aug", "oct", "dec"];
const thirtyDays = ["april", "june", "september", "november", "apr", "jun", "sep", "nov"];

let month = readlineSync.question("\nEnter a month: ");
month = month.toLowerCase();

if (thirtyOneDays.includes(month)) {
  console.log("\n31 days.");
}
else if (thirtyDays.includes(month)) {
  console.log("\n30 days.");
}
else if (month == "feb" || month == "february") {
  console.log("\n28 or 29 days.");
}
else {
  console.log("\nInvalid.");
}
