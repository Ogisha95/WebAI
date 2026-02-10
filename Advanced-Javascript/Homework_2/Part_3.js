let dogBtn = document.getElementById("dogBtn");
let dogContainer = document.getElementById("dogContainer");

dogBtn.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breed/hound/images")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dogContainer.innerHTML = "";

      data.message.forEach((url) => {
        let img = document.createElement("img");
        img.src = url;
        img.style.width = "200px";
        img.style.margin = "5px";
        dogContainer.appendChild(img);
      });
    })
    .catch((error) => console.log("Error:", error));
});
