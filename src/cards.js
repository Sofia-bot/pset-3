let readlineSync = require("readline-sync");

let playingCard = readlineSync.question("\n\nEnter a playing card: ");
playingCard = playingCard.toUpperCase();
let suit;
let rank;

if (playingCard.length > 2) {
  console.log("\nInvalid.");
  return;
}

if (playingCard.indexOf("2") == 0) {
  rank = 'Two';
} else if (playingCard.indexOf("3") == 0) {
  rank = 'Three';
} else if (playingCard.indexOf("3") == 0) {
  rank = 'Three';
} else if (playingCard.indexOf("4") == 0) {
  rank = 'Four';
} else if (playingCard.indexOf("5") == 0) {
  rank = 'Five';
} else if (playingCard.indexOf("6") == 0) {
  rank = 'Six';
} else if (playingCard.indexOf("7") == 0) {
  rank = 'Seven';
} else if (playingCard.indexOf("8") == 0) {
  rank = 'Eight';
} else if (playingCard.indexOf("9") == 0) {
  rank = 'Nine';
} else if (playingCard.indexOf("T") == 0) {
  rank = 'Ten';
} else if (playingCard.indexOf("J") == 0) {
  rank = 'Jack';
} else if (playingCard.indexOf("Q") == 0) {
  rank = 'Queen';
} else if (playingCard.indexOf("K") == 0) {
  rank = 'King';
} else if (playingCard.indexOf("A") == 0) {
  rank = 'Ace';
} else {
  console.log("\nInvalid.");
  return;
}

if (playingCard.indexOf("C") == 1) {
  suit = 'Clubs';
} else if (playingCard.indexOf("D") == 1) {
  suit = 'Diamonds';
} else if (playingCard.indexOf("H") == 1) {
  suit = 'Hearts';
} else if (playingCard.indexOf("S") == 1) {
  suit = 'Spades';
} else {
  console.log("\nInvalid.");
  return;
}



console.log("\n" + rank + " of " + suit + ".");
