"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.getElementById("cmbTask1Calculate").addEventListener("click", function() {
    const width = parseFloat(document.getElementById("txtRectWidth").value);
    const height = parseFloat(document.getElementById("txtRectHeight").value);
    
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    alert("Please enter valid numbers greater than 0!");
    return;
}
    const perimeter = 2 * (width + height);
    const area = width * height;

    document.getElementById("txtTask1Output").innerText = `Circumference = ${perimeter}, Area = ${area}`;
});

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
let task2Words = [];
const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const word = txtTask2Word.value.trim();
        if (word) {
            task2Words.push(word);
            document.getElementById("txtTask2Output").innerText = `Number of words = ${task2Words.length}, Words: ${task2Words.join(", ")}`;
            txtTask2Word.value = "";
        }
    }
});

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.getElementById("cmbTask3CheckAnswer").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll('input[name="chkTask3"]:checked');
    const selected = Array.from(checkboxes).map(cb => cb.value);
    document.getElementById("txtTask3Output").innerText = `Selected: ${selected.join(", ")}`;
});

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const divTask4Cars = document.getElementById("divTask4Cars");

CarTypes.forEach(car => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "task4Car";
    radio.value = car.caption;
    radio.id = "car" + car.value;

    const label = document.createElement("label");
    label.htmlFor = radio.id;
    label.innerText = car.caption;

    divTask4Cars.appendChild(radio);
    divTask4Cars.appendChild(label);
    divTask4Cars.appendChild(document.createElement("br"));
});

divTask4Cars.addEventListener("change", function() {
    const selectedRadio = document.querySelector('input[name="task4Car"]:checked');
    document.getElementById("txtTask4Output").innerText = selectedRadio ? `Selected Car: ${selectedRadio.value}` : "No car selected";
});

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.getElementById("selectTask5Animals").addEventListener("change", function() {
    document.getElementById("txtTask5Output").innerText = `Selected Animal: ${this.options[this.selectedIndex].text}`;
});

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask6Girls = document.getElementById("selectTask6Girls");

GirlsNames.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.text = name;
    selectTask6Girls.appendChild(option);
});

selectTask6Girls.addEventListener("change", function() {
    document.getElementById("txtTask6Output").innerText = `You selected: ${this.value}`;
})

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectMovieGenre = document.getElementById("selectMovieGenre");
MovieGenre.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.text = genre;
    selectMovieGenre.appendChild(option);
});

const table = document.getElementById("tblMovies");

document.getElementById("cmbAddMovie").addEventListener("click", function() {
    const title = document.getElementById("txtMovieTitle").value.trim();
    const genre = selectMovieGenre.value;
    const director = document.getElementById("txtMovieDirector").value.trim();
    const rate = document.getElementById("txtMovieRate").value.trim();

    if (!title || !genre || !director || !rate) {
        alert("Please fill in all movie fields!");
        return;
    }

    const row = table.insertRow(-1);
    const rowIndex = table.rows.length - 1; 
    row.insertCell(0).innerText = rowIndex;
    row.insertCell(1).innerText = title;
    row.insertCell(2).innerText = genre;
    row.insertCell(3).innerText = director;
    row.insertCell(4).innerText = rate;

    document.getElementById("txtMovieTitle").value = "";
    document.getElementById("txtMovieDirector").value = "";
    document.getElementById("txtMovieRate").value = "5";
});