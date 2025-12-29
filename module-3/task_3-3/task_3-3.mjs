"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printNorwegianDate() {
    const today = new Date(); 
    const options = { 
        weekday: "long",    
        year: "numeric",    
        month: "long",      
        day: "numeric"      
    };
    
    printOut(today.toLocaleDateString("no-NB", options));
}

printNorwegianDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getTodayNorwegianDate() {
    const today = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    printOut(`Today is ${today.toLocaleDateString("no-NB", options)}`);

    return today; 
}

function daysUntil2XKO(today) {
    const releaseDate = new Date(2025, 4, 14); 

    const msPerDay = 1000 * 60 * 60 * 24;
    const difference = releaseDate - today;

    return Math.ceil(difference / msPerDay);
}

const today = getTodayNorwegianDate();
const daysLeft = daysUntil2XKO(today);

printOut(`${daysLeft} days left until the release of 2XKO!`);

let text = "2XKO IS HERE!";
let colors = [
    "red",
    "darkorange",
    "goldenrod",
    "green",
    "blue",
    "indigo",
    "purple"
];
let rainbowText = "";

for (let i = 0; i < text.length; i++) {
    let color = colors[i % colors.length];
    rainbowText += `<span style="color:${color}">${text[i]}</span>`;
}

printOut(rainbowText);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circleInfo(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;

    printOut(`Radius: ${radius}`);
    printOut(`Diameter: ${diameter}`);
    printOut(`Circumference: ${circumference.toFixed(2)}`);
    printOut(`Area: ${area.toFixed(2)}`);
}

circleInfo(3);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangleInfo(rect) {
    let circumference = 2 * (rect.width + rect.height);
    let area = rect.width * rect.height;

    printOut(`Width: ${rect.width}`);
    printOut(`Height: ${rect.height}`);
    printOut(`Circumference: ${circumference}`);
    printOut(`Area: ${area}`);
}

let rectangle = {
    width: 8,
    height: 5
};

rectangleInfo(rectangle);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(value, type) {
    let celsius, fahrenheit, kelvin;

    if (type === "C") {
        celsius = value;
        fahrenheit = Math.round((value * 9/5) + 32);
        kelvin = Math.round(value + 273.15);
    } else if (type === "F") {
        fahrenheit = value;
        celsius = Math.round((value - 32) * 5/9);
        kelvin = Math.round(celsius + 273.15);
    } else if (type === "K") {
        kelvin = value;
        celsius = Math.round(value - 273.15);
        fahrenheit = Math.round((celsius * 9/5) + 32);
    } else {
        printOut("Unknown temperature type!");
        return;
    }

    printOut(`Celsius: ${celsius}°C`);
    printOut(`Fahrenheit: ${fahrenheit}°F`);
    printOut(`Kelvin: ${kelvin}K`);
}

convertTemperature(23, "C");  
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateNetPrice(gross, vatGroup) {
    let group = vatGroup.toLowerCase();
    let vat;

    if (group === "normal") {
        vat = 25;
    } else if (group === "food") {
        vat = 15;
    } else if (group === "hotel" || group === "transport" || group === "cinema") {
        vat = 10;
    } else {
        printOut("Unknown VAT group!");
        return NaN;
    }

    let net = (100 * gross) / (100 + vat);
    printOut(`${gross} without tax is ${net.toFixed(2)}`);
    return net;
}

calculateNetPrice(123, "normal");     
calculateNetPrice(123, "food");       
calculateNetPrice(123, "hotel");      
calculateNetPrice(3, "goblins");    
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateSpeed(distance, time, speed) {
    let missing = 0;
    if (distance === undefined || distance === null) missing++;
    if (time === undefined || time === null) missing++;
    if (speed === undefined || speed === null) missing++;

    if (missing > 1) {
        printOut("NaN");
        return NaN;
    }

    if (distance === undefined || distance === null) {
        distance = speed * time;
    } else if (time === undefined || time === null) {
        time = distance / speed;
    } else if (speed === undefined || speed === null) {
        speed = distance / time;
    }

    printOut(`distance: ${distance}, time: ${time}, speed: ${speed}`);
    return { distance, time, speed };
}

calculateSpeed(100, 2, null);  
calculateSpeed(null, 6, 16); 
calculateSpeed(1467, null, 68); 
calculateSpeed(null, null, 30); 
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function adjustText(text, maxSize, char, insertBefore) {
    let newText = text;

    while (newText.length < maxSize) {
        if (insertBefore) {
            newText = char + newText; 
        } else {
            newText = newText + char; 
        }
    }

    printOut(newText);
    return newText;
}

adjustText("Hello", 15, "*", true); 
adjustText("World", 55, "+", false);   
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testMathExpression(lines) {
    let currentNumber = 1; 

    for (let n = 1; n <= lines; n++) {
        let leftCount = n + 1;
        let rightCount = n;

        let leftNumbers = [];
        for (let i = 0; i < leftCount; i++) {
            leftNumbers.push(currentNumber++);
        }
        let sumLeft = leftNumbers.reduce((a, b) => a + b, 0);

        let rightNumbers = [];
        for (let i = 0; i < rightCount; i++) {
            rightNumbers.push(currentNumber++);
        }
        let sumRight = rightNumbers.reduce((a, b) => a + b, 0);

        if (sumLeft !== sumRight) {
            printOut(`Test failed on line ${n}: left=${sumLeft}, right=${sumRight}`);
            return;
        }
    }

    printOut("Math's fun!");
}

testMathExpression(200);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
    if (n <= 1) {  
        return 1;
    } else {
        return n * factorial(n - 1); 
    }
}

let number = 3;
let result = factorial(number);
printOut(`Factorial of ${number} is ${result}`);
printOut(newLine);
