"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeUpTime = 8;
if (wakeUpTime == 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime == 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 1;
if (number < 0) {
  printOut("Negative");
} else if (number > 0) {
  printOut("Positive");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let randomInt = Math.floor(Math.random() * 8) + 1;
printOut(`Uploaded image size: ${randomInt} MP`);
let sizeLimit = 4;
if (randomInt >= sizeLimit) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (randomInt >= 6) {
    printOut("Image is too large");
} else if (randomInt >= sizeLimit) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut(monthName);
if (monthName.includes("r")) {
    printOut("You must take vitamin D");
} else {
    printOut("You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (
  monthName === "January" ||
  monthName === "March" ||
  monthName === "May" ||
  monthName === "July" ||
  monthName === "August" ||
  monthName === "October" ||
  monthName === "December"
) {
  printOut(`Days in the month: ${31}`);
} else if (
  monthName === "April" ||
  monthName === "June" ||
  monthName === "September" ||
  monthName === "November"
) {
  printOut(`Days in the month: ${30}`);
} else {
  printOut(`Days in the month: ${28}`);
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "April") {
    printOut("The gallery is open in temporary premises next door.");
} else if (monthName === "March" || monthName === "May") {
    printOut("The gallery is closed.");
} else {
    printOut("The gallery is open.");
}

printOut(newLine);
