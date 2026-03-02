const button = document.getElementById("loadDogBtn");
const container = document.getElementById("dogContainer");

button.addEventListener("click", getDogs);

async function getDogs() {
  try {
    const response = await fetch("https://dog.ceo/api/breed/hound/images");

    if (response.status !== 200) {
      throw new Error("Error");
    }

    const data = await response.json();

    container.innerHTML = "";

    data.message.forEach((imageUrl) => {
      const img = document.createElement("img");
      img.src = imageUrl;
      img.width = 150;
      img.style.margin = "10px";

      container.appendChild(img);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
