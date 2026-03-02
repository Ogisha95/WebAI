const button = document.getElementById("loadPlanetBtn");
const tableBody = document.getElementById("planetTableBody");

button.addEventListener("click", getPlanets);

async function getPlanets() {
  try {
    const response = await fetch("https://swapi.py4e.com/api/planets/?page=1");

    if (response.status !== 200) {
      throw new Error("Error");
    }

    const data = await response.json();

    tableBody.innerHTML = "";

    data.results.slice(0, 10).forEach((planet) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td>
        <td>${planet.url}</td>
      `;

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
