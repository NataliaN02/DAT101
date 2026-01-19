"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let up = "", down = "";
for (let i = 1; i <= 10; i++) up += i + " ";
for (let i = 10; i >= 1; i--) down += i + " ";
printOut(up);
printOut(down);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 14;     
let guess = 0;
while (guess !== number) {
  guess = Math.floor(Math.random() * 60) + 1;
}
printOut(`Guessed number: ${guess}`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numberTwo = 457382;  
let guessTwo = 0;
let tries = 0;
let startTime = Date.now(); 
while (guessTwo !== numberTwo) {
  guessTwo = Math.floor(Math.random() * 1000000) + 1;
  tries++;
}
let endTime = Date.now(); 
let elapsedTime = endTime - startTime;
printOut(`Guessed number: ${guessTwo}`);
printOut(`Number of guesses: ${tries}`);
printOut(`Time taken (ms): ${elapsedTime}`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let num = 2; num < 200; num++) {
    let divisor = 2;
    let isPrime = true;
    while (divisor < num) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }
    if (isPrime) {
        printOut(num);
    }
}
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
    let rowText = ""; 

    for (let col = 1; col <= 9; col++) {
        rowText += `K${col}R${row} `;
    }
    printOut(rowText); 
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let score1 = Math.floor(Math.random() * 236) + 1;
let score2 = Math.floor(Math.random() * 236) + 1;
let score3 = Math.floor(Math.random() * 236) + 1;
let score4 = Math.floor(Math.random() * 236) + 1;
let score5 = Math.floor(Math.random() * 236) + 1;
let grade1, grade2, grade3, grade4, grade5;
if ((score1 / 236) * 100 >= 89) grade1 = "A";
else if ((score1 / 236) * 100 >= 77) grade1 = "B";
else if ((score1 / 236) * 100 >= 65) grade1 = "C";
else if ((score1 / 236) * 100 >= 53) grade1 = "D";
else if ((score1 / 236) * 100 >= 41) grade1 = "E";
else grade1 = "F";
if ((score2 / 236) * 100 >= 89) grade2 = "A";
else if ((score2 / 236) * 100 >= 77) grade2 = "B";
else if ((score2 / 236) * 100 >= 65) grade2 = "C";
else if ((score2 / 236) * 100 >= 53) grade2 = "D";
else if ((score2 / 236) * 100 >= 41) grade2 = "E";
else grade2 = "F";
if ((score3 / 236) * 100 >= 89) grade3 = "A";
else if ((score3 / 236) * 100 >= 77) grade3 = "B";
else if ((score3 / 236) * 100 >= 65) grade3 = "C";
else if ((score3 / 236) * 100 >= 53) grade3 = "D";
else if ((score3 / 236) * 100 >= 41) grade3 = "E";
else grade3 = "F";
if ((score4 / 236) * 100 >= 89) grade4 = "A";
else if ((score4 / 236) * 100 >= 77) grade4 = "B";
else if ((score4 / 236) * 100 >= 65) grade4 = "C";
else if ((score4 / 236) * 100 >= 53) grade4 = "D";
else if ((score4 / 236) * 100 >= 41) grade4 = "E";
else grade4 = "F";
if ((score5 / 236) * 100 >= 89) grade5 = "A";
else if ((score5 / 236) * 100 >= 77) grade5 = "B";
else if ((score5 / 236) * 100 >= 65) grade5 = "C";
else if ((score5 / 236) * 100 >= 53) grade5 = "D";
else if ((score5 / 236) * 100 >= 41) grade5 = "E";
else grade5 = "F";
let printed = 0;
let maxValue = 6; 
do {
    if (grade1 === "A" && maxValue === 6 || grade1 === "B" && maxValue === 5 ||
        grade1 === "C" && maxValue === 4 || grade1 === "D" && maxValue === 3 ||
        grade1 === "E" && maxValue === 2 || grade1 === "F" && maxValue === 1) {
        printOut(grade1); grade1 = ""; printed++;
    }
    if (grade2 === "A" && maxValue === 6 || grade2 === "B" && maxValue === 5 ||
        grade2 === "C" && maxValue === 4 || grade2 === "D" && maxValue === 3 ||
        grade2 === "E" && maxValue === 2 || grade2 === "F" && maxValue === 1) {
        printOut(grade2); grade2 = ""; printed++;
    }
    if (grade3 === "A" && maxValue === 6 || grade3 === "B" && maxValue === 5 ||
        grade3 === "C" && maxValue === 4 || grade3 === "D" && maxValue === 3 ||
        grade3 === "E" && maxValue === 2 || grade3 === "F" && maxValue === 1) {
        printOut(grade3); grade3 = ""; printed++;
    }
    if (grade4 === "A" && maxValue === 6 || grade4 === "B" && maxValue === 5 ||
        grade4 === "C" && maxValue === 4 || grade4 === "D" && maxValue === 3 ||
        grade4 === "E" && maxValue === 2 || grade4 === "F" && maxValue === 1) {
        printOut(grade4); grade4 = ""; printed++;
    }
    if (grade5 === "A" && maxValue === 6 || grade5 === "B" && maxValue === 5 ||
        grade5 === "C" && maxValue === 4 || grade5 === "D" && maxValue === 3 ||
        grade5 === "E" && maxValue === 2 || grade5 === "F" && maxValue === 1) {
        printOut(grade5); grade5 = ""; printed++;
    }
    maxValue--; 
} while (printed < 5);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let maxThrows = 1000000; 

// --- Full straight ---
let throwsFullStraight = 0;
let dice, counts;
do {
    throwsFullStraight++;
    if (throwsFullStraight > maxThrows) break; 
    dice = [];
    counts = [0,0,0,0,0,0,0];
    for (let i = 0; i < 6; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        dice.push(roll);
        counts[roll]++;
    }
} while (!(counts[1]===1 && counts[2]===1 && counts[3]===1 &&
           counts[4]===1 && counts[5]===1 && counts[6]===1));
if (throwsFullStraight > maxThrows) printOut(`Full straight: more than ${maxThrows} throws`);
else printOut(`Full straight took ${throwsFullStraight} throws`);

// --- 3 pairs ---
let throwsThreePairs = 0;
do {
    throwsThreePairs++;
    if (throwsThreePairs > maxThrows) break;
    dice = [];
    counts = [0,0,0,0,0,0,0];
    for (let i = 0; i < 6; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        dice.push(roll);
        counts[roll]++;
    }
    let pairs = 0;
    for (let i = 1; i <= 6; i++) {
        if (counts[i] === 2) pairs++;
    }
} while (pairs !== 3);
if (throwsThreePairs > maxThrows) printOut(`3 pairs: more than ${maxThrows} throws`);
else printOut(`3 pairs took ${throwsThreePairs} throws`);

// --- Tower (2 + 4) ---
let throwsTower = 0;
do {
    throwsTower++;
    if (throwsTower > maxThrows) break;
    dice = [];
    counts = [0,0,0,0,0,0,0];
    for (let i = 0; i < 6; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        dice.push(roll);
        counts[roll]++;
    }
    let hasTwo = false;
    let hasFour = false;
    for (let i = 1; i <= 6; i++) {
        if (counts[i] === 2) hasTwo = true;
        if (counts[i] === 4) hasFour = true;
    }
} while (!(hasTwo && hasFour));
if (throwsTower > maxThrows) printOut(`Tower: more than ${maxThrows} throws`);
else printOut(`Tower took ${throwsTower} throws`);

// --- Yahtzee ---
let throwsYahtzee = 0;
do {
    throwsYahtzee++;
    if (throwsYahtzee > maxThrows) break;
    dice = [];
    for (let i = 0; i < 6; i++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
} while (!(dice[0] === dice[1] && dice[1] === dice[2] && 
           dice[2] === dice[3] && dice[3] === dice[4] && dice[4] === dice[5]));
if (throwsYahtzee > maxThrows) printOut(`Yahtzee: more than ${maxThrows} throws`);
else printOut(`Yahtzee took ${throwsYahtzee} throws`);
printOut(newLine);
