let button = document.getElementById("clickBtn");
let tableDiv = document.getElementById("table-body");

button.addEventListener("click", function () {
  fetch("https://swapi.py4e.com/api/planets/?page=1")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      createTable(data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
});

function createTable(planets) {
  tableDiv.innerHTML = "";

  for (let i = 0; i < planets.length; i++) {
    let row = document.createElement("tr");

    let name = document.createElement("td");
    name.textContent = planets[i].name || "Unknown";

    let population = document.createElement("td");
    population.textContent = planets[i].population || "Unknown";

    let climate = document.createElement("td");
    climate.textContent = planets[i].climate || "Unknown";

    let gravity = document.createElement("td");
    gravity.textContent = planets[i].gravity || "Unknown";

    row.appendChild(name);
    row.appendChild(population);
    row.appendChild(climate);
    row.appendChild(gravity);

    tableDiv.appendChild(row);
  }
}
