let tableDiv = document.getElementById("table-body");
let button = document.getElementById("clickBtn");

let nextBtn = document.createElement("button");
nextBtn.textContent = "NEXT 10";
nextBtn.style.display = "none";
document.body.appendChild(nextBtn);

let prevBtn = document.createElement("button");
prevBtn.textContent = "PREVIOUS 10";
prevBtn.style.display = "none";
document.body.appendChild(prevBtn);

function fetchPlanets(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      createTable(data.results);
    })
    .catch((error) => console.log(error));
}

function createTable(planets) {
  tableDiv.innerHTML = "";

  planets.forEach((planet) => {
    let row = document.createElement("tr");

    let name = document.createElement("td");
    name.textContent = planet.name || "Unknown";

    let population = document.createElement("td");
    population.textContent = planet.population || "Unknown";

    let climate = document.createElement("td");
    climate.textContent = planet.climate || "Unknown";

    let gravity = document.createElement("td");
    gravity.textContent = planet.gravity || "Unknown";

    row.appendChild(name);
    row.appendChild(population);
    row.appendChild(climate);
    row.appendChild(gravity);

    tableDiv.appendChild(row);
  });
}

button.addEventListener("click", function () {
  fetchPlanets("https://swapi.py4e.com/api/planets/?page=1");
  nextBtn.style.display = "inline-block";
  button.style.display = "none";
});

nextBtn.addEventListener("click", function () {
  fetchPlanets("https://swapi.py4e.com/api/planets/?page=2");
  nextBtn.style.display = "none";
  prevBtn.style.display = "inline-block";
});

prevBtn.addEventListener("click", function () {
  fetchPlanets("https://swapi.py4e.com/api/planets/?page=1");
  prevBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
});
