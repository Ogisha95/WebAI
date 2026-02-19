const statisticsNav = document.getElementById("statisticsNav");
const hourlyNav = document.getElementById("hourlyNav");
const aboutNav = document.getElementById("aboutNav");

const statisticsMain = document.getElementById("statisticsMain");
const hourlyMain = document.getElementById("hourlyMain");
const aboutMain = document.getElementById("aboutMain");

function removeActiveNav() {
  statisticsNav.classList.remove("active");
  hourlyNav.classList.remove("active");
  aboutNav.classList.remove("active");
}
function hideAllSections() {
  statisticsMain.classList.remove("active");
  hourlyMain.classList.remove("active");
  aboutMain.classList.remove("active");
}

statisticsNav.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  removeActiveNav();

  statisticsMain.classList.add("active");
  statisticsNav.classList.add("active");
});

hourlyNav.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  removeActiveNav();

  hourlyMain.classList.add("active");
  hourlyNav.classList.add("active");
});

aboutNav.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  removeActiveNav();

  aboutMain.classList.add("active");
  aboutNav.classList.add("active");
});

let weatherService = {
  apiKey: "f9a1ed58e9a4ba7fe637123e1001f858",
  getWeatherData: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${this.apiKey}`,
    )
      .then(function (response) {
        response
          .json()
          .then(function (data) {
            console.log(data);
          })
          .catch(function (errorParse) {
            console.log(errorParse);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};

weatherService.getWeatherData("Skopje");
