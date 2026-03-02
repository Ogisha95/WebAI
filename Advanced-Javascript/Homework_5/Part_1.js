const button = document.getElementById("loadBtn");
const list = document.getElementById("pokemonList");

button.addEventListener("click", getPokemons);

async function getPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");

    if (response.status !== 200) {
      throw new Error("Error");
    }

    const data = await response.json();

    list.innerHTML = "";

    data.results.slice(0, 10).forEach((pokemon) => {
      const li = document.createElement("li");
      li.textContent = pokemon.name;
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
