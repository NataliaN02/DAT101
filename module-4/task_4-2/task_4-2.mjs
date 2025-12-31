"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numbers = [];
for (let i = 1; i <= 20; i++) {
  numbers.push(i);
}

for (let i = 0; i < numbers.length; i++) {
  printOut(numbers[i]);
}
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(numbers.join(" | "));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "Hei på deg, hvordan har du det?";
const words = text.replace("?", "").replace(",", "").split(" ");

for (let i = 0; i < words.length; i++) {
  printOut(`Word number ${i + 1}, index ${i}, word: ${words[i]}`);
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girlNames = [
  "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit",
  "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne",
  "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"
];

function removeFromArray(arr, name) {
  const index = arr.indexOf(name);
  if (index === -1) {
    printOut(`${name} does NOT exist in the array`);
  } else {
    arr.splice(index, 1);
    printOut(`${name} was removed from the array`);
  }
}

removeFromArray(girlNames, "Kari");
removeFromArray(girlNames, "Alex");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const boyNames = [
  "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip",
  "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias",
  "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"
];

const allNames = [];
allNames.push(...girlNames);
allNames.push(...boyNames);

printOut(allNames.join(", "));
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
  #title;
  #author;
  #isbn;

  constructor(aTitle, aAuthor, aISBN) {
    this.#title = aTitle;
    this.#author = aAuthor;
    this.#isbn = aISBN;
  }

  toString() {
    return `${this.#title} by ${this.#author} (ISBN: ${this.#isbn})`;
  }
}

const books = [
  new TBook("1984", "George Orwell", "9780451524935"),
  new TBook("The Hobbit", "J.R.R. Tolkien", "9780547928227"),
  new TBook("Clean Code", "Robert C. Martin", "9780132350884")
];

for (let book of books) {
  printOut(book.toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
  WeekDay1: { value: 0x01, name: "Monday" },
  WeekDay2: { value: 0x02, name: "Tuesday" },
  WeekDay3: { value: 0x04, name: "Wednesday" },
  WeekDay4: { value: 0x08, name: "Thursday" },
  WeekDay5: { value: 0x10, name: "Friday" },
  WeekDay6: { value: 0x20, name: "Saturday" },
  WeekDay7: { value: 0x40, name: "Sunday" },
  Workdays: { value: 0x1F, name: "Workdays" },
  Weekends: { value: 0x60, name: "Weekend" }
};

const weekKeys = Object.keys(EWeekDays);

for (let key of weekKeys) {
  printOut(`${key}: ${EWeekDays[key].name} (${EWeekDays[key].value})`);
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers = [];
for (let i = 0; i < 35; i++) {
  randomNumbers.push(Math.floor(Math.random() * 20) + 1);
}

const ascending = [...randomNumbers].sort((a, b) => a - b);
const descending = [...randomNumbers].sort((a, b) => b - a);

printOut("Ascending: " + ascending.join(", "));
printOut("Descending: " + descending.join(", "));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const frequency = {};

for (let num of randomNumbers) {
  frequency[num] = (frequency[num] || 0) + 1;
}

const freqArray = Object.entries(frequency)
  .map(([num, count]) => ({ num: Number(num), count }))
  .sort((a, b) => b.count - a.count || a.num - b.num);

for (let item of freqArray) {
  printOut(`Number ${item.num} occurs ${item.count} times`);
}
printOut(newLine);

/*Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const table = [];

for (let row = 1; row <= 5; row++) {
  const columns = [];
  for (let col = 1; col <= 9; col++) {
    columns.push(`Row ${row}, Column ${col}`);
  }
  table.push(columns);
}

for (let row = 0; row < table.length; row++) {
  printOut(table[row].join(" | "));
}
printOut(newLine);
