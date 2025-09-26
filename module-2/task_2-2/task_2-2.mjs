"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs"; 

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let originalExpressionResult = 2 + 3 * 2 - 4 * 6;
let modifiedExpressionResult = 2 + 3 * (2 - 4) * 6; 
printOut("2 + 3 * 2 - 4 * 6 =", originalExpressionResult);
printOur("2 + 3 * (2 - 4) * 6 =", modifiedExpressionResult);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let metersToInches = 25 * 1000 / 25.4;
let centimetersToInches = 34 * 10 / 25.4;
printOut("25 meteres is", metersToInches.toFixed(2), "inches");
printOut("34 centimeters is", centimetersToInches.toFixed(2), "inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let daysToMinutes = 3 * 24 * 60; 
let hoursToMinutes = 12 * 60;
let minutes = 14;
let secondsToMinutes = 45 / 60;
let totalMinutes = daysToMinutes + hoursToMinutes + minutes + secondsToMinutes;
printOut("3 days, 12 hours, 14 minutes and 45 seconds is approximately ", totalMinutes, "minutes.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let minutesToDays = (6322.52 / 60 / 24).toFixed(0);
let remainingHours = ((6322.52 / 60) % 24).toFixed(0);
let remainingMinutes = (6322.52 % 60).toFixed(0);
printOut("6322.52 minutes is approximately ", minutesToDays, "days,", remainingHours, "hours and", remainingMinutes, "minutes.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let nokExchangeRate = 8.6 / 76;
let usdExchangeRate = 76 / 8.6;
let nokToUsd = (54 * nokExchangeRate).toFixed(2);
let udsToNok = (54 * usdExchangeRate).toFixed(2);
printOut("54 NOK is approximately", nokToUsd, "USD");
printOut("54 USD is approximately", udsToNok, "NOK");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let quote = "There is much between heaven and earth that we do not understand.";
printOut("The length of the quote is:", quote.length, "On the 19th position is the character:", quote.charAt(19), "The text from 35th position and 8 characters forward is:", quote.slice(35, 44), "The starting position of the word \"earth\" is:", quote.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let isGreater = 5 > 3;
let isGreaterOrEqual = 7 >= 7;
let isGreater2 = "a" > "b";
let isLess = "1" < "a";
let isLess2 = "2500" < "abcd";
let isNotEqual = "arne" != "thomas";
let isTrue = (2 == 5) == true;
let isFalse = ("abcd" > "bcd") == false;
printOut("Values for the expressions are as follows:", isGreater, isGreaterOrEqual, isGreater2, isLess, isLess2, isNotEqual, isTrue, isFalse);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let textToNumber = Number("254");
let textToNumber2 = Number("57.23");
let textToNumber3 = parseInt("25 kroner");
printOut("Text converted to numbers:", textToNumber, textToNumber2, textToNumber3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1
printOut("A random number between 1 and 360:", r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let weeks = Math.floor(131 / 7);
let remainingDays = (131 % 7);
printOut("131 days is", weeks, "weeks and", remainingDays, "days.");
printOut(newLine);